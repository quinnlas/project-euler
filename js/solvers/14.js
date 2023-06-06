function countSeq(n) {
  let current = n
  let steps = 1 // count the last value of 1

  while (current !== 1) {
    if (current % 2 === 0) current /= 2
    else current = 3 * current + 1
    steps++
  }

  return steps
}

module.exports = function () {
  let max = 1
  let maxStart = 1
  for (let i = 2; i < 1000000; i++) {
    const length = countSeq(i)
    if (length > max) {
      max = length
      maxStart = i
    }
  }

  return maxStart
}