import { css as rsdCss } from "react-strict-dom";
import type { Styles } from "./types";

export const css: typeof rsdCss & {
  __customProperties: Record<string, any>;
  inline: (style: React.CSSProperties) => Styles;
} = {
  __customProperties: {},
  ...rsdCss,
  inline: (style) => style as Styles,
};
