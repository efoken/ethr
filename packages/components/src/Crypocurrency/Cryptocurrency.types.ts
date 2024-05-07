import type { html } from "@ethr/core";

export interface CryptocurrencyProps
  extends Omit<React.ComponentProps<typeof html.div>, "children"> {
  /** The logo to display. */
  children?:
    | React.ReactElement<React.ComponentProps<typeof html.svg>, typeof html.svg>
    | ((
        props: Required<Pick<CryptocurrencyProps, "shape" | "theme">>,
      ) => React.ReactElement<
        React.ComponentProps<typeof html.svg>,
        typeof html.svg
      >);
  /** @default "#000" */
  color?: string | [deg: string, color1: string, color2: string];
  /** @default "circle" */
  shape?: "circle" | "square";
  /** @default "medium" */
  size?: "small" | "medium" | "large" | "xlarge";
  /** @default "colored" */
  theme?: "colored" | "light";
}

export type CryptocurrencyOwnerState = Required<
  Pick<CryptocurrencyProps, "color" | "shape" | "size" | "theme">
>;
