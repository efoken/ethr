import { isFunction } from "./isFunction";

export function setRef<T>(
  ref: React.MutableRefObject<T | null> | React.RefCallback<T> | null,
  value: T | null,
) {
  if (isFunction(ref)) {
    ref(value);
  } else if (ref != null) {
    // eslint-disable-next-line no-param-reassign
    ref.current = value;
  }
}
