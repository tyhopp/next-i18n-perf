const path = require('path')
const fs = require('fs')

const stub = Array(1000).fill(0)

const page = `
import Component from "../components/component"

export default function Page() {
  return (
    <main>
      {/* @ts-expect-error */}
      <Component />
    </main>
  )
}
`

for (i = 0; i < stub.length; i++) {
  fs.mkdirSync(path.join(__dirname, '..', 'src', 'app', `${i}`))
  fs.writeFileSync(path.join(__dirname, '..', 'src', 'app', `${i}`, 'page.tsx'), page)
}