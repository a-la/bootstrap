import { equal } from '@zoroaster/assert'
import Context from '../context'
import bootstrap from '../../src'

/** @type {TestSuite} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof bootstrap, 'function')
  },
  async 'calls package without error'() {
    await bootstrap()
  },
  async 'gets a link to the fixture'({ fixture, readFile }) {
    const path = fixture`test.txt`
    const text = readFile(path)
    const res = await bootstrap({
      text,
    })
    equal(res, text)
  },
}

/**
 * @typedef {import('../context').TestSuite} TestSuite
 */

export default T