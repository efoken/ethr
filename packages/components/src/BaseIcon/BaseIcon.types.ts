import type { html } from "@ethr/core";
import { Styles } from "react-strict-dom/dist/types/styles";

export interface BaseIconProps
  extends Omit<React.ComponentProps<typeof html.div>, "children"> {
  children?: React.ReactElement<
    React.ComponentProps<typeof html.svg>,
    typeof html.svg
  >;
  /** @default "circle" */
  shape?: "circle" | "square";
  /** @default "medium" */
  size?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge";
  styles?: {
    root?: Styles;
  };
}

export type BaseIconOwnerState = Required<
  Pick<BaseIconProps, "shape" | "size">
> &
  Pick<BaseIconProps, "styles">;

export type BaseIconStyleKey = keyof NonNullable<BaseIconProps["styles"]>;
