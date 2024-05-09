import {
  mergeRefs,
  runIfFunction,
  setRef,
  useEnhancedEffect,
} from "@ethr/utils";
import { cloneElement, forwardRef, isValidElement, useState } from "react";
import { createPortal } from "react-dom";
import type { PortalProps } from "./Portal.types";

export const Portal = forwardRef(
  (inProps: PortalProps, ref: React.ForwardedRef<any>) => {
    const { children, container, disablePortal = false } = inProps;

    const [mountNode, setMountNode] = useState<HTMLElement | null | undefined>(
      null,
    );

    useEnhancedEffect(() => {
      if (!disablePortal) {
        setMountNode(runIfFunction(container) || document.body);
      }
    }, [container, disablePortal]);

    useEnhancedEffect(() => {
      if (mountNode && !disablePortal) {
        setRef(ref, mountNode);
        return () => {
          setRef(ref, null);
        };
      }
      return () => {};
    }, [ref, mountNode, disablePortal]);

    if (disablePortal) {
      if (isValidElement<any>(children)) {
        return cloneElement(children, {
          ref: mergeRefs((children as any).ref, ref),
        });
      }
      return children;
    }

    return mountNode ? createPortal(children, mountNode) : mountNode;
  },
);

export default Portal;
