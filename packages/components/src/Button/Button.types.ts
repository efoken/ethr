import type { html } from "@ethr/core";

export interface ButtonProps extends React.ComponentProps<typeof html.button> {
  children?: React.ReactNode;
  /** @default "primary" */
  color?: "primary" | "danger";
  /** @default false */
  disabled?: boolean;
  /** @default false */
  loading?: boolean;
  prefix?: React.ReactElement;
  /** @default "medium" */
  size?: "small" | "medium" | "large" | "xlarge";
  suffix?: React.ReactElement;
  /** @default "rectangle" */
  theme?: "rectangle" | "rounded";
  /** @default "primary" */
  variant?: "primary" | "secondary" | "tertiary";
}

export type ButtonOwnerState = Required<
  Pick<ButtonProps, "color" | "disabled" | "size" | "theme" | "variant">
>;
