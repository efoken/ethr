import { html } from "@ethr/core";
import { capitalize, isFunction } from "@ethr/utils";
import { cloneElement, forwardRef, memo } from "react";
import { colors } from "../globals.stylex";
import { paymentMethodStyles } from "./PaymentMethod.stylex";
import type {
  PaymentMethodOwnerState,
  PaymentMethodProps,
} from "./PaymentMethod.types";

function useUtilityStyles({
  color,
  size,
  styles,
  theme,
}: PaymentMethodOwnerState) {
  return {
    root: [
      paymentMethodStyles.root,
      paymentMethodStyles[`size${capitalize(size)}`],
      paymentMethodStyles[`theme${capitalize(theme)}`](color),
      styles?.root,
    ],
    logo: [paymentMethodStyles.logo, styles?.logo],
  };
}

export const PaymentMethod = forwardRef(
  (inProps: PaymentMethodProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      "aria-label": ariaLabel,
      children: childrenProp,
      color = "#000",
      size = "medium",
      style,
      styles: stylesProp,
      theme = "colored",
      ...props
    } = inProps;

    const children = isFunction(childrenProp)
      ? childrenProp({ theme })
      : childrenProp;

    const iconSize = {
      xsmall: { width: 26, height: 12 },
      small: { width: 36, height: 16 },
      medium: { width: 44, height: 20 },
      large: { width: 56, height: 24 },
      xlarge: { width: 68, height: 24 },
    };

    const ownerState = {
      color,
      size,
      styles: stylesProp,
      theme,
    };

    const styles = useUtilityStyles(ownerState);

    return (
      <html.div
        ref={ref}
        aria-hidden={ariaLabel ? undefined : true}
        aria-label={ariaLabel}
        role={ariaLabel ? "img" : undefined}
        style={[styles.root, style]}
        {...props}
      >
        {children &&
          cloneElement(children, {
            fill: theme === "colored" ? colors.white : color,
            height: children.props.height ?? iconSize[size].height,
            style: styles.logo,
            width: children.props.width ?? iconSize[size].width,
          })}
      </html.div>
    );
  },
);

PaymentMethod.displayName = "PaymentMethod";

export function createPaymentMethod(
  children: NonNullable<PaymentMethodProps["children"]>,
  color: string,
  displayName: string,
) {
  const Component = (
    props: Omit<PaymentMethodProps, "children" | "color">,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => (
    <PaymentMethod
      ref={ref}
      data-testid={`${displayName}PaymentMethod`}
      {...props}
      color={color}
    >
      {children}
    </PaymentMethod>
  );

  Component.displayName = `${displayName}PaymentMethod`;

  return memo(forwardRef(Component)) as React.ForwardRefExoticComponent<
    Omit<PaymentMethodProps, "children" | "color"> &
      React.RefAttributes<HTMLDivElement>
  >;
}
