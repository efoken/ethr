import { html } from "@ethr/core";
import { capitalize, isFunction, isString, useId } from "@ethr/utils";
import { cloneElement, forwardRef, memo } from "react";
import { colors } from "../globals.stylex";
import { cryptocurrencyStyles } from "./Cryptocurrency.stylex";
import type {
  CryptocurrencyColor,
  CryptocurrencyOwnerState,
  CryptocurrencyProps,
} from "./Cryptocurrency.types";

function useUtilityStyles({
  color,
  shape,
  size,
  styles,
  theme,
}: CryptocurrencyOwnerState) {
  return {
    root: [
      cryptocurrencyStyles.root,
      cryptocurrencyStyles[`size${capitalize(size)}`],
      cryptocurrencyStyles[`shape${capitalize(shape)}`],
      cryptocurrencyStyles[`theme${capitalize(theme)}`](color),
      styles?.root,
    ],
    logo: [cryptocurrencyStyles.logo, styles?.logo],
    gradient: [cryptocurrencyStyles.gradient, styles?.gradient],
  };
}

export const Cryptocurrency = forwardRef(
  (inProps: CryptocurrencyProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      "aria-label": ariaLabel,
      children: childrenProp,
      color = "#000",
      id: idProp,
      shape = "circle",
      size = "medium",
      style,
      styles: stylesProp,
      theme = "colored",
      ...props
    } = inProps;

    const id = useId(idProp);

    const children = isFunction(childrenProp)
      ? childrenProp({ shape, theme })
      : childrenProp;

    const iconSize = {
      small: 16,
      medium: 20,
      large: 24,
      xlarge: 24,
    };

    const ownerState = {
      color,
      shape,
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
        id={idProp}
        role={ariaLabel ? "img" : undefined}
        style={[styles.root, style]}
        {...props}
      >
        {children &&
          cloneElement(children, {
            fill:
              theme === "colored" || !isString(color) ? colors.white : color,
            height: children.props.height ?? iconSize[size],
            style: styles.logo,
            width: children.props.width ?? iconSize[size],
          })}
        {Array.isArray(color) && theme === "colored" && (
          <html.svg
            width="100%"
            height="100%"
            viewBox="0 0 1 1"
            style={styles.gradient}
          >
            <html.rect
              width={1}
              height={1}
              rx={shape === "circle" ? 0.5 : undefined}
              fill={`url(#${id}-gradient)`}
            />
            <html.defs>
              <html.linearGradient
                id={`${id}-gradient`}
                x1={1}
                y1={0}
                x2={0}
                y2={1}
              >
                <html.stop stopColor={color[1]} />
                <html.stop offset={1} stopColor={color[2]} />
              </html.linearGradient>
            </html.defs>
          </html.svg>
        )}
      </html.div>
    );
  },
);

Cryptocurrency.displayName = "Cryptocurrency";

export function createCryptocurrency(
  children: NonNullable<CryptocurrencyProps["children"]>,
  color: CryptocurrencyColor,
  displayName: string,
) {
  const Component = (
    props: Omit<CryptocurrencyProps, "children" | "color">,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => (
    <Cryptocurrency
      ref={ref}
      data-testid={`${displayName}Cryptocurrency`}
      {...props}
      color={color}
    >
      {children}
    </Cryptocurrency>
  );

  Component.displayName = `${displayName}Cryptocurrency`;

  return memo(forwardRef(Component)) as React.ForwardRefExoticComponent<
    Omit<CryptocurrencyProps, "children" | "color"> &
      React.RefAttributes<HTMLDivElement>
  >;
}
