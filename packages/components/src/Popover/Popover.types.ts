import type { html, Styles } from "@ethr/core";
import type { PortalProps } from "../Portal";
import type {
  FlipOptions,
  ShiftOptions,
  SizeOptions,
  VirtualElement,
} from "./Floating";

export type PopoverPlacement =
  | "top-start"
  | "top"
  | "top-end"
  | "left-start"
  | "left"
  | "left-end"
  | "right-start"
  | "right"
  | "right-end"
  | "bottom-start"
  | "bottom"
  | "bottom-end";

export interface PopoverModifier<
  TName extends string,
  TOptions extends object,
> {
  enabled: boolean;
  name: TName;
  options?: TOptions;
}

export interface PopoverProps
  extends Pick<PortalProps, "container" | "disablePortal">,
    React.ComponentProps<typeof html.div> {
  anchor?: React.ReactElement | React.RefObject<Element> | VirtualElement;
  /** @default [] */
  modifiers?: (
    | PopoverModifier<"flip", FlipOptions>
    | PopoverModifier<"shift", ShiftOptions>
    | PopoverModifier<"size", SizeOptions>
  )[];
  /**
   * If `true`, the component is shown.
   */
  open: boolean;
  /**
   * Popover placement.
   * @default "bottom"
   */
  placement?: PopoverPlacement;
  /** @default false */
  showArrow?: boolean;
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: {
    root?: Styles;
    content?: Styles;
    arrow?: Styles;
  };
}

export type PopoverOwnerState = Required<Pick<PopoverProps, "placement">> &
  Pick<PopoverProps, "styles">;

export type PopoverStyleKey = keyof NonNullable<PopoverProps["styles"]>;
