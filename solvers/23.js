const { sortedIndex } = require("lodash")
const { sumReduce } = require("../math/arith")
const { combinations } = require("../math/combo")
const { properDivisors } = require("../math/prime")
const { range } = require("../math/util")

module.exports = function () {
  // generate abundant numbers < 28123
  const abundantNumbers = []
  for (let i of range(12n, 28123n)) {
    if (isAbundant(i)) abundantNumbers.push(i)
  }
  // console.log(abundantNumbers)

  // then calculate sums of them (keep the array unique)
  // optimize: this is pretty slow, faster than using combinations function would be to generate the combinations with the knowledge that their sum should be <= 28123, but the sortedIndex lookup is probably slow too
  const sumsOfTwo = []
  for (let combo of combinations(abundantNumbers, 2)) {
    handleSumOfTwo(sumsOfTwo, combo[0] + combo[1])
  }
  // combinations will not select the same one twice
  for (let abundant of abundantNumbers) {
    handleSumOfTwo(sumsOfTwo, abundant * 2n)
  }
  // console.log(sumsOfTwo)

  // sum those sums and then subtract that or whatever
  const total = 28123n * (28123n + 1n) / 2n
  const sumOfSums = sumsOfTwo.reduce(sumReduce)
  return total-sumOfSums
}

function handleSumOfTwo(sumsOfTwo, sum) {
  if (sum > 28123) return
  const index = sortedIndex(sumsOfTwo, sum)
  if (sumsOfTwo[index] === sum) return
  sumsOfTwo.splice(index, 0, sum)
}

function isAbundant(n) {
  return properDivisors(n).reduce(sumReduce, 0n) > n
}