import { setRef } from "./setRef";

export function mergeRefs<T>(
  ...inputRefs: (React.Ref<T> | undefined)[]
): React.Ref<T> | React.RefCallback<T> {
  const filteredInputRefs = inputRefs.filter(Boolean);

  if (filteredInputRefs.length <= 1) {
    const firstRef = filteredInputRefs[0];
    return firstRef || null;
  }

  return (ref) => {
    for (const inputRef of filteredInputRefs) {
      setRef(inputRef as React.MutableRefObject<T | null>, ref);
    }
  };
}
