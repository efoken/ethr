import { transform, type Config } from "@svgr/core";
import { kebabCase, pascalCase } from "change-case";
import fetchBuilder from "fetch-retry";
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { format } from "prettier";
import { loadConfig, optimize } from "svgo";

const FIGMA_FILE_KEY = "aipHWxSvZDex9waEFhiTXH";
const FIGMA_NODE_ID = "2973:42129";

const rootDir = path.join(import.meta.dirname, "..", "..", "..");
const packageDir = path.join(import.meta.dirname, "..");
const assetsPath = path.join(packageDir, "assets");
const srcPath = path.join(packageDir, "src");
const indexPath = path.join(srcPath, "index.ts");

function normalizeName(str: string) {
  return kebabCase(str)
    .replace(/^1$/, "one")
    .replace(/-1$/, "-one")
    .replace(/^2$/, "two")
    .replace(/-2$/, "-two")
    .replace(/^3$/, "three")
    .replace(/-3$/, "-three")
    .replace(/^4$/, "four")
    .replace(/-4$/, "-four")
    .replace(/^5$/, "five")
    .replace(/-5$/, "-five")
    .replace(/^6$/, "six")
    .replace(/^-6$/, "-six")
    .replace(/^7$/, "seven")
    .replace(/^8$/, "eight")
    .replace(/^9$/, "nine");
}

async function fetch(url: RequestInfo, init?: RequestInit) {
  const fetchRetry = fetchBuilder(globalThis.fetch, {
    retries: 3,
    retryDelay: 1000,
    retryOn: [429],
  });
  const config = JSON.parse(
    // eslint-disable-next-line unicorn/no-await-expression-member
    (await fs.readFile(path.join(rootDir, ".figmarc.json"))).toString(),
  );
  return fetchRetry(url, {
    ...init,
    headers: {
      ...init?.headers,
      "x-figma-token": config.personalAccessToken,
    },
  });
}

async function fetchJson<T>(url: string) {
  return fetch(url, {
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json() as Promise<T>);
}

async function fetchComponents() {
  const data = await fetchJson<{
    components: Record<
      string,
      { key: string; name: string; componentSetId: string }
    >;
    componentSets: Record<string, { name: string }>;
  }>(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}?ids=${FIGMA_NODE_ID}`);

  return Object.entries(data.components)
    .map(([key, component]) => ({
      key,
      name: normalizeName(data.componentSets[component.componentSetId].name),
      theme: component.name.toLowerCase().replace("theme=", ""),
    }))
    .sort(() => 0.5 - Math.random());
}

async function fetchImage(component: { key: string }) {
  const data = await fetchJson<{ images?: Record<string, string> }>(
    `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}/?ids=${component.key}&format=svg`,
  );
  if (data.images != null) {
    // eslint-disable-next-line unicorn/no-await-expression-member
    return (await fetch(data.images[component.key])).text();
  }
}

async function createComponent(
  data: string,
  component: { name: string; theme: string },
) {
  const componentName = pascalCase(`${component.name} ${component.theme}`);

  const template: Config["template"] = (variables, { tpl }) => tpl`
    ${variables.imports}
    import { createIcon } from "@ethr/components";
    import { html } from "@ethr/core";${"\n"}
    export const ${componentName} = createIcon(${variables.jsx}, "${componentName}");`;

  let jsCode = await transform(
    data,
    {
      plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
      svgoConfig: {
        plugins: [
          {
            name: "removeXMLNS",
          },
          {
            name: "removeAttrs",
            params: { attrs: ["fill", "svg:height", "svg:width"] },
          },
        ],
      },
      template,
      typescript: true,
    },
    { componentName },
  );

  jsCode = await format(
    jsCode
      .replace(/<svg\s*/, "<html.svg ")
      .replace("</svg>", "</html.svg>")
      .replaceAll(/<path\s*/g, "<html.path ")
      .replaceAll("</path>", "</html.path>")
      .replaceAll(/<defs\s*/g, "<html.defs ")
      .replaceAll("</defs>", "</html.defs>")
      .replaceAll(/<g\s*/g, "<html.g ")
      .replaceAll("</g>", "</html.g>")
      .replaceAll(/<clipPath\s*/g, "<html.clipPath ")
      .replaceAll("</clipPath>", "</html.clipPath>")
      .replace(/\s*{\.{3}props}/, ""),
    {
      parser: "babel-ts",
      plugins: ["prettier-plugin-organize-imports"],
    },
  );

  return [componentName, jsCode] as const;
}

async function createIndex(componentNames: (string | undefined)[]) {
  const jsCode = await format(
    componentNames
      .map((componentName) =>
        componentName == null ? "" : `export * from "./${componentName}";`,
      )
      .join("\n"),
    {
      parser: "babel-ts",
      plugins: ["prettier-plugin-organize-imports"],
    },
  );
  return jsCode;
}

export default async function main() {
  const svgoConfig = await loadConfig();

  const components = await fetchComponents();

  await Promise.all(
    components.map(async (component) => {
      const svgCode = await fetchImage(component);
      const svgPath = path.join(
        assetsPath,
        `${component.name}-${component.theme}.svg`,
      );

      if (svgCode) {
        const output = optimize(svgCode, {
          ...svgoConfig,
          path: path.basename(svgPath),
        });
        await fs.writeFile(svgPath, output.data);

        // eslint-disable-next-line no-console
        console.log(svgPath.replace(`${packageDir}/`, ""));

        const [componentName, jsCode] = await createComponent(
          output.data,
          component,
        );
        const componentPath = path.join(srcPath, `${componentName}.tsx`);
        await fs.writeFile(componentPath, jsCode);

        // eslint-disable-next-line no-console
        console.log(componentPath.replace(`${packageDir}/`, ""));

        return componentName;
      }
    }),
  );

  const componentNames = (await fs.readdir(srcPath))
    // eslint-disable-next-line unicorn/no-await-expression-member
    .filter((name) => name !== "utils" && name !== "index.ts")
    .map((componentName) => componentName.replace(/\.tsx/, ""));

  const jsCode = await createIndex(componentNames);
  await fs.writeFile(indexPath, jsCode);
  // eslint-disable-next-line no-console
  console.log(indexPath.replace(`${packageDir}/`, ""));
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  // Run main function if called via CLI
  main();
}
