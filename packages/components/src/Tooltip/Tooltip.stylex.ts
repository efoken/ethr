import { css } from "@ethr/core";
import { borders, colors, spacing } from "../globals.stylex";
import { fonts, typography } from "../typography.stylex";

export const tooltipStyles = css.create({
  root: {},
  content: {
    ...css.include(typography.bodySmall),
    borderRadius: borders.radius0,
    color: colors.neutral60,
    fontWeight: fonts.weightSemibold,
    paddingBlock: `calc(${spacing[1]} * 0.75)`,
    paddingInline: spacing[2],
  },
  arrow: {},
});
