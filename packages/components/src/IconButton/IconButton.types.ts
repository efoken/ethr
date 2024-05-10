import type { html } from "@ethr/core";
import type { Styles } from "react-strict-dom/dist/types/styles";

export interface IconButtonProps
  extends React.ComponentProps<typeof html.button> {
  children?: React.ReactElement;
  /** @default false */
  disabled?: boolean;
  /** @default false */
  loading?: boolean;
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
  };
  /** @default "rectangle" */
  theme?: "rectangle" | "rounded";
  /** @default "primary" */
  variant?: "primary" | "secondary" | "tertiary";
}

export type IconButtonOwnerState = Required<
  Pick<IconButtonProps, "disabled" | "size" | "theme" | "variant">
> &
  Pick<IconButtonProps, "styles">;

export type IconButtonStyleKey = keyof NonNullable<IconButtonProps["styles"]>;
