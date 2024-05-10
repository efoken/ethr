declare module "@stylexjs/webpack-plugin" {
  import type { Compiler, WebpackPluginInstance } from "webpack";

  export interface PluginOptions {
    babelConfig?: {
      babelrc?: boolean;
      plugins?: any[];
      presets?: any[];
    };
    appendTo?: string | ((name: string) => boolean);
    dev?: boolean;
    filename?: string;
    stylexImports?: (string | { as: string; from: string })[];
    useCSSLayers?: boolean;
  }

  export default class StylexPlugin implements WebpackPluginInstance {
    constructor(
      config: PluginOptions & {
        aliases?: Record<string, string | string[]>;
        classNamePrefix?: string;
        genConditionalClasses?: boolean;
        runtimeInjection?: boolean;
        styleResolution?: "application-order" | "property-specificity";
        treeshakeCompensation?: boolean;
        unstable_moduleResolution?: {
          type: "commonJS";
          rootDir: string;
        };
        useRemForFontSize?: boolean;
      },
    );
    apply(config: Compiler): void;
  }
}
