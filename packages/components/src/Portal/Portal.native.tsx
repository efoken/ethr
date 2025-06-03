import { mergeRefs } from "@ethr/utils";
import { cloneElement, forwardRef, isValidElement, useContext } from "react";
import { RootTagContext } from "react-native";
import type { PortalProps } from "./Portal.types";
import { PortalConsumer } from "./PortalContext";

const isFabric = (globalThis as any)?.nativeFabricUIManager;
const { createPortal } = isFabric
  ? require("react-native/Libraries/Renderer/shims/ReactFabric")
  : require("react-native/Libraries/Renderer/shims/ReactNative");

export const Portal = forwardRef(
  (inProps: PortalProps, ref: React.ForwardedRef<any>) => {
    const { children, disablePortal = false } = inProps;

    const rootTag = useContext(RootTagContext);

    if (disablePortal) {
      if (isValidElement<any>(children)) {
        return cloneElement(children, {
          ref: mergeRefs((children as any).ref, ref),
        });
      }
      return children;
    }

    // if (Platform.OS === "android" || !rootTag) {
    return <PortalConsumer>{children}</PortalConsumer>;
    // }

    return createPortal(children, rootTag);
  },
);
