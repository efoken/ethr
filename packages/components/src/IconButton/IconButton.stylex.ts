import { css } from "@ethr/core";
import { borders, colors, spacing } from "../globals.stylex";

export const iconButtonStyles = css.create({
  root: {
    alignItems: "center",
    borderWidth: 0,
    cursor: "pointer",
    display: "inline-flex",
    flexDirection: "row",
    gap: spacing[1],
    justifyContent: "center",
    transitionDuration: "0.25s",
    transitionProperty: "backgroundColor, borderColor, color",
    userSelect: "none",
  },
  sizeXlarge: {
    padding: spacing[3],
  },
  sizeLarge: {
    padding: spacing[2],
  },
  sizeMedium: {
    padding: `calc(${spacing[1]} * 1.25)`,
  },
  sizeSmall: {
    padding: spacing[0],
  },
  variantPrimary: {
    backgroundColor: {
      default: colors.primary70,
      ":active": colors.primary90,
    },
    color: colors.white,
  },
  variantSecondary: {
    backgroundColor: {
      default: colors.white,
      ":active": colors.primary90,
    },
    borderColor: {
      default: colors.neutral20,
      ":active": colors.primary90,
    },
    borderStyle: "solid",
    borderWidth: borders.width0,
    color: {
      default: colors.primary70,
      ":active": colors.white,
    },
  },
  variantTertiary: {
    backgroundColor: {
      default: "transparent",
      ":active": colors.primary90,
    },
    color: {
      default: colors.primary70,
      ":active": colors.white,
    },
  },
  themeRectangle: {
    borderRadius: borders.radius0,
  },
  themeRounded: {
    borderRadius: borders.radius4,
  },
  disabled: (variant: "primary" | "secondary" | "tertiary") => ({
    backgroundColor:
      variant === "primary"
        ? colors.neutral10
        : variant === "secondary"
          ? colors.white
          : undefined,
    color: colors.neutral40,
    pointerEvents: "none",
  }),
});
