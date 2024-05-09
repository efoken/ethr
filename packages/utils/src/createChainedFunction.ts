export function createChainedFunction<T extends any[], U>(
  ...funcs: ((this: U, ...args: T) => any)[]
): (this: U, ...args: T) => void {
  return funcs.reduce(
    (acc, func) => {
      if (func == null) {
        return acc;
      }
      return function chainedFunction(...args) {
        acc.apply(this, args);
        func.apply(this, args);
      };
    },
    () => {},
  );
}
