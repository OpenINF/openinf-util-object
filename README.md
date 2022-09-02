<div align="center">

# @openinf/util-object

Common JavaScript Object type-related utilities

<br />

[!['View on npm'][npm-badge--shields]][npm-badge-url]
!['TypeScript types: included'][types-included-badge]
[!['DeepScan grade'][deepscan-badge]][deepscan-url]
[!['License: MIT'][license-badge--shields]][license-badge-url]
[!['FOSSA Status'][fossa-badge]][fossa-url]

</div>

<br />

_The high-level goal of `@openinf/util-object` is to serve as a Node.js package
containing utilities for **common JavaScript Object type-related utilities**
primarily enabling users to perform comparisons and analyze object contents. As
is the case with any software project in continuous development, omissions and
errors may exist, for which contributions are welcome._

<br />

<div align="center">

[![Code Style: Prettier][prettier-badge]][prettier-url]
[![Commit Style: Conventional Commits][conventional-commits-badge]][conventional-commits-url]
[![Active Issues: DeepSource][deepsource-badge]][deepsource-url]
[![Chat on Matrix][matrix-badge--shields]][matrix-url]

</div>

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
<dt><a href="#memo">memo(obj, prop, factory)</a> ⇒ <code>R</code></dt>
<dd><p>Takes an object, a property name, and a factory function. If the value of
the property is undefined, it generates a value with the factory function,
updates the object originally passed, and returns the value that was returned
by the factory function.</p>
</dd>
</dl>

<a name="map"></a>

## map([opt_initial]) ⇒ <code>T</code>

Returns a map-like object. If `opt_initial` is provided, copies its own
properties into the newly created object.

**Kind**: global function

| Param         | Type           | Description                                 |
| ------------- | -------------- | ------------------------------------------- |
| [opt_initial] | <code>T</code> | This should typically be an object literal. |

<a name="hasOwn"></a>

## hasOwn(obj, key) ⇒ <code>boolean</code>

Checks if the given key is a property in the map.

**Kind**: global function

| Param | Type                | Description          |
| ----- | ------------------- | -------------------- |
| obj   | <code>T</code>      | a map like property. |
| key   | <code>string</code> |                      |

<a name="ownProperty"></a>

## ownProperty(obj, key) ⇒ <code>unknown</code>

Returns obj[key] iff key is obj's own property (is not inherited). Otherwise,
returns undefined.

**Kind**: global function

| Param | Type                                                 |
| ----- | ---------------------------------------------------- |
| obj   | <code>Record.&lt;string, (number\|RegExp)&gt;</code> |
| key   | <code>string</code>                                  |

<a name="deepMerge"></a>

## deepMerge(target, source, depth) ⇒ <code>Object</code>

Deep merges source into target.

**Kind**: global function  
**Throws**:

- <code>Error</code> If source contains a circular reference. Note: Only nested
  objects are deep-merged, primitives and arrays are not.

| Param  | Type                | Default         | Description                                                               |
| ------ | ------------------- | --------------- | ------------------------------------------------------------------------- |
| target | <code>Object</code> |                 |                                                                           |
| source | <code>Object</code> |                 |                                                                           |
| depth  | <code>number</code> | <code>10</code> | The maximum merge depth. If exceeded, Object.assign will be used instead. |

<a name="deepMerge..queue"></a>

### deepMerge~queue : <code>Array.&lt;ITargetSourceDepth&gt;</code>

