import type { html } from "@ethr/core";
import { useState } from "react";

export function useLoaded({
  src,
  srcSet,
}: React.ComponentProps<typeof html.img>) {
  const [loaded, setLoaded] = useState<"loaded" | "error" | false>(false);

  if (!src && !srcSet) {
    return { handleError: () => {}, handleLoad: () => {}, loaded };
  }

  const handleLoad = () => {
    setLoaded("loaded");
  };

  const handleError = () => {
    setLoaded("error");
  };

  return { handleError, handleLoad, loaded };
}
