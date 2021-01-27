/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a map-like object.
 * If opt_initial is provided, copies its own properties into the
 * newly created object.
 * @param {T=} opt_initial This should typically be an object literal.
 * @return {T}
 * @template T
 */
export declare function map(opt_initial: any): any;
/**
 * Return an empty JsonObject or makes the passed in object literal
 * an JsonObject.
 * The JsonObject type is just a simple object that is at-dict.
 * See
 * https://github.com/google/closure-compiler/wiki/@struct-and-@dict-Annotations
 * for what a dict is type-wise.
 * The linter enforces that the argument is, in fact, at-dict like.
 * @param {!Object=} opt_initial
 * @return {!JsonObject}
 */
export declare function dict(opt_initial: any): any;
/**
 * Checks if the given key is a property in the map.
 *
 * @param {T} obj a map like property.
 * @param {string} key
 * @return {boolean}
 * @template T
 */
export declare function hasOwn(obj: any, key: any): any;
/**
 * Returns obj[key] iff key is obj's own property (is not inherited).
 * Otherwise, returns undefined.
 *
 * @param {Object} obj
 * @param {string} key
 * @return {unknown}
 */
export declare function ownProperty(obj: any, key: any): any;
/**
 * Deep merges source into target.
 *
 * @param {!Object} target
 * @param {!Object} source
 * @param {number} depth The maximum merge depth. If exceeded, Object.assign
 *                       will be used instead.
 * @return {!Object}
 * @throws {Error} If source contains a circular reference.
 * Note: Only nested objects are deep-merged, primitives and arrays are not.
 */
export declare function deepMerge(target: any, source: any, depth?: number): any;
/**
 * @param {!Object} o An object to remove properties from
 * @param {!Array<string>} props A list of properties to remove from the Object
 * @return {!Object} An object with the given properties removed
 */
export declare function omit(o: any, props: any): {};
/**
 * @param {!Object|null|undefined} o1
 * @param {!Object|null|undefined} o2
 * @return {boolean}
 */
export declare function objectsEqualShallow(o1: any, o2: any): boolean;
/**
 * @param {T} obj
 * @param {string} prop
 * @param {function(T, string):R} factory
 * @return {R}
 * @template T,R
 */
export declare function memo(obj: any, prop: any, factory: any): any;
