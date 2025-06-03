import { isFunction, isString } from "@ethr/utils";
import { css as rsdCss } from "react-strict-dom";
import type { Styles } from "./types";

const webStyles = new Set(["cursor"]);

function processStyle(style: any) {
  const result = { ...style };
  for (const [propName, styleValue] of Object.entries(result)) {
    if (propName === "display" && isString(styleValue)) {
      result.display = styleValue.replace(/^inline-/, "");
    }
    if (webStyles.has(propName)) {
      delete result[propName];
    }
    if (propName === "WebkitLineClamp") {
      result.lineClamp = styleValue;
      delete result.WebkitLineClamp;
    }
  }
  return result;
}

function create(styles: Record<string, any>) {
  const result: any = {};
  for (const [styleName, val] of Object.entries(styles)) {
    result[styleName] = isFunction(val)
      ? (...args: any[]) => {
          const style = val(...args);
          return processStyle(style);
        }
      : processStyle(styles[styleName]);
  }
  return rsdCss.create(result) as any;
}

function include(obj: any) {
  return obj;
}

function inline(obj: any) {
  return obj;
}

export const css: typeof rsdCss & {
  __customProperties: Record<string, any>;
  inline: (style: React.CSSProperties) => Styles;
} = {
  __customProperties: {},
  ...rsdCss,
  create,
  include,
  inline,
};
