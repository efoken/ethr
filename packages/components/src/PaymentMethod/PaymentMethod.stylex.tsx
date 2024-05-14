import { css } from "@ethr/core";
import { borders, colors, sizes } from "../globals.stylex";

export const paymentMethodStyles = css.create({
  root: {
    alignItems: "center",
    aspectRatio: 3 / 2,
    borderRadius: borders.radius0,
    boxSizing: "border-box",
    display: "inline-flex",
    flexShrink: 0,
    justifyContent: "center",
    position: "relative",
    width: "auto",
  },
  sizeXlarge: {
    height: sizes[7],
  },
  sizeLarge: {
    height: sizes[6],
  },
  sizeMedium: {
    height: sizes[5],
  },
  sizeSmall: {
    height: sizes[4],
  },
  sizeXsmall: {
    height: sizes[3],
  },
  themeColored: (color: string) => ({
    backgroundColor: color,
    borderColor: color,
  }),
  themeLight: () => ({
    backgroundColor: colors.white,
    borderColor: colors.neutral20,
    borderStyle: "solid",
    borderWidth: borders.width0,
    overflow: "hidden",
  }),
  logo: {
    position: "relative",
    zIndex: 1,
  },
});
