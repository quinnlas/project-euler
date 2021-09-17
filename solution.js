// run a single solution from a single command with no user input
const solver = require(`./solvers/${process.argv[2]}.js`)

async function main() {
  console.log((await solver()).toString())
}

main().catch(console.error)
