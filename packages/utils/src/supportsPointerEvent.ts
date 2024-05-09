export function supportsPointerEvent() {
  return !!(typeof window !== "undefined" && window.PointerEvent != null);
}
