import type { html } from "@ethr/core";

export interface IconProps
  extends Omit<React.ComponentProps<typeof html.svg>, "children"> {
  children?: React.ReactElement<
    React.ComponentProps<typeof html.svg>,
    typeof html.svg
  >;
  color?: string;
  size?: number;
}
