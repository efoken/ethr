import { css } from "@ethr/core";
import { colors, sizes, spacing } from "../globals.stylex";
import { typography } from "../typography.stylex";

export const checkboxStyles = css.create({
  root: {
    boxSizing: "border-box",
    color: colors.neutral100,
    columnGap: spacing[1],
    display: "inline-flex",
    position: "relative",
    verticalAlign: "middle",
  },
  sizeMedium: {
    ...css.include(typography.bodyLarge),
  },
  sizeSmall: {
    ...css.include(typography.bodySmall),
  },
  disabled: {
    color: colors.neutral40,
  },
  checkbox: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: colors.neutral50,
    borderRadius: 2,
    borderStyle: "solid",
    borderWidth: 1,
    boxSizing: "border-box",
    display: "inline-flex",
    flexShrink: 0,
    justifyContent: "center",
    margin: 2,
  },
  checkboxMedium: {
    height: sizes[2],
    width: sizes[2],
  },
  checkboxSmall: {
    height: sizes[1],
    width: sizes[1],
  },
  checkboxDisabled: {
    borderColor: colors.neutral40,
  },
  checkboxChecked: {
    backgroundColor: colors.primary70,
    borderColor: colors.primary70,
  },
  checkboxCheckedDisabled: {
    backgroundColor: colors.neutral40,
    borderColor: colors.neutral40,
  },
  action: {
    borderRadius: 2,
    inset: 0,
    position: "absolute",
    zIndex: 1,
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
