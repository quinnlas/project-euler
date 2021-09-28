const { fibGen } = require("../math/fib")

module.exports = function () {
  let index = 0
  for (let num of fibGen(1n, 1n)) {
    index++
    if (num.toString().length === 1000) return index
  }
}