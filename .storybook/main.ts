import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    { directory: "../packages/core/src" },
    { directory: "../packages/components/src" },
  ],
  addons: ["@storybook/addon-a11y", "@storybook/addon-essentials"],
  framework: "@storybook/nextjs",
  // eslint-disable-next-line @typescript-eslint/no-shadow
  webpackFinal: (config) => ({
    ...config,
    cache: true,
    module: {
      ...config.module,
      rules: config.module?.rules?.concat([
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules\/(?!(react-strict-dom)\/).*/,
          use: "babel-loader",
        },
      ]),
    },
    plugins: config.plugins?.concat([
      // new StylexPlugin({
      //   dev: true,
      //   runtimeInjection: true,
      //   // genConditionalClasses: true,
      //   treeshakeCompensation: true,
      //   stylexImports: [{ from: "@ethr/core", as: "css" }, "@stylexjs/stylex"],
      //   unstable_moduleResolution: {
      //     type: "commonJS",
      //     rootDir: __dirname,
      //   },
      // }),
    ]),
  }),
};

export default config;
