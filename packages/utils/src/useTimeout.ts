"use client";

import { useEffect, useRef } from "react";

const UNINITIALIZED = {};

function useLazyRef<T>(init: () => T) {
  const ref = useRef(UNINITIALIZED as unknown as T);

  if (ref.current === UNINITIALIZED) {
    ref.current = init();
  }

  return ref;
}

export class Timeout {
  static create() {
    return new Timeout();
  }

  currentId?: ReturnType<typeof setTimeout>;

  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay: number, fn: Function) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = undefined;
      fn();
    }, delay);
  }

  clear = () => {
    if (this.currentId != null) {
      clearTimeout(this.currentId);
      this.currentId = undefined;
    }
  };

  disposeEffect = () => this.clear;
}

export function useTimeout() {
  const timeout = useLazyRef(Timeout.create).current;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(timeout.disposeEffect, []);

  return timeout;
}
