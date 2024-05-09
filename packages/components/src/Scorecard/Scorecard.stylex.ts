import { css } from "@ethr/core";
import { borders, colors, shadows, spacing } from "../globals.stylex";
import { typography } from "../typography.stylex";

export const scorecardStyles = css.create({
  root: {
    backgroundColor: colors.white,
    borderRadius: borders.radius1,
    boxSizing: "border-box",
    display: "flex",
    paddingBlock: spacing[3],
    paddingInline: spacing[3],
  },
  variantNone: {},
  variantStroke: {
    borderColor: colors.neutral10,
    borderStyle: "solid",
    borderWidth: borders.width0,
  },
  variantElevation: {
    boxShadow: shadows[2],
  },
  layoutVertical: (visualPosition: "start" | "end") => ({
    flexDirection: visualPosition === "start" ? "column" : "column-reverse",
    rowGap: spacing[3],
  }),
  layoutHorizontal: (visualPosition: "start" | "end") => ({
    columnGap: spacing[3],
    flexDirection: visualPosition === "start" ? "row" : "row-reverse",
  }),
  text: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    rowGap: spacing[1],
  },
  score: {
    display: "flex",
    flexDirection: "column",
    rowGap: spacing[1],
  },
  label: {
    ...css.include(typography.bodySmall),
    color: colors.neutral60,
    fontWeight: "600",
  },
  count: {
    ...css.include(typography.headingH4),
    color: colors.neutral100,
    fontWeight: "600",
  },
  percentage: {
    display: "flex",
    columnGap: spacing[1],
    flexDirection: "row",
  },
  percentageLabel: {
    ...css.include(typography.bodySmall),
    color: colors.neutral60,
    fontWeight: "600",
  },
});
