import { html } from "@ethr/core";
import { capitalize } from "@ethr/utils";
import { cloneElement, forwardRef } from "react";
import type { StrictHTMLElement } from "react-strict-dom";
import { colors } from "../globals.stylex";
import { baseIconStyles } from "./BaseIcon.stylex";
import type { BaseIconOwnerState, BaseIconProps } from "./BaseIcon.types";

function useUtilityStyles({ shape, size, styles }: BaseIconOwnerState) {
  return {
    root: [
      baseIconStyles.root,
      baseIconStyles[`size${capitalize(size)}`],
      baseIconStyles[`shape${capitalize(shape)}`],
      styles?.root,
    ],
  };
}

export const BaseIcon = forwardRef(
  (inProps: BaseIconProps, ref: React.ForwardedRef<StrictHTMLElement>) => {
    const {
      "aria-label": ariaLabel,
      children,
      shape = "circle",
      size = "medium",
      style,
      styles: stylesProp,
      ...props
    } = inProps;

    const iconSize = {
      xxsmall: 12,
      xsmall: 12,
      small: 16,
      medium: 20,
      large: 24,
      xlarge: 32,
    };

    const ownerState = {
      shape,
      size,
      styles: stylesProp,
    };

    const styles = useUtilityStyles(ownerState);

    return (
      <html.div
        ref={ref}
        aria-label={ariaLabel}
        role={ariaLabel ? "img" : undefined}
        style={[styles.root, style]}
        {...props}
      >
        {children &&
          cloneElement(children, {
            fill: colors.primary70,
            height: children.props.height ?? iconSize[size],
            width: children.props.width ?? iconSize[size],
          })}
      </html.div>
    );
  },
);

BaseIcon.displayName = "BaseIcon";
