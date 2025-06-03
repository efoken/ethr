import { useEnhancedEffect } from "@ethr/utils";
import type {
  UseFloatingOptions as UseDomFloatingOptions,
  UseFloatingReturn as UseDomFloatingReturn,
  VirtualElement,
} from "@floating-ui/react-dom";
import {
  autoUpdate,
  useFloating as useDomFloating,
} from "@floating-ui/react-dom";

export {
  arrow,
  flip,
  limitShift,
  offset,
  shift,
  size,
} from "@floating-ui/react-dom";
export type {
  ArrowOptions,
  FlipOptions,
  OffsetOptions,
  ShiftOptions,
  SizeOptions,
  VirtualElement,
} from "@floating-ui/react-dom";

type ReferenceType = Element | VirtualElement;

export interface UseFloatingOptions<T extends ReferenceType = ReferenceType>
  extends Omit<UseDomFloatingOptions<T>, "elements" | "whileElementsMounted"> {
  elements?: {
    floating?: HTMLElement | null;
    reference?: T | null;
  };
  sameScrollView?: boolean;
  whileElementsMounted?: (
    reference: T,
    floating: HTMLElement,
    update: () => void,
  ) => () => void;
}

export interface UseFloatingReturn<T extends ReferenceType = ReferenceType>
  extends Omit<UseDomFloatingReturn<T>, "elements" | "refs"> {
  context?: any;
  elements: {
    floating: HTMLElement | null;
    reference: T | null;
  };
  getFloatingProps?: (props: { ref: any; [key: string]: any }) => any;
  getReferenceProps?: (props: { ref: any; [key: string]: any }) => any;
  refs: {
    floating: React.MutableRefObject<HTMLElement | null>;
    reference: React.MutableRefObject<T | null>;
    setFloating: (node: HTMLElement | null) => void;
    setReference: (node: T | null) => void;
  };
}

export function useFloating<T extends ReferenceType = ReferenceType>(
  options: UseFloatingOptions<T>,
): UseFloatingReturn<T> {
  // @ts-expect-error
  return useDomFloating(options);
}

export interface UseAutoUpdateOptions<T extends ReferenceType = ReferenceType> {
  open: boolean;
  refs: UseFloatingReturn<T>["refs"];
  update: UseFloatingReturn<T>["update"];
}

export function useAutoUpdate<T extends ReferenceType = ReferenceType>({
  open,
  refs,
  update,
}: UseAutoUpdateOptions<T>) {
  useEnhancedEffect(() => {
    if (!open) {
      return;
    }
    if (!refs.reference.current || !refs.floating.current) {
      return;
    }
    // Only call this when the floating element is rendered
    return autoUpdate(refs.reference.current, refs.floating.current, update);
  }, [open, refs.floating, refs.reference, update]);
}
