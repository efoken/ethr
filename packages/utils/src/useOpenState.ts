import { useCallback, useEffect, useRef, useState } from "react";

export interface UseOpenStateProps {
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
}

export type UseOpenStateReturn = [boolean, (newOpen: boolean) => void];

export function useOpenState({
  onClose,
  onOpen,
  open,
}: UseOpenStateProps): UseOpenStateReturn {
  const controlled = useRef(typeof open === "boolean").current;
  const [openState, setOpenState] = useState(false);

  // It is required to update inner state in `useEffect` in order to avoid
  // situation when our component is not mounted yet, but `open` state is set to
  // `true` (e.g. initially opened).
  useEffect(() => {
    if (controlled) {
      if (typeof open !== "boolean") {
        throw new TypeError(
          "Ethr: You must not mix controlling and uncontrolled mode for `open` prop",
        );
      }
      setOpenState(open);
    }
  }, [controlled, open]);

  const setOpen = useCallback(
    (newOpen: boolean) => {
      if (!controlled) {
        setOpenState(newOpen);
      }
      if (newOpen) {
        onOpen?.();
      } else {
        onClose?.();
      }
    },
    [controlled, onOpen, onClose],
  );

  return [openState, setOpen];
}
