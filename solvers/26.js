const { factorize } = require("../math/prime")

module.exports = function () {
  let maxDigits = 0
  let maxD = 0n
  for (let d = 2n; d < 1000n; d++) {
    const digits = calcDigits(d)
    if (digits > maxDigits) {
      maxD = d
      maxDigits = digits
    }
  }
  return maxD
}

// essentially do long division until a pattern is noticed
// return value is Number
function calcDigits(d) {
  // test for clean division
  const dFactors = factorize(d)
  if (dFactors.every(f => f === 2n || f === 5n)) return 0

  let dividend = 10n

  // this is the remainders without trailing zeros
  // once remainders has a repeat, that tells us how long the cycle is
  const remainders = [1n]

  while(true) {
    const intQuo = dividend / d

    // dividend is too low
    if (intQuo === 0n) {
      dividend *= 10n
      continue
    }

    dividend = dividend - (intQuo * d)

    // take the trailing zeros off dividend and add it to the remainders
    let nextRemainder = dividend
    while (nextRemainder % 10n === 0n) nextRemainder /= 10n

    const remainderIndex = remainders.indexOf(nextRemainder)
    if (remainderIndex !== -1) return remainders.length - remainderIndex
    remainders.push(nextRemainder)
  }
}