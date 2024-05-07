import type { html } from "@ethr/core";

export interface IconButtonProps
  extends React.ComponentProps<typeof html.button> {
  children?: React.ReactElement;
  /** @default false */
  disabled?: boolean;
  /** @default false */
  loading?: boolean;
  /** @default "medium" */
  size?: "small" | "medium" | "large" | "xlarge";
  /** @default "rectangle" */
  theme?: "rectangle" | "rounded";
  /** @default "primary" */
  variant?: "primary" | "secondary" | "tertiary";
}

export type IconButtonOwnerState = Required<
  Pick<IconButtonProps, "disabled" | "size" | "theme" | "variant">
>;
