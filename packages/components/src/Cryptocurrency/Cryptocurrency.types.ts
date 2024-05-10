import type { html } from "@ethr/core";
import type { Styles } from "react-strict-dom/dist/types/styles";

export type CryptocurrencyColor =
  | string
  | [deg: string, color1: string, color2: string];

export interface CryptocurrencyProps
  extends Omit<React.ComponentProps<typeof html.div>, "children"> {
  /**
   * The logo to display.
   */
  children?:
    | React.ReactElement<React.ComponentProps<typeof html.svg>, typeof html.svg>
    | ((
        props: Required<Pick<CryptocurrencyProps, "shape" | "theme">>,
      ) => React.ReactElement<
        React.ComponentProps<typeof html.svg>,
        typeof html.svg
      >);
  /** @default "#000" */
  color?: CryptocurrencyColor;
  /**
   * The shape of the component.
   * @default "circle"
   */
  shape?: "circle" | "square";
  /**
   * The size of the component.
   * @default "medium"
   */
  size?: "small" | "medium" | "large" | "xlarge";
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: {
    root?: Styles;
    logo?: Styles;
    gradient?: Styles;
  };
  /** @default "colored" */
  theme?: "colored" | "light";
}

export type CryptocurrencyOwnerState = Required<
  Pick<CryptocurrencyProps, "color" | "shape" | "size" | "theme">
> &
  Pick<CryptocurrencyProps, "styles">;

export type CryptocurrencyStyleKey = keyof NonNullable<
  CryptocurrencyProps["styles"]
>;
