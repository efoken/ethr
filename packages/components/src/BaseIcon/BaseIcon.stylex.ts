import { css } from "@ethr/core";
import { borders, colors, sizes } from "../globals.stylex";

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
  sizeXsmall: {
    height: sizes[3],
    width: sizes[3],
  },
  sizeXxsmall: {
    height: sizes[2],
    width: sizes[2],
  },
  shapeCircle: {
    borderRadius: borders.radius3,
  },
  shapeSquare: {
    borderRadius: borders.radius0,
  },
});
