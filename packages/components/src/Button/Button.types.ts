import type { html } from "@ethr/core";
import type { Styles } from "react-strict-dom/dist/types/styles";

export interface ButtonProps extends React.ComponentProps<typeof html.button> {
  /** @default "primary" */
  color?: "primary" | "danger";
  /** @default false */
  disabled?: boolean;
  /** @default false */
  loading?: boolean;
  prefix?: React.ReactElement;
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
    label?: Styles;
  };
  suffix?: React.ReactElement;
  /** @default "rectangle" */
  theme?: "rectangle" | "rounded";
  /** @default "primary" */
  variant?: "primary" | "secondary" | "tertiary";
}

export type ButtonOwnerState = Required<
  Pick<ButtonProps, "color" | "disabled" | "size" | "theme" | "variant">
> &
  Pick<ButtonProps, "styles">;

export type ButtonStyleKey = keyof NonNullable<ButtonProps["styles"]>;
