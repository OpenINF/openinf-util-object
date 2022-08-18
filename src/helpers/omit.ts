import type { ESPropertyKey } from '../types';

/**
 * Returns a partial copy of an object omitting the keys specified. We do not copy.
 *
 * @template T
 * @param opt_originalObject An object to remove properties from. The default value is an empty object literal.
 * @param opt_keysToOmit The list of property keys to remove from the original Object. The default value is an empty array.
 * @returns A new object without the omitted keys. An object with the given properties removed.
 *    The original object is not modified if provided.
 */
export const omit = <T>(
  opt_originalObject: Record<ESPropertyKey, T> = {},
  opt_keysToOmit: ESPropertyKey[] = new Array<ESPropertyKey>()
): Record<ESPropertyKey, T> => {
  return Object.keys(opt_originalObject).reduce(
    (accumulator: Record<ESPropertyKey, T>, key) => {
      if (
        !opt_keysToOmit.includes(key) && // if key is not in opt_keysToOmit
        Object.is(Reflect.get(accumulator, key), undefined) // if value of key is `undefined` in accumulator (not in prototype chain)
      )
        Reflect.set(accumulator, key, Reflect.get(opt_originalObject, key));
      return accumulator;
    },
    {} // FIXME(@DerekNonGeneric): do we want an empty object literal to begin our accumulation?
  );
};

export default omit;
