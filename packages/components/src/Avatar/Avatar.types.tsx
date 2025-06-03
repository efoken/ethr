import type { html, Styles } from "@ethr/core";

export interface AvatarProps extends React.ComponentProps<typeof html.div> {
  alt?: string;
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
  src?: string;
  srcSet?: string;
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: {
    root?: Styles;
    image?: Styles;
    text?: Styles;
    placeholder?: Styles;
  };
  /** @default "image" */
  variant?: "image" | "placeholder" | "alphabet" | "initials";
}

export type AvatarOwnerState = Required<
  Pick<AvatarProps, "shape" | "size" | "variant">
> &
  Pick<AvatarProps, "styles">;

export type AvatarStyleKey = keyof NonNullable<AvatarProps["styles"]>;
