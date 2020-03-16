import { c } from 'erte'

/**
 * @type {_bootstrap.bootstrap}
 */
export default async function bootstrap(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return ''
  console.log('@a-la/bootstrap called with %s', c(text, 'yellow'))
  return text
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').bootstrap} _bootstrap.bootstrap
 */
