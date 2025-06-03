import { css } from "@ethr/core";
import { borders, colors, spacing } from "../globals.stylex";

export const switchStyles = css.create({
  root: {
    boxSizing: "border-box",
    color: colors.neutral100,
    columnGap: spacing[1],
    display: "inline-flex",
    position: "relative",
    verticalAlign: "middle",
  },
  disabled: {
    color: colors.neutral40,
  },
  track: {
    alignItems: "center",
    backgroundColor: colors.neutral20,
    borderRadius: borders.radius4,
    boxSizing: "border-box",
    display: "flex",
    flexShrink: 0,
    height: 16,
    justifyContent: "space-between",
    position: "relative",
    width: 32,
  },
  trackChecked: {
    backgroundColor: colors.primary70,
  },
  trackCheckedDisabled: {
    backgroundColor: colors.neutral20,
  },
  thumb: {
    alignContent: "center",
    backgroundClip: "content-box, border-box, border-box",
    backgroundImage: `linear-gradient(${colors.white}, ${colors.white}), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 20%, rgba(255, 255, 255, 0) 100%), linear-gradient(to bottom, ${colors.white} 0%, color-mix(in srgb, #000 2%, ${colors.white}) 80%, color-mix(in srgb, #000 4%, ${colors.white}) 100%)`,
    backgroundOrigin: "border-box",
    borderColor: "transparent",
    borderRadius: borders.radius4,
    borderStyle: "solid",
    borderWidth: 0.5,
    boxSizing: "border-box",
    display: "inline-flex",
    height: 12,
    justifyContent: "center",
    left: 2,
    position: "absolute",
    top: 2,
    width: 12,
  },
  thumbDisabled: {
    backgroundImage: `linear-gradient(${colors.neutral40}, ${colors.neutral40}), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 20%, rgba(255, 255, 255, 0) 100%), linear-gradient(to bottom, ${colors.neutral40} 0%, color-mix(in srgb, #000 2%, ${colors.neutral40}) 80%, color-mix(in srgb, #000 4%, ${colors.neutral40}) 100%)`,
  },
  thumbChecked: {
    left: 18,
  },
  action: {
    borderRadius: borders.radius4,
    inset: 0,
    position: "absolute",
  },
  actionFocusVisible: {
    outlineColor: colors.primary70,
    outlineOffset: 2,
    outlineStyle: "solid",
    outlineWidth: 2,
  },
  input: {
    boxSizing: "border-box",
    cursor: "pointer",
    height: "100%",
    margin: 0,
    opacity: 0,
    position: "absolute",
    width: "100%",
  },
  label: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
  },
});
