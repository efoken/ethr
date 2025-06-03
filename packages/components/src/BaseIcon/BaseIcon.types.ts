import type { html, Styles } from "@ethr/core";

export interface BaseIconProps
  extends Omit<React.ComponentProps<typeof html.div>, "children"> {
  children?: React.ReactElement<
    React.ComponentProps<typeof html.svg>,
    typeof html.svg
  >;
  /**
   * The shape of the component.
   * @default "circle"
   */
  shape?: "circle" | "square";
  /**
   * The size of the component.
   * @default "medium"
   */
  size?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge";
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: {
    root?: Styles;
  };
}

export type BaseIconOwnerState = Required<
  Pick<BaseIconProps, "shape" | "size">
> &
  Pick<BaseIconProps, "styles">;

export type BaseIconStyleKey = keyof NonNullable<BaseIconProps["styles"]>;
