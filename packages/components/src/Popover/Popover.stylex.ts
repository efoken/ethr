import { css } from "@ethr/core";
import { borders, colors, shadows } from "../globals.stylex";
import type { PopoverPlacement } from "./Popover.types";

export const popoverStyles = css.create({
  root: {
    zIndex: 1,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: borders.radius0,
    boxShadow: shadows[0],
  },
  arrow: (placement: PopoverPlacement) => ({
    borderBottomColor:
      placement.startsWith("left") || placement.startsWith("right")
        ? "transparent"
        : colors.white,
    borderBottomWidth: placement.startsWith("top")
      ? 0
      : placement.startsWith("bottom")
        ? 8
        : 6,
    borderLeftColor:
      placement.startsWith("bottom") || placement.startsWith("top")
        ? "transparent"
        : colors.white,
    borderLeftWidth: placement.startsWith("right")
      ? 0
      : placement.startsWith("left")
        ? 8
        : 6,
    borderRightColor:
      placement.startsWith("bottom") || placement.startsWith("top")
        ? "transparent"
        : colors.white,
    borderRightWidth: placement.startsWith("left")
      ? 0
      : placement.startsWith("right")
        ? 8
        : 6,
    borderStyle: "solid",
    borderTopColor:
      placement.startsWith("left") || placement.startsWith("right")
        ? "transparent"
        : colors.white,
    borderTopWidth: placement.startsWith("bottom")
      ? 0
      : placement.startsWith("top")
        ? 8
        : 6,
    bottom: placement.startsWith("top") ? -8 : undefined,
    boxSizing: "border-box",
    height:
      placement.startsWith("bottom") || placement.startsWith("top") ? 8 : 12,
    left: placement.startsWith("right") ? -8 : undefined,
    position: "absolute",
    right: placement.startsWith("left") ? -8 : undefined,
    top: placement.startsWith("bottom") ? -8 : undefined,
    width:
      placement.startsWith("left") || placement.startsWith("right") ? 8 : 12,
    zIndex: 1,
  }),
});
