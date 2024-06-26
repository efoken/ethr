import { css } from "@ethr/core";

export const fonts = css.defineVars({
  familySans: "NotoSans_400Regular",
  familySerif: "NotoSerif_400Regular",
  size0: 12,
  size1: 14,
  size2: 16,
  size3: 20,
  size4: 24,
  size5: 32,
  size6: 44,
  weightRegular: 400,
  weightSemibold: 600,
  weightBold: 700,
});

export const typography = css.create({
  headingH1: {
    fontFamily: "NotoSans_700Bold",
    fontSize: 44,
    fontWeight: fonts.weightBold,
    letterSpacing: -0.5,
    lineHeight: 48 / 44,
  },
  headingH2: {
    fontFamily: "NotoSans_700Bold",
    fontSize: 32,
    fontWeight: fonts.weightBold,
    letterSpacing: -0.5,
    lineHeight: 40 / 32,
  },
  headingH3: {
    fontFamily: "NotoSans_700Bold",
    fontSize: 24,
    fontWeight: fonts.weightBold,
    letterSpacing: -0.5,
    lineHeight: 32 / 24,
  },
  headingH4: {
    fontFamily: "NotoSans_700Bold",
    fontSize: 20,
    fontWeight: fonts.weightBold,
    letterSpacing: -0.5,
    lineHeight: 24 / 20,
  },
  headingH5: {
    fontFamily: "NotoSans_700Bold",
    fontSize: 16,
    fontWeight: fonts.weightBold,
    letterSpacing: -0.25,
    lineHeight: 24 / 16,
  },
  headingH6: {
    fontFamily: "NotoSans_700Bold",
    fontSize: 14,
    fontWeight: fonts.weightBold,
    letterSpacing: -0.25,
    lineHeight: 20 / 14,
  },
  bodyLarge: {
    fontFamily: "NotoSans_400Regular",
    fontSize: 16,
    fontWeight: fonts.weightRegular,
    letterSpacing: -0.25,
    lineHeight: 24 / 16,
  },
  bodySmall: {
    fontFamily: "NotoSans_400Regular",
    fontSize: 14,
    fontWeight: fonts.weightRegular,
    letterSpacing: -0.25,
    lineHeight: 20 / 14,
  },
  bodyMicro: {
    fontFamily: "NotoSans_400Regular",
    fontSize: 12,
    fontWeight: fonts.weightRegular,
    letterSpacing: -0.25,
    lineHeight: 16 / 12,
  },
  utilityButtonLarge: {
    fontFamily: "NotoSans_600SemiBold",
    fontSize: 16,
    fontWeight: fonts.weightSemibold,
    letterSpacing: -0.25,
    lineHeight: 24 / 16,
  },
  utilityButtonSmall: {
    fontFamily: "NotoSans_600SemiBold",
    fontSize: 14,
    fontWeight: fonts.weightSemibold,
    letterSpacing: -0.25,
    lineHeight: 20 / 14,
  },
});
