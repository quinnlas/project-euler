const { fibGen } = require("../math/fib")
const { genWhile } = require("../math/util")

module.exports = function () {
  let sum = 0n
  for (let n of genWhile(fibGen, v => v <= 4000000n)) {
    if (n % 2n === 0n) sum += n
  }
  return sum
}