import { css as rsdCss } from "react-strict-dom";

export const css: typeof rsdCss & {
  __customProperties: Record<string, any>;
} = {
  __customProperties: {},
  ...rsdCss,
};
