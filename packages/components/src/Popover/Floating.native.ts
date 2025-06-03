import { useEnhancedEffect } from "@ethr/utils";
import type { VirtualElement } from "@floating-ui/react-dom";
import type {
  UseFloatingOptions as UseNativeFloatingOptions,
  UseFloatingReturn as UseNativeFloatingReturn,
  arrow,
  flip,
  offset,
  shift,
  size,
} from "@floating-ui/react-native";
import { useFloating as useNativeFloating } from "@floating-ui/react-native";
import { useEffect, useState } from "react";
import { Keyboard, useWindowDimensions } from "react-native";

export type { VirtualElement } from "@floating-ui/react-dom";
export {
  arrow,
  flip,
  limitShift,
  offset,
  shift,
  size,
} from "@floating-ui/react-native";

type InferProps<T> = NonNullable<T extends (props: infer P) => any ? P : never>;

export type ArrowOptions = InferProps<typeof arrow>;

export type FlipOptions = InferProps<typeof flip>;

export type OffsetOptions = InferProps<typeof offset>;

export type ShiftOptions = InferProps<typeof shift>;

export type SizeOptions = InferProps<typeof size>;

type ReferenceType = Element | VirtualElement;

export interface UseFloatingOptions<T extends ReferenceType = ReferenceType>
  extends Omit<UseNativeFloatingOptions, "elements"> {
  elements?: {
    floating?: HTMLElement | null;
    offsetParent?: any;
    reference?: T | null;
  };
  open?: boolean;
  strategy?: "absolute" | "fixed";
}

export interface UseFloatingReturn<T extends ReferenceType = ReferenceType>
  extends Omit<UseNativeFloatingReturn, "elements"> {
  elements: {
    floating: HTMLElement | null;
    offsetParent: any;
    reference: T | null;
  };
}

export function useFloating<T extends ReferenceType = ReferenceType>(
  options: UseFloatingOptions<T>,
): UseFloatingReturn<T> {
  return useNativeFloating(options);
}

export interface UseAutoUpdateOptions<T extends ReferenceType = ReferenceType> {
  open: boolean;
  refs: UseFloatingReturn<T>["refs"];
  update: UseFloatingReturn<T>["update"];
}

export function useAutoUpdate<T extends ReferenceType = ReferenceType>({
  update,
}: UseAutoUpdateOptions<T>) {
  const dimensions = useWindowDimensions();

  const [keyboardOpen, setKeyboardOpen] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardOpen(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardOpen(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEnhancedEffect(update, [dimensions, keyboardOpen, update]);
}
