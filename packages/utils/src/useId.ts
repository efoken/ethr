import { useId as useReactId } from "react";

export function useId(idOverride?: null | string) {
  const id = useReactId();
  return idOverride ?? id;
}
