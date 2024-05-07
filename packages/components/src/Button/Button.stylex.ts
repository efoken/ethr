import { css } from "@ethr/core";
import { borders, colors, spacing, typography } from "../globals.stylex";

export const buttonStyles = css.create({
  root: {
    alignItems: "center",
    borderWidth: 0,
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
    paddingBottom: spacing[3],
    paddingLeft: spacing[4],
    paddingRight: spacing[4],
    paddingTop: spacing[3],
  },
  sizeLarge: {
    ...css.include(typography.utilityButtonLarge),
    paddingBottom: spacing[2],
    paddingLeft: spacing[4],
    paddingRight: spacing[4],
    paddingTop: spacing[2],
  },
  sizeMedium: {
    ...css.include(typography.utilityButtonLarge),
    paddingBottom: spacing[1],
    paddingLeft: spacing[4],
    paddingRight: spacing[4],
    paddingTop: spacing[1],
  },
  sizeSmall: {
    ...css.include(typography.utilityButtonSmall),
    paddingBottom: `calc(${spacing[1]} * 0.75)`,
    paddingLeft: spacing[4],
    paddingRight: spacing[4],
    paddingTop: `calc(${spacing[1]} * 0.75)`,
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
