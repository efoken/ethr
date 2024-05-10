import { setRef } from "./setRef";

export function mergeRefs<T>(
  ...inputRefs: (React.Ref<T> | undefined)[]
): React.Ref<T> | React.RefCallback<T> {
  const filteredInputRefs = inputRefs.filter(Boolean);

  if (filteredInputRefs.length <= 1) {
    return filteredInputRefs[0] ?? null;
  }

  return (ref) => {
    for (const inputRef of filteredInputRefs) {
      setRef(inputRef as React.MutableRefObject<T | null>, ref);
    }
  };
}
