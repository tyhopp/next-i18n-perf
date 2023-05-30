const path = require('path')
const fs = require('fs')

const seed = require('../src/app/seed.json')

const refs = []

for (const key in seed) {
  refs.push(`<p>{catalog['${key}']}</p>`)
}

const component = `
export default async function Component() {
  const catalog = await import('../seed.json')

  return (
    <>
      ${refs.join('\n')}
    </>
  )
}
`

fs.writeFileSync(path.join(__dirname, '..', 'src', 'app', 'components', 'component.tsx'), component)