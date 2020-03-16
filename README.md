# @a-la/bootstrap

[![npm version](https://badge.fury.io/js/@a-la/bootstrap.svg)](https://www.npmjs.com/package/@a-la/bootstrap)

`@a-la/bootstrap` is Bootstrap Class Properties, Elements And Types Definitions For JSX.

```sh
yarn add @a-la/bootstrap
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`async bootstrap(config: !Config): string`](#async-mynewpackageconfig-config-string)
  * [`Config`](#type-config)
- [CLI](#cli)
- [Copyright & License](#copyright--license)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import bootstrap from '@a-la/bootstrap'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code>async <ins>bootstrap</ins>(</code><sub><br/>&nbsp;&nbsp;`config: !Config,`<br/></sub><code>): <i>string</i></code>
Bootstrap Class Properties, Elements And Types Definitions For JSX.

 - <kbd><strong>config*</strong></kbd> <em><code><a href="#type-config" title="Options for the program.">!Config</a></code></em>: The config.

__<a name="type-config">`Config`</a>__: Options for the program.


|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| text      | <em>string</em>  | A text to return. | -       |

```js
import bootstrap from '@a-la/bootstrap'

(async () => {
  const res = await bootstrap({
    text: 'example',
  })
  console.log(res)
})()
```
```
@a-la/bootstrap called with example
example
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright & License

GNU Affero General Public License v3.0

<table>
  <tr>
    <td><img src="https://avatars3.githubusercontent.com/u/38815725?v=4&amp;s=100" alt="a-la"></td>
    <td>© <a href="https://alamode.cc">À La Mode</a> 2020</td>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>