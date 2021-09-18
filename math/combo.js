// if array values are not unique, combinations will not be either
// startIndex tells the function where to start picking combinations and should probably only be used in recursion
exports.combinations = function* (array, choose, startIndex = 0) {
  if (choose === 0) return []
  for (let i = startIndex; i <= array.length - choose; i++) {
    if (choose === 1) yield [array[i]]
    else {
      const innerGen = exports.combinations(array, choose - 1, i + 1)
      for (let innerCombo of innerGen) yield [array[i], ...innerCombo]
    }
  }
}

exports.factorial = function(n) {
  if (n === 0n) return 1n
  return n * exports.factorial(n - 1n)
}