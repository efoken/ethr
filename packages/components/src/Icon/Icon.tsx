import { html } from "@ethr/core";
import { forwardRef, isValidElement, memo } from "react";
import type { IconProps } from "./Icon.types";

export const Icon = forwardRef(
  (inProps: IconProps, ref: React.ForwardedRef<any>) => {
    const {
      "aria-label": ariaLabel,
      children,
      color,
      size,
      viewBox = "0 0 24 24",
      ...props
    } = inProps;

    const hasSvgAsChild =
      isValidElement<React.ComponentProps<typeof html.svg>>(children) &&
      children.type === html.svg;

    return (
      <html.svg
        ref={ref}
        aria-hidden={ariaLabel ? undefined : true}
        aria-label={ariaLabel}
        fill={color}
        height={size}
        role={ariaLabel ? "img" : undefined}
        viewBox={viewBox}
        width={size}
        {...(hasSvgAsChild ? children.props : {})}
        {...props}
      >
        {hasSvgAsChild ? children.props.children : children}
      </html.svg>
    );
  },
);

Icon.displayName = "Icon";

export function createIcon(
  children: IconProps["children"],
  displayName: string,
) {
  const Component = (props: IconProps, ref: React.ForwardedRef<any>) => (
    <Icon ref={ref} data-testid={`${displayName}Icon`} {...props}>
      {children}
    </Icon>
  );

  Component.displayName = `${displayName}Icon`;

  return memo(forwardRef(Component)) as React.ForwardRefExoticComponent<
    Omit<IconProps, "children"> & React.RefAttributes<any>
  >;
}
