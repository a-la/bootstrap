## Usage

By installing this package, you will be able to specify classes on tags and components as JSX properties when using [`alamode`](https://github.com/a-la/alamode) transpiler.

To receive access to auto-completions, you'll need to import the `@a-la/bootstrap` package in your source code:

%EXAMPLE: example, ../ => @a-la/bootstrap%

The actual import doesn't do anything as the source file is blank. It is needed only for VSCode to pick up distributed typings.

Because of [a bug](https://github.com/microsoft/TypeScript/issues/28905) in VSCode, you won't see properties with hyphens, e.g., `container-fluid` and will only see `containerFluid`, but you can actually use both. The camel cases are added for discoverability of classes.

%~%

## Bootstrap Classes

See the <kbd>📙 [full list of Bootstrap classes](../../wiki/Classes)</kbd> in Wiki.

%~%

## Closure Stylesheets

An annotated version of Bulma 0.8.0 is available in `bootstrap/bootstrap.css` where `/* @alternate */` annotations were added for compatibility with [Closure Stylesheets](https://github.com/artdecocode/closure-stylsheets-java).

%~%