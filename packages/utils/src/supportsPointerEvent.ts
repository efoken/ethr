export function supportsPointerEvent() {
  return !!(
    typeof globalThis !== "undefined" && globalThis.PointerEvent != null
  );
}
