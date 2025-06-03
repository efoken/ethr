"use client";

import { html } from "@ethr/core";
import {
  createChainedFunction,
  isString,
  supportsPointerEvent,
  useOpenState,
} from "@ethr/utils";
import { cloneElement, forwardRef, isValidElement, useState } from "react";
import { Popover } from "../Popover";
import { tooltipStyles } from "./Tooltip.stylex";
import type { TooltipOwnerState, TooltipProps } from "./Tooltip.types";

function useUtilityStyles({ styles }: TooltipOwnerState) {
  return {
    root: [tooltipStyles.root, styles?.root],
    content: [tooltipStyles.content, styles?.content],
    arrow: [tooltipStyles.arrow, styles?.arrow],
  };
}

export const Tooltip = forwardRef(
  (inProps: TooltipProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      anchor: anchorProp,
      children,
      describeChild = false,
      disablePortal = false,
      modifiers: modifiersProp = [],
      onClose,
      onOpen,
      open: openProp,
      style,
      styles: stylesProp,
      ...props
    } = inProps;

    const [open, setOpen] = useOpenState({
      onClose,
      onOpen,
      open: openProp,
    });

    const [maxWidth, setMaxWidth] = useState<number>();

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const anchor = isValidElement<any>(anchorProp)
      ? cloneElement(anchorProp, {
          title:
            describeChild && isString(children)
              ? children
              : anchorProp.props.title,
          ...(supportsPointerEvent()
            ? {
                onPointerEnter: createChainedFunction(
                  anchorProp.props.onPointerEnter,
                  handleOpen,
                ),
                onPointerLeave: createChainedFunction(
                  anchorProp.props.onPointerLeave,
                  handleClose,
                ),
              }
            : {
                onMouseEnter: createChainedFunction(
                  anchorProp.props.onMouseEnter,
                  handleOpen,
                ),
                onMouseLeave: createChainedFunction(
                  anchorProp.props.onMouseLeave,
                  handleClose,
                ),
              }),
        })
      : anchorProp;

    const ownerState = {
      styles: stylesProp,
    };

    const styles = useUtilityStyles(ownerState);

    return (
      <Popover
        ref={ref}
        showArrow
        anchor={anchor}
        disablePortal={disablePortal}
        modifiers={[
          {
            name: "size",
            enabled: true,
            options: {
              padding: 8,
              apply: ({ availableWidth }) => {
                if (!Number.isNaN(availableWidth)) {
                  setMaxWidth(availableWidth);
                }
              },
            },
          },
          ...modifiersProp,
        ]}
        open={open}
        // @ts-expect-error
        style={[{ maxWidth: maxWidth ?? "auto" }, styles.root, style]}
        styles={{
          content: styles.content,
          arrow: styles.arrow,
        }}
        {...props}
      >
        {isString(children) ? <html.span>{children}</html.span> : children}
      </Popover>
    );
  },
);

Tooltip.displayName = "Tooltip";
