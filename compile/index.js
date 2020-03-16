const { _bootstrap } = require('./bootstrap')

/**
 * Bootstrap Class Properties, Elements And Types Definitions For JSX.
 * @param {!_bootstrap.Config} config Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 * @return {Promise<string>}
 */
function bootstrap(config) {
  return _bootstrap(config)
}

module.exports = bootstrap

/* typal types/index.xml namespace */
/**
 * @typedef {_bootstrap.Config} Config `＠record` Options for the program.
 * @typedef {Object} _bootstrap.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
