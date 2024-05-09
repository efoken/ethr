import { css } from "@ethr/core";
import { borders, colors, spacing } from "../globals.stylex";
import { typography } from "../typography.stylex";

export const buttonStyles = css.create({
  root: {
    alignItems: "center",
    borderWidth: 0,
    boxSizing: "border-box",
    cursor: "pointer",
    display: "inline-flex",
    flexDirection: "row",
    gap: spacing[1],
    justifyContent: "center",
    textAlign: "center",
    transitionDuration: "0.25s",
    transitionProperty: "backgroundColor, borderColor, color",
    userSelect: "none",
  },
  sizeXlarge: {
    ...css.include(typography.utilityButtonLarge),
    paddingBlock: spacing[3],
    paddingInline: spacing[4],
  },
  sizeLarge: {
    ...css.include(typography.utilityButtonLarge),
    paddingBlock: spacing[2],
    paddingInline: spacing[4],
  },
  sizeMedium: {
    ...css.include(typography.utilityButtonLarge),
    paddingBlock: spacing[1],
    paddingInline: spacing[4],
  },
  sizeSmall: {
    ...css.include(typography.utilityButtonSmall),
    paddingBlock: `calc(${spacing[1]} * 0.75)`,
    paddingInline: spacing[4],
  },
  variantPrimary: (color: "primary" | "danger") => ({
    backgroundColor: {
      default: color === "primary" ? colors.primary70 : colors.danger10,
      ":active": color === "primary" ? colors.primary90 : colors.danger30,
    },
    color: colors.white,
  }),
  variantSecondary: (color: "primary" | "danger") => ({
    backgroundColor: {
      default: colors.white,
      ":active": color === "primary" ? colors.primary90 : colors.danger30,
    },
    borderColor: {
      default: colors.neutral20,
      ":active": color === "primary" ? colors.primary90 : colors.danger30,
    },
    borderStyle: "solid",
    borderWidth: borders.width0,
    color: {
      default: color === "primary" ? colors.primary70 : colors.danger10,
      ":active": colors.white,
    },
  }),
  variantTertiary: (color: "primary" | "danger") => ({
    backgroundColor: {
      default: "transparent",
      ":active": color === "primary" ? colors.primary90 : colors.danger30,
    },
    color: {
      default: color === "primary" ? colors.primary70 : colors.danger10,
      ":active": colors.white,
    },
  }),
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
