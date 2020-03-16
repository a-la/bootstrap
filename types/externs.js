/**
 * @fileoverview
 * @externs
 */

/* typal types/index.xml externs */
/** @const */
var _bootstrap = {}
/**
 * Options for the program.
 * @record
 */
_bootstrap.Config
/**
 * A boolean option. Default `true`.
 * @type {boolean|undefined}
 */
_bootstrap.Config.prototype.shouldRun
/**
 * A text to return.
 * @type {string|undefined}
 */
_bootstrap.Config.prototype.text

/* typal types/api.xml externs */
/**
 * Bootstrap Class Properties, Elements And Types Definitions For JSX.
 * @typedef {function(!_bootstrap.Config): !Promise<string>}
 */
_bootstrap.bootstrap
