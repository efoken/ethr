export function isNative() {
  return (
    typeof navigator !== "undefined" && navigator.product === "ReactNative"
  );
}
