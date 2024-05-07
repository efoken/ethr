import { html } from "@ethr/core";
import { capitalize } from "@ethr/utils";
import { cloneElement, forwardRef } from "react";
import type { StrictHTMLElement } from "react-strict-dom";
import { colors } from "../globals.stylex";
import { buttonStyles } from "./Button.stylex";
import type { ButtonOwnerState, ButtonProps } from "./Button.types";

function useUtilityStyles({
  color,
  disabled,
  size,
  theme,
  variant,
}: ButtonOwnerState) {
  return {
    root: [
      buttonStyles.root,
      buttonStyles[`size${capitalize(size)}`],
      buttonStyles[`variant${capitalize(variant)}`](color),
      buttonStyles[`theme${capitalize(theme)}`],
      disabled && buttonStyles.disabled(variant),
    ],
    label: [],
  };
}

export const Button = forwardRef(
  (inProps: ButtonProps, ref: React.ForwardedRef<StrictHTMLElement>) => {
    const {
      children,
      color = "primary",
      disabled = false,
      loading = false,
      prefix,
      size = "medium",
      style,
      suffix,
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
      secondary: color === "primary" ? colors.primary70 : colors.danger10,
      tertiary: color === "primary" ? colors.primary70 : colors.danger10,
    };

    const ownerState = {
      color,
      disabled,
      size,
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
        {prefix &&
          cloneElement(prefix, {
            color: disabled ? colors.neutral40 : iconColor[variant],
            size: iconSizes[size],
          })}
        {children && <html.span style={styles.label}>{children}</html.span>}
        {suffix &&
          cloneElement(suffix, {
            color: disabled ? colors.neutral40 : iconColor[variant],
            size: iconSizes[size],
          })}
      </html.button>
    );
  },
);
