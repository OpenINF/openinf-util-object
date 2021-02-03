// Copyright 2021 the OpenINF authors. All rights reserved. MIT license.
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

export interface Object {
  hasOwnProperty<T>(this: T, v: any): v is keyof T
}

import { isObject } from '@openinf/util-types';

/* @const */
const _hasOwn = Object.prototype.hasOwnProperty;

/**
 * Returns a map-like object. If `opt_initial` is provided, copies its own
 * properties into the newly created object.
 * @param {T=} opt_initial This should typically be an object literal.
 * @return {T}
 * @template T
 */
export function map<T>(opt_initial: (T | undefined)) {
  const obj = Object.create(null);
  if (opt_initial) {
    Object.assign(obj, opt_initial);
  }
  return obj;
}

/**
 * Checks if the given key is a property in the map.
 *
 * @param {T} obj a map like property.
 * @param {string} key
 * @return {boolean}
 * @template T
 */
export function hasOwn<T>(obj: T, key: string) {
  return _hasOwn.call(obj, key);
}

/**
 * Returns obj[key] iff key is obj's own property (is not inherited).
 * Otherwise, returns undefined.
 *
 * @param {Record<string, number | RegExp>} obj
 * @param {string} key
 * @return {unknown}
 */
export function ownProperty(obj: Record<string, number | RegExp>, key: string) {
  if (hasOwn(obj, key)) {
    return obj[key];
  } else {
    return undefined;
  }
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
 * @return {!Object}
 * @throws {Error} If source contains a circular reference.
 * Note: Only nested objects are deep-merged, primitives and arrays are not.
 */
export function deepMerge(target: Object,
  source: Object, depth = 10):Object {
  // Keep track of seen objects to detect recursive references.
  const seen: Array<Object> = [];

  /** @type {!Array<ITargetSourceDepth>} */
  const queue: Array<ITargetSourceDepth> = [];
  queue.push({t: target, s: source, d: 0});

  // BFS to ensure objects don't have recursive references at shallower depths.
  while (queue.length > 0) {
    const {t, s, d} = map(queue.shift());
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
    Object.keys(s).forEach((key) => {
      const newValue = s[key];
      // Perform a deep merge IFF both target and source have the same key
      // whose corresponding values are objects.
      if (hasOwn(t, key)) {
        const oldValue = t[key];
        if (isObject(newValue) && isObject(oldValue)) {
          queue.push({t: oldValue, s: newValue, d: d + 1});
          return;
        }
      }
      t[key] = newValue;
    });
  }
  return target;
}

/**
 * @param {!Record<string, number | RegExp>} o An object to remove properties from.
 * @param {!Array<string>} props A list of properties to remove from the Object.
 * @returns {!Record<string, number | RegExp>} An object with the given properties removed.
 */
export function omit(o: Record<string, number | RegExp>, props: Array<string>):
  Record<string, number | RegExp> {
  return Object.keys(o).reduce((acc: Record<string, number | RegExp>, key) => {
    if (!props.includes(key)) {
      acc[key] = o[key];
    }
    return acc;
  }, {});
}

/**
 * @param {!Record<string, number | RegExp> | null | undefined} o1
 * @param {!Record<string, number | RegExp> | null | undefined} o2
 * @returns {boolean}
 */
export function objectsEqualShallow(o1: (Record<string, number | RegExp> | null | undefined),
  o2: (Record<string, number | RegExp> | null | undefined)): boolean {
  if (o1 == null || o2 == null) {
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
