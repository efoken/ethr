import type { html } from "@ethr/core";
import { useEffect, useState } from "react";

export function useLoaded({
  crossOrigin,
  referrerPolicy,
  src,
  srcSet,
}: React.ComponentProps<typeof html.img>) {
  const [loaded, setLoaded] = useState<"loaded" | "error" | false>(false);

  useEffect(() => {
    if (!src && !srcSet) {
      return;
    }

    setLoaded(false);

    let active = true;

    const image = new Image();
    image.addEventListener("load", () => {
      if (!active) {
        return;
      }
      setLoaded("loaded");
    });
    image.addEventListener("error", () => {
      if (!active) {
        return;
      }
      setLoaded("error");
    });
    if (crossOrigin) {
      image.crossOrigin = crossOrigin;
    }
    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy;
    }
    if (src) {
      image.src = src;
    }
    if (srcSet) {
      image.srcset = srcSet;
    }

    return () => {
      active = false;
    };
  }, [crossOrigin, referrerPolicy, src, srcSet]);

  return { handleError: () => {}, handleLoad: () => {}, loaded };
}
