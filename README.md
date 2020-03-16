# @a-la/bootstrap

[![npm version](https://badge.fury.io/js/%40a-la%2Fbootstrap.svg)](https://www.npmjs.com/package/@a-la/bootstrap)

`@a-la/bootstrap` is Bootstrap Class Properties, Elements And Types Definitions For JSX.

```sh
yarn add -D @a-la/bootstrap
npm i --save-dev @a-la/bootstrap
```

<img src="./doc/modal.gif" alt="modal autocompletions">

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [Usage](#usage)
- [Closure Stylesheets](#closure-stylesheets)
- [Copyright & License](#copyright--license)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## Usage

By installing this package, you will be able to specify classes on tags and components as JSX properties when using [`alamode`](https://github.com/a-la/alamode) transpiler.

To receive access to auto-completions, you'll need to import the `@a-la/bootstrap` package in your source code:

```js
import bootstrap from '../src'

(async () => {
  const res = await bootstrap({
    text: 'example',
  })
  console.log(res)
})()
```

The actual import doesn't do anything as the source file is blank. It is needed only for VSCode to pick up distributed typings.

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## Closure Stylesheets

An annotated version of Bulma 0.8.0 is available in `bootstrap/bootstrap.css` where `/* @alternate */` annotations were added for compatibility with [Closure Stylesheets](https://github.com/artdecocode/closure-stylsheets-java).

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright & License

GNU Affero General Public License v3.0

<table>
  <tr><td><img src="https://avatars1.githubusercontent.com/u/41520309?v=4&amp;s=100" alt="a-la"></td><td>© <a href="https://alamode.cc">À La Mode</a> 2020</td></tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>