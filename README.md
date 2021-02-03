<h1 align="center">@openinf/util-object</h1>

<p align="center">Common JavaScript Object type-related utilities</p>

<br />

<p align="center">
  <a href="https://www.npmjs.com/package/@openinf/util-object"><img src="https://img.shields.io/npm/v/@openinf/util-object?style=plastic" alt="view on npm" /></a>
  <img src="https://img.shields.io/github/languages/top/openinf/util-types?color=blue&style=plastic" />
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/github/license/openinf/openinf.github.io?color=blue&style=plastic" alt="License: MIT" /></a>
</p>

<br />

_The high-level goal of `@openinf/util-object` is to serve as a Node.js
package containing utilities for **common JavaScript Object type-related
utilities** primarily enabling users to perform comparisons and analyze object
contents. As is the case with any software project in continuous
development, omissions and errors may exist, for which contributions are
welcome._

<br />

---

<br />

## Installation

`@openinf/util-object` runs on Node.js and is available via `npm`.

```bash
npm install @openinf/util-object
```

## Usage

```ts
import { hasOwn } from '@openinf/util-object';

export class GhFileImporter {
  constructor(options: GhFileImporterOptions) {
    if (!hasOwn(options, 'destDir')) {
      throw new MissingOptionError('destDir');
    }
  }
}
```

<br />

---

<br />

## Functions

<dl>
<dt><a href="#map">map([opt_initial])</a> ⇒ <code>T</code></dt>
<dd><p>Returns a map-like object. If <code>opt_initial</code> is provided, copies its own
properties into the newly created object.</p>
</dd>
<dt><a href="#hasOwn">hasOwn(obj, key)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if the given key is a property in the map.</p>
</dd>
<dt><a href="#ownProperty">ownProperty(obj, key)</a> ⇒ <code>unknown</code></dt>
<dd><p>Returns obj[key] iff key is obj&#39;s own property (is not inherited).
Otherwise, returns undefined.</p>
</dd>
<dt><a href="#deepMerge">deepMerge(target, source, depth)</a> ⇒ <code>Object</code></dt>
<dd><p>Deep merges source into target.</p>
</dd>
<dt><a href="#omit">omit(o, props)</a> ⇒ <code>Record.&lt;string, (number|RegExp)&gt;</code></dt>
<dd></dd>
<dt><a href="#objectsEqualShallow">objectsEqualShallow(o1, o2)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
</dl>

<a name="map"></a>

## map([opt_initial]) ⇒ <code>T</code>
Returns a map-like object. If `opt_initial` is provided, copies its own
properties into the newly created object.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [opt_initial] | <code>T</code> | This should typically be an object literal. |

<a name="hasOwn"></a>

## hasOwn(obj, key) ⇒ <code>boolean</code>
Checks if the given key is a property in the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>T</code> | a map like property. |
| key | <code>string</code> |  |

<a name="ownProperty"></a>

## ownProperty(obj, key) ⇒ <code>unknown</code>
Returns obj[key] iff key is obj's own property (is not inherited).
Otherwise, returns undefined.

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>Record.&lt;string, (number\|RegExp)&gt;</code> | 
| key | <code>string</code> | 

<a name="deepMerge"></a>

## deepMerge(target, source, depth) ⇒ <code>Object</code>
Deep merges source into target.

**Kind**: global function  
**Throws**:

- <code>Error</code> If source contains a circular reference.
Note: Only nested objects are deep-merged, primitives and arrays are not.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| target | <code>Object</code> |  |  |
| source | <code>Object</code> |  |  |
| depth | <code>number</code> | <code>10</code> | The maximum merge depth. If exceeded, Object.assign                       will be used instead. |

<a name="deepMerge..queue"></a>

### deepMerge~queue : <code>Array.&lt;ITargetSourceDepth&gt;</code>
**Kind**: inner constant of [<code>deepMerge</code>](#deepMerge)  
<a name="omit"></a>

## omit(o, props) ⇒ <code>Record.&lt;string, (number\|RegExp)&gt;</code>
**Kind**: global function  
**Returns**: <code>Record.&lt;string, (number\|RegExp)&gt;</code> - An object with the given properties removed.  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>Record.&lt;string, (number\|RegExp)&gt;</code> | An object to remove properties from. |
| props | <code>Array.&lt;string&gt;</code> | A list of properties to remove from the Object. |

<a name="objectsEqualShallow"></a>

## objectsEqualShallow(o1, o2) ⇒ <code>boolean</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| o1 | <code>!Record.&lt;string, (number\|RegExp)&gt;</code> \| <code>null</code> \| <code>undefined</code> | 
| o2 | <code>!Record.&lt;string, (number\|RegExp)&gt;</code> \| <code>null</code> \| <code>undefined</code> | 


<br />

---

<br />

&copy; OpenINF