**Kind**: inner constant of [<code>deepMerge</code>](#deepMerge)  
<a name="omit"></a>

## omit(o, props) ⇒ <code>Record.&lt;string, (number\|RegExp)&gt;</code>

**Kind**: global function  
**Returns**: <code>Record.&lt;string, (number\|RegExp)&gt;</code> - An object
with the given properties removed.

| Param | Type                                                 | Description                                     |
| ----- | ---------------------------------------------------- | ----------------------------------------------- |
| o     | <code>Record.&lt;string, (number\|RegExp)&gt;</code> | An object to remove properties from.            |
| props | <code>Array.&lt;string&gt;</code>                    | A list of properties to remove from the Object. |

<a name="objectsEqualShallow"></a>

## objectsEqualShallow(o1, o2) ⇒ <code>boolean</code>

**Kind**: global function

| Param | Type                                                                                                 |
| ----- | ---------------------------------------------------------------------------------------------------- |
| o1    | <code>!Record.&lt;string, (number\|RegExp)&gt;</code> \| <code>null</code> \| <code>undefined</code> |
| o2    | <code>!Record.&lt;string, (number\|RegExp)&gt;</code> \| <code>null</code> \| <code>undefined</code> |

<a name="memo"></a>

## memo(obj, prop, factory) ⇒ <code>R</code>

Takes an object, a property name, and a factory function. If the value of the
property is undefined, it generates a value with the factory function, updates
the object originally passed, and returns the value that was returned by the
factory function.

**Kind**: global function

| Param   | Type                  |
| ------- | --------------------- |
| obj     | <code>T</code>        |
| prop    | <code>string</code>   |
| factory | <code>function</code> |

<br /><br />

---

<br />

<div align="center">

## Show Your Support

<!-- Give a ⭐️ if this project helped you! -->

If you like the project, [give it a star ⭐️], it will be a great encouragement
to us.

<br /><br />

&copy; The OpenINF Authors

<br />

<a title="The OpenINF website" href="https://open.inf.is" rel="author">
  <img alt="The OpenINF logo" height="32px" width="32px" src="https://raw.githubusercontent.com/openinf/openinf.github.io/live/logo.svg?sanitize=true" />
</a>

</div>

<!-- prettier-ignore-start -->
<!-- PRESERVE LINK DEFINITION LABEL CASE - START -->

[give it a star ⭐️]: https://github.com/openinf/util-object/stargazers

[deepscan-badge]: https://badgen.net/deepscan/grade/team/18447/project/21802/branch/634013?icon=deepscan 'DeepScan grade'
[deepscan-url]: https://deepscan.io/dashboard#view=project&tid=18447&pid=21802&bid=634013 'DeepScan grade'
[deepsource-badge]: https://deepsource.io/gh/openinf/util-object.svg/?label=active+issues&show_trend=true&token=koqA5qbYRUzwMD4h3D8URZoT
[deepsource-url]: https://deepsource.io/gh/openinf/util-object/?ref=repository-badge 'Active Issues: DeepSource'
[conventional-commits-badge]: https://img.shields.io/badge/commit%20style-Conventional-%23fa6673?logoColor=white&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggc3R5bGU9ImZpbGw6ICNGRkYiIGQ9Ik0xNSwyQTEzLDEzLDAsMSwxLDIsMTUsMTMsMTMsMCwwLDEsMTUsMm0wLTJBMTUsMTUsMCwxLDAsMzAsMTUsMTUsMTUsMCwwLDAsMTUsMFoiLz48L3N2Zz4K 'Commit Style: Conventional Commits'
[conventional-commits-url]: https://www.conventionalcommits.org 'Commit Style: Conventional Commits'
[fossa-badge]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Fopeninf%2Futil-object.svg?type=small 'FOSSA Status'
[fossa-url]: https://app.fossa.com/projects/git%2Bgithub.com%2Fopeninf%2Futil-object?ref=badge_small 'FOSSA Status'
[license-badge-url]: https://spdx.org/licenses/MIT.html 'License: MIT'
[license-badge--shields]: https://img.shields.io/github/license/openinf/util-object?color=blue&logo=github 'License: MIT'
[matrix-badge--shields]: https://img.shields.io/badge/matrix-join%20chat-%2346BC99?logo=matrix 'Chat on Matrix'
[matrix-url]: https://matrix.to/#/#openinf:matrix.org 'You&apos;re invited to talk on Matrix'
[npm-badge--shields]: https://img.shields.io/npm/v/@openinf/util-object/latest.svg?logo=npm 'View on npm'
[npm-badge-url]: https://www.npmjs.com/package/@openinf/util-object#top 'View on npm'
[prettier-badge]: https://img.shields.io/badge/code_style-Prettier-ff69b4.svg?logo=prettier 'Code Style: Prettier'
[prettier-url]: https://prettier.io/playground 'Code Style: Prettier'
[types-included-badge]: https://badgen.net/npm/types/@openinf/util-object?icon=typescript 'TypeScript types: included'

<!-- PRESERVE LINK DEFINITION LABEL CASE - END -->
<!-- prettier-ignore-end -->
