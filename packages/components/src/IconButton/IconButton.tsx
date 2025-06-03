import { html } from "@ethr/core";
import { capitalize } from "@ethr/utils";
import { cloneElement, forwardRef } from "react";
import { colors } from "../globals.stylex";
import { iconButtonStyles } from "./IconButton.stylex";
import type { IconButtonOwnerState, IconButtonProps } from "./IconButton.types";

function useUtilityStyles({
  disabled,
  size,
  styles,
  theme,
  variant,
}: IconButtonOwnerState) {
  return {
    root: [
      iconButtonStyles.root,
      iconButtonStyles[`size${capitalize(size)}`],
      iconButtonStyles[`variant${capitalize(variant)}`],
      iconButtonStyles[`theme${capitalize(theme)}`],
      disabled && iconButtonStyles.disabled(variant),
      styles?.root,
    ],
  };
}

export const IconButton = forwardRef(
  (inProps: IconButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const {
      children,
      disabled = false,
      loading = false,
      size = "medium",
      style,
      styles: stylesProp,
      theme = "rectangle",
      variant = "primary",
      ...props
    } = inProps;

    const iconSizes = {
      small: 16,
      medium: 20,
      large: 24,
      xlarge: 24,
    };

    const iconColor = {
      primary: colors.white,
      secondary: colors.primary70,
      tertiary: colors.primary70,
    };

    const ownerState = {
      disabled,
      size,
      styles: stylesProp,
      theme,
      variant,
    };

    const styles = useUtilityStyles(ownerState);

    return (
      <html.button
        ref={ref}
        aria-busy={loading}
        disabled={disabled || loading}
        style={[styles.root, style]}
        {...props}
      >
        {children &&
          cloneElement(children, {
            color: disabled ? colors.neutral40 : iconColor[variant],
            size: iconSizes[size],
          })}
      </html.button>
    );
  },
);

IconButton.displayName = "IconButton";
