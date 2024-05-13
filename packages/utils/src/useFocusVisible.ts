import { useCallback, useRef } from "react";
import type { StrictHTMLInputElement } from "react-strict-dom";
import { Timeout } from "./useTimeout";

let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
const hadFocusVisibleRecentlyTimeout = new Timeout();

const inputTypesWhitelist: Record<string, boolean> = {
  date: true,
  datetime: true,
  "datetime-local": true,
  email: true,
  month: true,
  number: true,
  password: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true,
};

/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 */
function focusTriggersKeyboardModality(node: Element) {
  if (
    node.tagName === "INPUT" &&
    inputTypesWhitelist[(node as HTMLInputElement).type] &&
    !(node as HTMLInputElement).readOnly
  ) {
    return true;
  }

  if (node.tagName === "TEXTAREA" && !(node as HTMLInputElement).readOnly) {
    return true;
  }

  if ((node as HTMLElement).isContentEditable) {
    return true;
  }

  return false;
}

/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`. If the
 * most recent user interaction was via the keyboard; and the key press did not
 * include a meta, alt/option, or control key; then the modality is keyboard.
 * Otherwise, the modality is not keyboard.
 */
function handleKeyDown(event: KeyboardEvent) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}

/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard. This avoids the situation where a user
 * presses a key on an already focused element, and then clicks on a different
 * element, focusing it with a pointing device, while we still think we're in
 * keyboard modality.
 */
function handlePointerDown() {
  hadKeyboardEvent = false;
}

function handleVisibilityChange(this: Document) {
  // If the tab becomes active again, the browser will handle calling focus on
  // the element (Safari actually calls it twice).
  // If this tab change caused a blur on an element with focus-visible, re-apply
  // the class when the user switches back to the tab.
  if (this.visibilityState === "hidden" && hadFocusVisibleRecently) {
    hadKeyboardEvent = true;
  }
}

function prepare(doc: Document) {
  doc.addEventListener("keydown", handleKeyDown, true);
  doc.addEventListener("mousedown", handlePointerDown, true);
  doc.addEventListener("pointerdown", handlePointerDown, true);
  doc.addEventListener("touchstart", handlePointerDown, true);
  doc.addEventListener("visibilitychange", handleVisibilityChange, true);
}

export function teardown(doc: Document) {
  doc.removeEventListener("keydown", handleKeyDown, true);
  doc.removeEventListener("mousedown", handlePointerDown, true);
  doc.removeEventListener("pointerdown", handlePointerDown, true);
  doc.removeEventListener("touchstart", handlePointerDown, true);
  doc.removeEventListener("visibilitychange", handleVisibilityChange, true);
}

function isFocusVisible(event: React.FocusEvent<any>) {
  try {
    return event.target.matches(":focus-visible");
  } catch {
    // Browsers not implementing :focus-visible will throw a SyntaxError.
    // We use our own heuristic for those browsers.
    // Rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
  }
  // No need for validFocusTarget check. The user does that by attaching it to
  // focusable events only.
  return hadKeyboardEvent || focusTriggersKeyboardModality(event.target);
}

export interface UseFocusVisibleReturn {
  focusVisibleRef: React.MutableRefObject<boolean>;
  handleBlur: (event: React.FocusEvent<any>) => void;
  handleFocus: (event: React.FocusEvent<any>) => void;
  ref: React.RefCallback<StrictHTMLInputElement>;
}

export function useFocusVisible(): UseFocusVisibleReturn {
  const ref = useCallback((node: StrictHTMLInputElement) => {
    if (node != null) {
      prepare((node as any).ownerDocument);
    }
  }, []);

  const focusVisibleRef = useRef(false);

  const handleBlurVisible = () => {
    // Checking against potential state variable does not suffice if we focus
    // and blur synchronously. React wouldn't have time to trigger a re-render
    // so `focusVisible` would be stale. Ideally we would adjust
    // `isFocusVisible(event)` to look at `relatedTarget` for blur events.
    // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
    // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
    if (focusVisibleRef.current) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change. If we don't see a visibility change
      // within 100ms, it's probably a regular focus change.
      hadFocusVisibleRecently = true;
      hadFocusVisibleRecentlyTimeout.start(100, () => {
        hadFocusVisibleRecently = false;
      });
      focusVisibleRef.current = false;
      return true;
    }
    return false;
  };

  const handleFocusVisible = (event: React.FocusEvent<any>) => {
    if (isFocusVisible(event)) {
      focusVisibleRef.current = true;
      return true;
    }
    return false;
  };

  return {
    focusVisibleRef,
    handleBlur: handleBlurVisible,
    handleFocus: handleFocusVisible,
    ref,
  };
}
