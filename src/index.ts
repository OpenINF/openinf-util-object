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
export const map = <T>(opt_initial: T | null | undefined): object => {
  const object = Object.create(null);
  if (opt_initial) {
    Object.assign(object, { ...opt_initial });
  }

  // FIXME(@DerekNonGeneric): Should we be returning these newly-created
  // objects w/ `null` prototypes instead of `undefined` ones, (which is
  // what had previously been doing and are still currently testing for)?
  return object;
};

/**
 * Checks if the given key is a property in the map.
 * @param {T} obj a map like property.
 * @param {string} key
 * @returns {boolean}
 * @template T
 */
export const hasOwn = <T>(object: T, key: string): boolean => {
  return _hasOwn.call(object, key);
};

/**
 * Returns obj[key] iff key is obj's own property (is not inherited).
 * Otherwise, returns undefined.
 * @param {Record<string, number | RegExp>} obj
 * @param {string} key
 * @returns {unknown}
 */
export const ownProperty = (
  object: Record<string, number | RegExp>,
  key: string
): unknown => {
  return hasOwn(object, key) ? Reflect.get(object, key) : undefined;
};

/** @typedef {{t: object, s: object, d: number}} DeepMergeTuple */
interface DeepMergeTuple {
  t: object;
  s: object;
  d: number;
}

/**
 * Deep merges source into target.
 *
 * @param {!object} target
 * @param {!object} source
 * @param {!number} depth The maximum merge depth. If exceeded, `Object.assign`
 *                        will be used instead.
 * @return {!object}
 * @throws {Error} If source contains a circular reference.
 * Note: Only nested objects are deep-merged, primitives and arrays are not.
 */
export const deepMerge = (
  target: object,
  source: object,
  depth = 10
): object => {
  // Keep track of seen objects to detect recursive references.
  /** @type {!object[]} */
  const seen: object[] = [];

  /** @type {!DeepMergeTuple[]} */
  const queue: DeepMergeTuple[] = [];
  queue.push({ t: target, s: source, d: 0 });

  // BFS to ensure objects don't have recursive references at shallower depths.
  while (queue.length > 0) {
    const { t, s, d } = /** @type {!DeepMergeTuple} */ new Object(
      queue.shift()
    );
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
        const oldValue = Reflect.get(t, key);
        if (isObject(newValue) && isObject(oldValue)) {
          queue.push({ t: oldValue, s: newValue, d: d + 1 });
          continue;
        }
      }
      Reflect.set(t, key, newValue);
    }
  }
  return target;
};

/**
 * @param {!Record<string, number | RegExp> | null | undefined} o1
 * @param {!Record<string, number | RegExp> | null | undefined} o2
 * @returns {boolean}
 */
export const objectsEqualShallow = (
  o1: Record<string, number | RegExp> | null | undefined,
  o2: Record<string, number | RegExp> | null | undefined
): boolean => {
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
};

/**
 * Takes an object, a property name, and a factory function. If the value of
 * the property is undefined, it generates a value with the factory function,
 * updates the object originally passed, and returns the value that was returned
 * by the factory function.
 *
 * @param {T extends object} object
 * @param {string} property
 * @param {function(T, string):R} factory
 * @returns {R}
 * @template P,T,R
 */
export const memo = <T extends object, P extends keyof T>(
  object: T,
  property: P,
  factory: (argument0: T, argument1: P) => T[P]
): T[P] => {
  let result = Reflect.get(object, property);
  if (result === undefined) {
    result = factory(object, property);
    Reflect.set(object, property, result);
  }
  return result;
};
