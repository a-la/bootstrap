import { EOL } from 'os'
import classes from '../bootstrap/map'
import camel from '../bootstrap/camel'
import { writeFileSync } from 'fs'

const T = (tt) => `import 'preact'

declare global {
  namespace JSX {
    interface HTMLAttributes {
${tt}
    }
  }
}`

const S = (desc, name) => `/**
 * ${desc}
 */
${/-/.test(name) ? `'${name}'` : name}?: boolean`

const props = Object.keys(classes).map(k => {
  const s = S(`Add Bootstrap's \`.${k}\` class to the element.`, k)
  return s
})

// 2. camel cases
const propsCamel = Object.entries(camel).map(([k, v]) => {
  const s = S(`Add Bootstrap's \`.${v}\` class to the element. Alias for \`${v}\` prop.`, k)
  return s
})

props.push(...propsCamel)

let p = props.join(EOL).replace(/^/gm, '    ')
const t = T(p)

writeFileSync('preact/index.d.ts', t)