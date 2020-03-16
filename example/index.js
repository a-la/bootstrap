import bootstrap from '../src'

(async () => {
  const res = await bootstrap({
    text: 'example',
  })
  console.log(res)
})()