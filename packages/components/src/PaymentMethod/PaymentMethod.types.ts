import type { html } from "@ethr/core";
import type { Styles } from "react-strict-dom/dist/types/styles";

export interface PaymentMethodProps
  extends Omit<React.ComponentProps<typeof html.div>, "children"> {
  /**
   * The logo to display.
   */
  children?:
    | React.ReactElement<React.ComponentProps<typeof html.svg>, typeof html.svg>
    | ((
        props: Required<Pick<PaymentMethodProps, "theme">>,
      ) => React.ReactElement<
        React.ComponentProps<typeof html.svg>,
        typeof html.svg
      >);
  /** @default "#000" */
  color?: string;
  /**
   * The size of the component.
   * @default "medium"
   */
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: {
    root?: Styles;
    logo?: Styles;
  };
  /** @default "colored" */
  theme?: "colored" | "light";
}

export type PaymentMethodOwnerState = Required<
  Pick<PaymentMethodProps, "color" | "size" | "theme">
> &
  Pick<PaymentMethodProps, "styles">;

export type PaymentMethodStyleKey = keyof NonNullable<
  PaymentMethodProps["styles"]
>;
