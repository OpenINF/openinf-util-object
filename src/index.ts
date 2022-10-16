// Copyright 2021 The OpenINF Authors. All rights reserved. MIT license.
//
// Adapted from AMP HTML. Copyright The AMP HTML Authors.
// @see https://github.com/ampproject/amphtml/blob/HEAD/src/utils/object.js
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { isObject } from '@openinf/util-types';

export interface Object {
  hasOwnProperty<T>(this: T, v: any): v is keyof T;
}

/* @const */
const _hasOwn = Object.prototype.hasOwnProperty;

/**
 * Returns a map-like object. If `opt_initial` is provided, copies its own
 * properties into the newly created object.
 * @param {T=} opt_initial This should typically be an object literal.
 * @returns {T}
 * @template T
 */
export function map<T>(opt_initial: T | undefined) {
  const object = Object.create(null);
  if (opt_initial) {
    Object.assign(object, opt_initial);
  }
  return { ...opt_initial };
}

/**
 * Checks if the given key is a property in the map.
 * @param {T} obj a map like property.
 * @param {string} key
 * @returns {boolean}
 * @template T
 */
export function hasOwn<T>(object: T, key: string) {
  return _hasOwn.call(object, key);
}

/**
 * Returns obj[key] iff key is obj's own property (is not inherited).
 * Otherwise, returns undefined.
 * @param {Record<string, number | RegExp>} obj
 * @param {string} key
 * @returns {unknown}
 */
export function ownProperty(
  object: Record<string, number | RegExp>,
  key: string,
) {
  return hasOwn(object, key) ? Reflect.get(object, key) : undefined;
}

interface ITargetSourceDepth {
  t: Object;
  s: Object;
  d: number;
}

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
export function deepMerge(target: Object, source: Object, depth = 10): Object {
  // Keep track of seen objects to detect recursive references.
  const seen: object[] = [];

  /** @type {!Array<ITargetSourceDepth>} */
  const queue: ITargetSourceDepth[] = [];
  queue.push({ t: target, s: source, d: 0 });

  // BFS to ensure objects don't have recursive references at shallower depths.
  while (queue.length > 0) {
    const { t, s, d } = map(queue.shift());
    if (seen.includes(s)) {
      throw new Error('Source object has a circular reference.');
    }
    seen.push(s);
    if (t === s) {
      continue;
    }
    if (d > depth) {
      Object.assign(t, s);
      continue;
    }
    for (const key of Object.keys(s)) {
      const newValue = Reflect.get(s, key);
      // Perform a deep merge IFF both target and source have the same key
      // whose corresponding values are objects.
      if (hasOwn(t, key)) {
        const oldValue = t[key];
        if (isObject(newValue) && isObject(oldValue)) {
          queue.push({ t: oldValue, s: newValue, d: d + 1 });
          continue;
        }
      }
      t[key] = newValue;
    }
  }
  return target;
}

/**
 * @param {!Record<string, number | RegExp> | null | undefined} o1
 * @param {!Record<string, number | RegExp> | null | undefined} o2
 * @returns {boolean}
 */
export function objectsEqualShallow(
  o1: Record<string, number | RegExp> | null | undefined,
  o2: Record<string, number | RegExp> | null | undefined
): boolean {
  if (o1 == undefined || o2 == undefined) {
    // Null is only equal to null, and undefined to undefined.
    return o1 === o2;
  }
  for (const k in o1) {
    if (o1[k] !== o2[k]) {
      return false;
    }
  }
  for (const k in o2) {
    if (o2[k] !== o1[k]) {
      return false;
    }
  }
  return true;
}

/**
 * Takes an object, a property name, and a factory function. If the value of
 * the property is undefined, it generates a value with the factory function,
 * updates the object originally passed, and returns the value that was returned
 * by the factory function.
 *
 * @param {T} obj
 * @param {string} prop
 * @param {function(T, string):R} factory
 * @returns {R}
 * @template T,R
 */
export function memo<T, P extends keyof T>(
  object: T,
  property: P,
  factory: (argument0: T, argument1: P) => T[P],
): T[P] {
  let result = object[property];
  if (result === undefined) {
    result = factory(object, property);
    object[property] = result;
  }
  return result;
}
