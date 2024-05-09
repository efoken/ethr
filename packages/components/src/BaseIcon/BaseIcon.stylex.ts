import { css } from "@ethr/core";
import { borders, colors } from "../globals.stylex";

export const baseIconStyles = css.create({
  root: {
    alignItems: "center",
    backgroundColor: colors.primary0,
    boxSizing: "border-box",
    display: "inline-flex",
    flexShrink: 0,
    justifyContent: "center",
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
  sizeXsmall: {
    height: 24,
    width: 24,
  },
  sizeXxsmall: {
    height: 20,
    width: 20,
  },
  shapeCircle: {
    borderRadius: borders.radius3,
  },
  shapeSquare: {
    borderRadius: borders.radius0,
  },
});
