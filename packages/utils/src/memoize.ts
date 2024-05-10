export interface MemoizeOptions<
  TArgs extends unknown[],
  TReturn,
  TKey = unknown,
> {
  /**
   * The Cache implementation to provide. Must be a Map or Map-alike. Defaults
   * to a Map. Useful for replacing the cache with an LRU cache or similar.
   */
  cache?: Map<TKey, TReturn>;
  /**
   * Provides a single value to use as the Key for the memoization.
   * Defaults to `JSON.stringify` (ish).
   */
  hash?: (...args: TArgs) => TKey;
}

export type MemoizableFunction<T, TArgs extends unknown[], TReturn> = (
  this: T,
  ...args: TArgs
) => TReturn;

function defaultHash<TArgs extends unknown[], TKey>(...args: TArgs): TKey {
  return JSON.stringify(args, (_: unknown, v: unknown) =>
    typeof v === "object" ? v : String(v),
  ) as TKey;
}

export function memoize<T, TArgs extends unknown[], TReturn, TKey>(
  fn: MemoizableFunction<T, TArgs, TReturn>,
  {
    cache = new Map<TKey, TReturn>(),
    hash = defaultHash,
  }: MemoizeOptions<TArgs, TReturn, TKey> = {},
): MemoizableFunction<T, TArgs, TReturn> {
  return function memoized(this: T, ...args: TArgs): TReturn {
    const key = hash.apply(this, args);
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    let result = fn.apply(this, args);
    if (result instanceof Promise) {
      result = result.catch((error) => {
        cache.delete(key);
        throw error;
      }) as TReturn;
    }
    cache.set(key, result);
    return result;
  };
}
