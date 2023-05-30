const path = require('path')
const fs = require('fs')

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const stub = Array(1000).fill(0)

const seed = {}

for (i = 0; i < stub.length; i++) {
  seed[`${i}`] = loremIpsum
}

fs.writeFileSync(path.join(__dirname, '..', 'src', 'app', 'seed.json'), JSON.stringify(seed, null, 2))