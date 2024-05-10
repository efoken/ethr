import type { PopoverProps } from "../Popover";

export interface TooltipProps extends Omit<PopoverProps, "open" | "showArrow"> {
  /** @default false */
  describeChild?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open?: boolean;
}

export type TooltipOwnerState = Pick<TooltipProps, "styles">;

export type TooltipStyleKey = keyof NonNullable<TooltipProps["styles"]>;
