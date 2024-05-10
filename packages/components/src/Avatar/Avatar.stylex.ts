import { css } from "@ethr/core";
import { borders, colors, sizes } from "../globals.stylex";
import { fonts, typography } from "../typography.stylex";

export const avatarStyles = css.create({
  root: {
    alignItems: "center",
    boxSizing: "border-box",
    display: "inline-flex",
    flexShrink: 0,
    justifyContent: "center",
    overflow: "hidden",
    verticalAlign: "middle",
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
  variantImage: {
    backgroundColor: colors.neutral10,
  },
  variantAlphabet: {
    backgroundColor: colors.primary0,
    color: colors.primary70,
  },
  variantAlphabetXlarge: {
    ...css.include(typography.headingH3),
    fontWeight: fonts.weightSemibold,
  },
  variantAlphabetLarge: {
    ...css.include(typography.headingH3),
    fontWeight: fonts.weightSemibold,
  },
  variantAlphabetMedium: {
    ...css.include(typography.headingH4),
    fontWeight: fonts.weightSemibold,
  },
  variantAlphabetSmall: {
    ...css.include(typography.headingH5),
    fontWeight: fonts.weightSemibold,
  },
  variantInitials: {
    backgroundColor: colors.primary0,
    color: colors.primary70,
  },
  variantInitialsXlarge: {
    ...css.include(typography.headingH4),
    fontWeight: fonts.weightSemibold,
  },
  variantInitialsLarge: {
    ...css.include(typography.headingH5),
    fontWeight: fonts.weightSemibold,
  },
  variantInitialsMedium: {
    ...css.include(typography.headingH6),
    fontWeight: fonts.weightSemibold,
  },
  variantInitialsSmall: {
    ...css.include(typography.headingH6),
    fontWeight: fonts.weightSemibold,
  },
  variantPlaceholder: {
    backgroundColor: "transparent",
  },
  shapeCircle: {
    borderRadius: borders.radius3,
  },
  shapeSquare: {
    borderRadius: borders.radius0,
  },
  text: {
    WebkitLineClamp: 1,
  },
  image: {
    boxSizing: "border-box",
    height: "100%",
    objectFit: "cover",
    width: "100%",
  },
  placeholder: {
    boxSizing: "border-box",
    height: "100%",
    width: "100%",
  },
});
