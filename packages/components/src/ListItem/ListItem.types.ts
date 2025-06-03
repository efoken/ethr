import type { html, Styles } from "@ethr/core";

export interface ListItemProps
  extends Omit<React.ComponentProps<typeof html.li>, "children"> {
  label?: React.ReactNode;
  prefix?: React.ReactElement;
  primaryText?: React.ReactNode;
  secondaryText?: React.ReactNode;
  /**
   * The size of the component.
   * @default "medium"
   */
  size?: "small" | "medium";
  suffix?: React.ReactElement;
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: {
    root?: Styles;
    content?: Styles;
    primary?: Styles;
    secondary?: Styles;
  };
  /** @default "none" */
  variant?:
    | "none"
    | "divider"
    | "fullDivider"
    | "border"
    | "dashedBorder"
    | "elevation";
}

export type ListItemOwnerState = Required<
  Pick<ListItemProps, "size" | "variant">
> &
  Pick<ListItemProps, "styles">;

export type ListItemStyleKey = keyof NonNullable<ListItemProps["styles"]>;
