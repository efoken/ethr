import { css } from "@ethr/core";
import { isString } from "@ethr/utils";
import { borders, colors, sizes } from "../globals.stylex";
import type { CryptocurrencyColor } from "./Cryptocurrency.types";

export const cryptocurrencyStyles = css.create({
  root: {
    alignItems: "center",
    boxSizing: "border-box",
    display: "inline-flex",
    flexShrink: 0,
    justifyContent: "center",
    position: "relative",
  },
  sizeXlarge: {
    height: sizes[7],
    width: sizes[7],
  },
  sizeLarge: {
    height: sizes[6],
    width: sizes[6],
  },
  sizeMedium: {
    height: sizes[5],
    width: sizes[5],
  },
  sizeSmall: {
    height: sizes[4],
    width: sizes[4],
  },
  shapeCircle: {
    borderRadius: borders.radius3,
    overflow: "visible",
  },
  shapeSquare: {
    borderRadius: borders.radius0,
    overflow: "hidden",
  },
  themeColored: (color: CryptocurrencyColor) => ({
    backgroundColor: isString(color) ? color : undefined,
    borderColor: isString(color) ? color : undefined,
  }),
  themeLight: () => ({
    borderColor: colors.neutral20,
    borderStyle: "solid",
    borderWidth: borders.width0,
    overflow: "hidden",
  }),
  logo: {
    position: "relative",
    zIndex: 1,
  },
  gradient: {
    position: "absolute",
  },
});
