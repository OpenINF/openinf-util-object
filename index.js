"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.memo = exports.objectsEqualShallow = exports.omit = exports.deepMerge = exports.ownProperty = exports.hasOwn = exports.map = void 0;
const util_types_1 = require("@openinf/util-types");
/* @const */
const _hasOwn = Object.prototype.hasOwnProperty;
/**
 * Returns a map-like object. If `opt_initial` is provided, copies its own
 * properties into the newly created object.
 * @param {T=} opt_initial This should typically be an object literal.
 * @returns {T}
 * @template T
 */
function map(opt_initial) {
    const obj = Object.create(null);
    if (opt_initial) {
        Object.assign(obj, opt_initial);
    }
    return obj;
}
exports.map = map;
/**
 * Checks if the given key is a property in the map.
 * @param {T} obj a map like property.
 * @param {string} key
 * @returns {boolean}
 * @template T
 */
function hasOwn(obj, key) {
    return _hasOwn.call(obj, key);
}
exports.hasOwn = hasOwn;
/**
 * Returns obj[key] iff key is obj's own property (is not inherited).
 * Otherwise, returns undefined.
 * @param {Record<string, number | RegExp>} obj
 * @param {string} key
 * @returns {unknown}
 */
function ownProperty(obj, key) {
    if (hasOwn(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
exports.ownProperty = ownProperty;
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
function deepMerge(target, source, depth = 10) {
    // Keep track of seen objects to detect recursive references.
    const seen = [];
    /** @type {!Array<ITargetSourceDepth>} */
    const queue = [];
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
        Object.keys(s).forEach((key) => {
            const newValue = s[key];
            // Perform a deep merge IFF both target and source have the same key
            // whose corresponding values are objects.
            if (hasOwn(t, key)) {
                const oldValue = t[key];
                if (util_types_1.isObject(newValue) && util_types_1.isObject(oldValue)) {
                    queue.push({ t: oldValue, s: newValue, d: d + 1 });
                    return;
                }
            }
            t[key] = newValue;
        });
    }
    return target;
}
exports.deepMerge = deepMerge;
/**
 * @param {!Record<string, number | RegExp>} o An object to remove properties from.
 * @param {!Array<string>} props A list of properties to remove from the Object.
 * @returns {!Record<string, number | RegExp>} An object with the given properties removed.
 */
function omit(o, props) {
    return Object.keys(o).reduce((acc, key) => {
        if (!props.includes(key)) {
            acc[key] = o[key];
        }
        return acc;
    }, {});
}
exports.omit = omit;
/**
 * @param {!Record<string, number | RegExp> | null | undefined} o1
 * @param {!Record<string, number | RegExp> | null | undefined} o2
 * @returns {boolean}
 */
function objectsEqualShallow(o1, o2) {
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
exports.objectsEqualShallow = objectsEqualShallow;
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
function memo(obj, prop, factory) {
    let result = obj[prop];
    if (result === undefined) {
        result = factory(obj, prop);
        obj[prop] = result;
    }
    return result;
}
exports.memo = memo;
