import { writeFileSync } from 'fs'
import { compileStylesheetsSync } from 'closure-stylesheets'
import path from 'closure-stylesheets-java'

// updated version to include /* alernate */
const { stylesheet, renameMap, status, stderr } = compileStylesheetsSync('bootstrap/bootstrap.css', {
  path,
  // allowUnrecognizedProperties: true,
})

if (status) {
  const s = stderr.replace(/ at line ([\d,]+) column ([\d,]+):/g, (m, l, c) => {
    const ln = l.replace(/[^\d]/, '')
    const cl = c.replace(/[^\d]/, '')
    return `:${ln}:${cl} :`
  })
  console.log(s)
} else {
  const bootstrapMap = Object.keys(renameMap).reduce((acc, key) => {
    acc[key] = true
    return acc
  }, {})
  writeFileSync('bootstrap/map.json', JSON.stringify(bootstrapMap, null, 2))
  const camelMap = {}
  const camelCased = Object.entries(bootstrapMap).reduce((acc, [k, v]) => {
    let replaced = false
    const kk = k.replace(/-(\S)/g, (m, l) => {
      replaced = true
      return l.toUpperCase()
    })
    if (!replaced) return acc
    acc[kk] = true
    camelMap[kk] = k
    return acc
  }, {})
  writeFileSync('bootstrap/bootstrap.json', JSON.stringify({
    ...bootstrapMap, ...camelCased }, null, 2))
  writeFileSync('bootstrap/camel.json', JSON.stringify(camelMap, null, 2))
}
// console.log(renameMap)