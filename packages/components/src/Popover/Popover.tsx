import { html } from "@ethr/core";
import { mergeRefs, useEnhancedEffect } from "@ethr/utils";
import { cloneElement, forwardRef, isValidElement, useRef } from "react";
import type { StrictHTMLElement } from "react-strict-dom";
import { Portal } from "../Portal";
import type {
  FlipOptions,
  ShiftOptions,
  SizeOptions,
  VirtualElement,
} from "./Floating";
import {
  arrow,
  flip,
  limitShift,
  offset,
  shift,
  size,
  useAutoUpdate,
  useFloating,
} from "./Floating";
import { popoverStyles } from "./Popover.stylex";
import type {
  PopoverModifier,
  PopoverOwnerState,
  PopoverProps,
} from "./Popover.types";

function useUtilityStyles({ placement, styles }: PopoverOwnerState) {
  return {
    root: [popoverStyles.root, styles?.root],
    content: [popoverStyles.content, styles?.content],
    arrow: [popoverStyles.arrow(placement), styles?.arrow],
  };
}

export const Popover = forwardRef(
  (inProps: PopoverProps, ref: React.ForwardedRef<StrictHTMLElement>) => {
    const {
      anchor,
      children,
      container,
      disablePortal = false,
      modifiers: modifiersProp = [],
      open,
      placement: placementProp = "bottom",
      showArrow = false,
      style,
      styles: stylesProp,
      ...props
    } = inProps;

    const modifiers = [
      {
        name: "shift",
        enabled: true,
        options: {
          altBoundary: disablePortal,
        },
      },
      {
        name: "flip",
        enabled: true,
        options: {
          altBoundary: disablePortal,
        },
      },
      ...modifiersProp,
    ];

    const middlewares = {
      flip: modifiers.findLast(
        (modifier): modifier is PopoverModifier<"flip", FlipOptions> =>
          modifier.name === "flip",
      ),
      shift: modifiers.findLast(
        (modifier): modifier is PopoverModifier<"shift", ShiftOptions> =>
          modifier.name === "shift",
      ),
      size: modifiers.findLast(
        (modifier): modifier is PopoverModifier<"size", SizeOptions> =>
          modifier.name === "size",
      ),
    };

    const anchorRef = useRef<any>();
    const contentRef = useRef<StrictHTMLElement>(null);
    const arrowRef = useRef<any>(null);

    const { floatingStyles, middlewareData, placement, refs, update } =
      useFloating({
        open,
        placement: placementProp,
        sameScrollView: disablePortal, // this only takes effect on Native
        strategy: "absolute",
        middleware: [
          middlewares.flip?.enabled ? flip(middlewares.flip.options) : false,
          middlewares.shift?.enabled
            ? shift({ limiter: limitShift(), ...middlewares.shift.options })
            : false,
          middlewares.size?.enabled ? size(middlewares.size.options) : false,
          offset(showArrow ? 8 : 0),
          arrowRef.current
            ? arrow({ element: arrowRef.current, padding: 16 })
            : false,
        ],
      });

    useEnhancedEffect(() => {
      if (isValidElement(anchor)) {
        refs.setReference(anchorRef.current);
      } else {
        refs.setReference(
          anchor && "current" in anchor
            ? anchor.current
            : (anchor as VirtualElement),
        );
      }
    }, [anchor, refs]);

    useAutoUpdate({ refs, open, update });

    // Fix React Native bug where `middleware.arrow` is NaN
    const positioned =
      (middlewareData.arrow?.x == null ||
        !Number.isNaN(middlewareData.arrow.x)) &&
      (middlewareData.arrow?.y == null ||
        !Number.isNaN(middlewareData.arrow.y));

    const ownerState = {
      placement,
      styles: stylesProp,
    };

    const styles = useUtilityStyles(ownerState);

    return (
      <>
        {isValidElement(anchor) &&
          cloneElement<any>(anchor, {
            ref: anchorRef,
          })}
        {open && (
          <Portal container={container} disablePortal={disablePortal}>
            <html.div
              ref={mergeRefs(refs.setFloating, ref)}
              // @ts-expect-error
              style={[styles.root, style, positioned && floatingStyles]}
              {...props}
            >
              {showArrow && (
                <html.div
                  ref={arrowRef}
                  style={[
                    styles.arrow,
                    // @ts-expect-error
                    positioned &&
                      middlewareData.arrow?.x != null && {
                        left: middlewareData.arrow.x,
                      },
                    // @ts-expect-error
                    positioned &&
                      middlewareData.arrow?.y != null && {
                        top: middlewareData.arrow.y,
                      },
                  ]}
                />
              )}
              <html.div ref={contentRef} style={styles.content}>
                {children}
              </html.div>
            </html.div>
          </Portal>
        )}
      </>
    );
  },
);

Popover.displayName = "Popover";

export default Popover;
