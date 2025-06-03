import { css } from "@ethr/core";
import { colors, shadows, spacing } from "../globals.stylex";
import { fonts, typography } from "../typography.stylex";

export const listItemStyles = css.create({
  root: {
    alignItems: "start",
    backgroundColor: colors.white,
    borderColor: colors.neutral20,
    borderRadius: 0,
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
  sizeMedium: {},
  sizeSmall: {},
  variantNone: {},
  variantDivider: {
    position: "relative",
  },
  variantFullDivider: {
    position: "relative",
  },
  variantBorder: {
    position: "relative",
  },
  variantDashedBorder: {
    position: "relative",
  },
  variantElevation: {
    boxShadow: shadows[1],
  },
  content: {
    alignItems: "center",
    display: "flex",
    flexGrow: 1,
    gap: spacing[2],
    padding: spacing[3],
  },
  text: {
    flexGrow: 1,
  },
  primary: {
    ...css.include(typography.bodyLarge),
    color: "#191919",
  },
  primarySizeMedium: {
    fontWeight: fonts.weightSemibold,
  },
  primarySizeSmall: {
    fontWeight: fonts.weightRegular,
  },
  secondary: {
    ...css.include(typography.bodySmall),
    color: colors.neutral60,
  },
  divider: {
    backgroundColor: colors.neutral20,
    bottom: 0,
    height: "1px",
    position: "absolute",
  },
  dividerVariantDivider: {
    insetInline: spacing[3],
  },
  dividerVariantFullDivider: {
    insetInline: 0,
  },
  border: {
    borderColor: "inherit",
    borderRadius: "inherit",
    borderWidth: "1px",
    inset: 0,
    pointerEvents: "none",
    position: "absolute",
  },
  borderVariantBorder: {
    borderStyle: "solid",
  },
  borderVariantDashedBorder: {
    borderStyle: "dashed",
  },
});
