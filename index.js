const argProblemNumber = process.argv[2]
if (argProblemNumber) runSolution(argProblemNumber)
else {
  const readline = require('readline')

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Which problem would you like to solve? ', async problemNumber => {
    runSolution(problemNumber).then(rl.close)
  })
}

async function runSolution(solutionNum) {
  try {
    const solver = require(`./solvers/${solutionNum.trim()}.js`)
    const timeStart = process.hrtime.bigint()
    const answer = await solver()
    const timeEnd = process.hrtime.bigint()
    console.log(`Answer calculated: ${answer}`)
    const nanos = Number(timeEnd - timeStart)
    const seconds = nanos / 1000000000
    console.log(`Time taken: ${seconds.toString()} seconds`)
    if (seconds > 60) console.log('Solution took too long! Every problem can be solved in under a minute.')
  } catch (e) {
    console.error(e)
  }
}