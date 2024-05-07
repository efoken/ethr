import { css } from "@ethr/core";
import { borders, colors } from "../globals.stylex";

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
    height: 56,
    width: 56,
  },
  sizeLarge: {
    height: 48,
    width: 48,
  },
  sizeMedium: {
    height: 40,
    width: 40,
  },
  sizeSmall: {
    height: 32,
    width: 32,
  },
  shapeCircle: {
    borderRadius: borders.radius3,
    overflow: "visible",
  },
  shapeSquare: {
    borderRadius: borders.radius0,
    overflow: "hidden",
  },
  themeColored: (color: string | string[]) => ({
    backgroundColor: color,
    borderColor: color,
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
