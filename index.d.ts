export interface Object {
    hasOwnProperty<T>(this: T, v: any): v is keyof T;
}
/**
 * Returns a map-like object. If `opt_initial` is provided, copies its own
 * properties into the newly created object.
 * @param {T=} opt_initial This should typically be an object literal.
 * @returns {T}
 * @template T
 */
export declare function map<T>(opt_initial: (T | undefined)): any;
/**
 * Checks if the given key is a property in the map.
 * @param {T} obj a map like property.
 * @param {string} key
 * @returns {boolean}
 * @template T
 */
export declare function hasOwn<T>(obj: T, key: string): boolean;
/**
 * Returns obj[key] iff key is obj's own property (is not inherited).
 * Otherwise, returns undefined.
 * @param {Record<string, number | RegExp>} obj
 * @param {string} key
 * @returns {unknown}
 */
export declare function ownProperty(obj: Record<string, number | RegExp>, key: string): number | RegExp | undefined;
/**
 * Deep merges source into target.
 *
 * @param {!Object} target
 * @param {!Object} source
 * @param {number} depth The maximum merge depth. If exceeded, Object.assign
 *                       will be used instead.
 * @returns {!Object}
 * @throws {Error} If source contains a circular reference.
 * Note: Only nested objects are deep-merged, primitives and arrays are not.
 */
export declare function deepMerge(target: Object, source: Object, depth?: number): Object;
/**
 * @param {!Record<string, number | RegExp>} o An object to remove properties from.
 * @param {!Array<string>} props A list of properties to remove from the Object.
 * @returns {!Record<string, number | RegExp>} An object with the given properties removed.
 */
export declare function omit(o: Record<string, number | RegExp>, props: Array<string>): Record<string, number | RegExp>;
/**
 * @param {!Record<string, number | RegExp> | null | undefined} o1
 * @param {!Record<string, number | RegExp> | null | undefined} o2
 * @returns {boolean}
 */
export declare function objectsEqualShallow(o1: (Record<string, number | RegExp> | null | undefined), o2: (Record<string, number | RegExp> | null | undefined)): boolean;
