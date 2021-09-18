// if array values are not unique, combinations will not be either
// startIndex tells the function where to start picking combinations and should probably only be used in recursion

const { range } = require("lodash")

// choose should be a Number
exports.combinations = function* (array, choose, startIndex = 0) {
  if (choose === 0) {
    // you should be able to replace these two lines with return [] but that doesn't seem to work
    yield []
    return
  }
  for (let i = startIndex; i <= array.length - choose; i++) {
    if (choose === 1) yield [array[i]]
    else {
      const innerGen = exports.combinations(array, choose - 1, i + 1)
      for (let innerCombo of innerGen) yield [array[i], ...innerCombo]
    }
  }
}

// gives the combinations with all possible 'choose' values (0 - n inclusive)
exports.allCombinations = function* (array) {
  for (let i of range(array.length + 1)) {
    yield* exports.combinations(array, i)
  }
}

exports.factorial = function(n) {
  if (n === 0n) return 1n
  return n * exports.factorial(n - 1n)
}