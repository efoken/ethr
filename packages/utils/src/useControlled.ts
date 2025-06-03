"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface UseControlledProps<T> {
  /**
   * Holds the component value when it's controlled.
   */
  controlled: T | undefined;
  /**
   * The default value when uncontrolled.
   */
  default: T | undefined;
  /**
   * The component name displayed in warnings.
   */
  name: string;
  /**
   * The name of the state variable displayed in warnings.
   */
  state?: string;
}

export type UseControlledReturn<T> = [
  T,
  (newValue: T | ((prevValue: T) => T)) => void,
];

export function useControlled<T>({
  controlled: controlledProp,
  default: defaultProp,
  name,
  state = "value",
}: UseControlledProps<T>): UseControlledReturn<T> {
  // `controlled` is ignored in the hook dependency lists as it should never change.
  const { current: controlled } = useRef(controlledProp !== undefined);
  const [valueState, setValue] = useState(defaultProp);
  const value = controlled ? controlledProp : valueState;

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (controlled !== (controlledProp !== undefined)) {
        console.error(
          [
            `Ethr: A component is changing the ${
              controlled ? "" : "un"
            }controlled ${state} state of ${name} to be ${controlled ? "un" : ""}controlled.`,
            "Elements should not switch from uncontrolled to controlled (or vice versa).",
            `Decide between using a controlled or uncontrolled ${name} ` +
              "element for the lifetime of the component.",
            "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
            "More info: https://reactjs.org/link/controlled-components",
          ].join("\n"),
        );
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state, name, controlledProp]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { current: defaultValue } = useRef(defaultProp);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!controlled && defaultValue !== defaultProp) {
        console.error(
          [
            `Ethr: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` +
              `To suppress this warning opt to use a controlled ${name}.`,
          ].join("\n"),
        );
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(defaultProp)]);
  }

  const setValueIfUncontrolled = useCallback(
    (newValue: T | ((prevValue: T) => T)) => {
      if (!controlled) {
        setValue(newValue as T);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return [value as T, setValueIfUncontrolled];
}
