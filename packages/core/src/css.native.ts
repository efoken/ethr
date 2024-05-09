import { isFunction, isString } from "@ethr/utils";
import { css as rsdCss } from "react-strict-dom";
import { CSSBoxShadow } from "./CSSBoxShadow";

function processStyle(style: any) {
  const result = { ...style };
  for (const [propName, styleValue] of Object.entries(result)) {
    if (propName === "cursor") {
      delete result.cursor;
    }
    if (propName === "display" && isString(styleValue)) {
      result.display = styleValue.replace(/^inline-/, "");
    }
    if (propName === "boxShadow" && isString(styleValue)) {
      const boxShadowStyles = new CSSBoxShadow(styleValue).resolve();
      Object.assign(result, boxShadowStyles);
      delete result.boxShadow;
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

export const css: typeof rsdCss & {
  __customProperties: Record<string, any>;
} = {
  __customProperties: {},
  ...rsdCss,
  create,
  include,
};
