import bootstrap from '../bootstrap/map'

const [,,arg] = process.argv
const [one, two, three, four, five, ...rest] = Object.keys(bootstrap).sort()

const A = arg ? [one, two, three, four, five, '...'] : rest

A.forEach(a => console.log(a))