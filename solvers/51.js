// note first digit can't be replaced with 0
// assuming you can't replace all because that would give you too big of a "family"

const { isPrime } = require("../math/prime")

const desiredFamilySize = 8

module.exports = function () {
  // for each number of digits
  for (let digits = 2;;digits++) {
    let min = 2n ** 100n
    for (let starNumber of generateStarNumbers(digits)) {
      // skip ones that can not be prime
      if (['0', '2', '4', '5', '6', '8'].includes(starNumber[starNumber.length - 1])) continue
      const family = getPrimes(starNumber)
      if (family.length === desiredFamilySize) { // stopHavingKids()
        const runt = family.reduce((a,b) => a < b ? a : b)
        if (runt < min) {
          console.log(family)
          min = runt
        }
      }
    }

    if (min !== 2n ** 100n) return min
  }
}

function getPrimes(starNumber) {
  const primes = []
  for (let digit of '0123456789') {
    if (digit === '0' && starNumber[0] === '*') continue
    const strValue = starNumber.replace(/\*/g, digit)
    const num = BigInt(strValue)
    if (isPrime(num)) primes.push(num)
  }
  return primes
}

// takes the number of digits eg 3
// and generates the possible "star numbers"
// eg *0*, *1*, *2*...'
// does not generate star numbers with first digit 0, all stars, or no stars
function* generateStarNumbers(digits) {
  for (let starNumber of simpleGenerateStarNumbers(digits)) {
    if (starNumber[0] === '0') continue
    if (starNumber.search(/\*/) === -1) continue
    if (starNumber.search(/[0-9]/) === -1) continue
    yield starNumber
  }
}

// doesn't check if star number is valid
function* simpleGenerateStarNumbers(digits) {
  for (let digit of '0123456789*') {
    if (digits === 1) yield digit
    else for (let rest of simpleGenerateStarNumbers(digits - 1)) yield digit + rest
  }
}