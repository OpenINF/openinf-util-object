<a href="https://open.inf.is">
  <img
    src="https://open.inf.is/assets/img/svg/logogram-color.svg"
    alt="OpenINF logo"
    title="OpenINF"
    align="right"
    height="96"
    width="96"
  />
</a>

<div align="left">

## `@openinf/util-object`

> Common JavaScript object type-related utilities

<br />

[!['View on npm'][npm-badge--shields]][npm-badge-url]
[!['License: MIT/Apache-2.0'][license-badge--shields]][license-badge-url]

</div>

<br />

The high-level goal of `@openinf/util-object` is to serve as a Node.js package
containing utilities for **common JavaScript object type-related operations**
primarily enabling users to perform comparisons and analyze object contents. We
are constantly working to improve this repository, so please feel free to
[contribute](#contributing) if you notice any omissions or errors.

Thanks!

<br />

<details id="platform--node-js-lts">
	<summary>
		<a
			href="#platform--node-js-lts"
			title="Platform: Node.js LTS"
		>
			<img
				src="https://img.shields.io/badge/Node.js-LTS-black?logo=Node.js&logoColor=lightgreen&color=2a2a2a&labelColor=black"
				alt="Platform: Node.js LTS"
			/>
		</a>
	</summary>
	<div align="left"><br />
		<a
			target="_blank"
			title="Node.js release schedule"
			href="https://github.com/nodejs/release#release-schedule"
		>
			<strong>Supported Node.js Environments</strong>
		</a><br /><br />

- [ ] v4：Argon (Ar)
- [ ] v6：Boron (B)
- [ ] v8：Carbon (C)
- [ ] v10：Dubnium (Db)
- [ ] v12：Erbium (Er)
- [x] v14：Fermium (Fm)
- [x] v16：Gallium (Ga)
- [x] v18：Hydrogen (H)
<!-- TODO
- [x] v20: Iron (Fe) -->

</div></details>

<br />

<div align="center">

[![Code Style: Prettier][prettier-badge]][prettier-url]
[![Commit Style: Conventional Commits][conventional-commits-badge]][conventional-commits-url]
[![Chat on Matrix][matrix-badge--shields]][matrix-url]

</div>

<br /><br />

---

<br />

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

<br /><br />

---

<br />

<details>
<summary>
	<!-- markdownlint-disable-next-line line-length -->
	<h3 id="installation" align="left">Installation <a href="##"><img src="https://raw.githubusercontent.com/nodejs/corepack/main/icon.svg?sanitize=true" alt="Corepack logo" title="Corepack friendly" align="right" height="24" width="24" /></a></h3>
</summary>

<br />

`@openinf/util-object` runs on
[supported versions of Node.js](#platform--node-js-lts) and is available via
**`npm`**, **`pnpm`**, or **`yarn`**.

**Using the npm CLI**

<sup>See the
[official documentation for this command](https://docs.npmjs.com/cli/commands/npm-install)
for more information.</sup>

```shell
npm i @openinf/util-object
```

**Using the pnpm CLI**

<sup>See the [official documentation for this command](https://pnpm.io/cli/add)
for more information.</sup>

```shell
pnpm add @openinf/util-object
```

**Using the Yarn 1 CLI (Classic)**

<sup>See the
[official documentation for this command](https://classic.yarnpkg.com/en/docs/cli/add)
for more information.</sup>

```shell
yarn add @openinf/util-object
```

<br />

</details>

### Usage

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

<br /><br />

<details open="">
	<summary><h3>API</h3></summary>

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
<dt><a href="#omit">omit(o, props)</a> ⇒ <code>Record&lt;string, (number|RegExp)&gt;</code></dt>
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

#### map([opt_initial]) ⇒ <code>T</code>

Returns a map-like object. If `opt_initial` is provided, copies its own
properties into the newly created object.

**Kind**: global function

| Param         | Type           | Description                                 |
| ------------- | -------------- | ------------------------------------------- |
| [opt_initial] | <code>T</code> | This should typically be an object literal. |

<a name="hasOwn"></a>

#### hasOwn(obj, key) ⇒ <code>boolean</code>

Checks if the given key is a property in the map.

**Kind**: global function

| Param | Type                | Description          |
| ----- | ------------------- | -------------------- |
| obj   | <code>T</code>      | a map like property. |
| key   | <code>string</code> |                      |

<a name="ownProperty"></a>

#### ownProperty(obj, key) ⇒ <code>unknown</code>

Returns obj[key] iff key is obj's own property (is not inherited). Otherwise,
returns undefined.

**Kind**: global function

| Param | Type                                                 |
| ----- | ---------------------------------------------------- |
| obj   | <code>Record&lt;string, (number\|RegExp)&gt;</code> |
| key   | <code>string</code>                                  |

<a name="deepMerge"></a>

#### deepMerge(target, source, depth) ⇒ <code>Object</code>

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

##### deepMerge~queue : <code>Array&lt;ITargetSourceDepth&gt;</code>

**Kind**: inner constant of [<code>deepMerge</code>](#deepMerge)  
<a name="omit"></a>

#### omit(o, props) ⇒ <code>Record&lt;string, (number\|RegExp)&gt;</code>

**Kind**: global function  
**Returns**: <code>Record&lt;string, (number\|RegExp)&gt;</code> - An object
with the given properties removed.

| Param | Type                                                 | Description                                     |
| ----- | ---------------------------------------------------- | ----------------------------------------------- |
| o     | <code>Record&lt;string, (number\|RegExp)&gt;</code> | An object to remove properties from.            |
| props | <code>Array&lt;string&gt;</code>                    | A list of properties to remove from the Object. |

<a name="objectsEqualShallow"></a>

#### objectsEqualShallow(o1, o2) ⇒ <code>boolean</code>

**Kind**: global function

| Param | Type                                                                                                 |
| ----- | ---------------------------------------------------------------------------------------------------- |
| o1    | <code>!Record&lt;string, (number\|RegExp)&gt;</code> \| <code>null</code> \| <code>undefined</code> |
| o2    | <code>!Record&lt;string, (number\|RegExp)&gt;</code> \| <code>null</code> \| <code>undefined</code> |

<a name="memo"></a>

#### memo(obj, prop, factory) ⇒ <code>R</code>

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

</details>

<br /><br />

---

<br />

### Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change. If for whatever reason you spot something
to fix but cannot patch it yourself, please [open an issue][].

<br />

### License

This project is licensed under either of

- [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)
- [MIT license](https://opensource.org/licenses/MIT)

at your option.

The [SPDX](https://spdx.dev) license identifier for this project is
`MIT OR Apache-2.0`.

<br /><br />

---

<br />

<div align="center">

### Show Your Support

<br />

If you like the project (or want to bookmark it)&nbsp;&mdash;<br />
&mdash;&nbsp;[give it a star ⭐️][]&nbsp;&mdash;&nbsp;it will greatly encourage
us.

<br /><br />

<a title="The OpenINF website" href="https://open.inf.is" rel="author">
  <img alt="The OpenINF logo" height="32px" width="32px" src="https://open.inf.is/assets/img/svg/logogram-color.svg" />
</a>

</div>

<!-- BEGIN LINK DEFINITIONS -->
[conventional-commits-badge]: https://img.shields.io/badge/commit%20style-Conventional-%23fa6673?logoColor=white&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggc3R5bGU9ImZpbGw6ICNGRkYiIGQ9Ik0xNSwyQTEzLDEzLDAsMSwxLDIsMTUsMTMsMTMsMCwwLDEsMTUsMm0wLTJBMTUsMTUsMCwxLDAsMzAsMTUsMTUsMTUsMCwwLDAsMTUsMFoiLz48L3N2Zz4K 'Commit Style: Conventional Commits'
[conventional-commits-url]: https://www.conventionalcommits.org 'Commit Style: Conventional Commits'
[give it a star ⭐️]: https://github.com/OpenINF/openinf-util-object/stargazers
[license-badge--shields]: https://img.shields.io/badge/license-MIT%2FApache--2.0-blue.svg?logo=github 'License: MIT/Apache 2.0'
[license-badge-url]: #license 'License: MIT/Apache 2.0'
[matrix-badge--shields]: https://img.shields.io/badge/matrix-join%20chat-%2346BC99?logo=matrix 'Chat on Matrix'
[matrix-url]: https://matrix.to/#/#openinf-space:matrix.org 'You&apos;re invited to talk on Matrix'
[npm-badge--shields]: https://img.shields.io/npm/v/@openinf/util-object/latest.svg?logo=npm&color=fe7d37 'View on npm'
[npm-badge-url]: https://www.npmjs.com/package/@openinf/util-object#top 'View on npm'
[open an issue]: https://github.com/OpenINF/openinf-util-object/issues
[prettier-badge]: https://img.shields.io/badge/code_style-Prettier-ff69b4.svg?logo=prettier 'Code Style: Prettier'
[prettier-url]: https://prettier.io/playground 'Code Style: Prettier'
[project-status-badge]: https://img.shields.io/badge/project%20status-under%20construction-orange 'Project Status: Under construction badge'
<!-- END LINK DEFINITIONS -->
