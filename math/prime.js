const _ = require('lodash')

let runs = 0
exports.primeGen = function* () {
  if (runs) console.log('WARNING: primeGen is being ran again. This should probably only run once.')
  runs++

  const list = []

  // keep track of the highest prime to check by squaring
  // this way we only check the primes that could be relevant while also not having to take the square root of every test number
  let highestDivisorIndex = -1
  let highestDivisorSquared = 2 // need to put off calculating until there is data in the list
  for(let i = 2n;;i++) {
    // if divisible by some number in the list, continue

    // first set up highest divisor
    if (i > highestDivisorSquared) {
      highestDivisorIndex++
      highestDivisorSquared = list[highestDivisorIndex] ** 2n
    }

    let foundDivisor = false
    for (let divisorIndex = 0; divisorIndex <= highestDivisorIndex; divisorIndex++) {
      if (i % list[divisorIndex] === 0n) {
        foundDivisor = true
        break
      }
    }
    if (foundDivisor) continue

    list.push(i)
    yield i
  }
}

exports.factorize = function (n) {
  const factors = []
  let remaining = n
  const primes = exports.primeGen()
  while (remaining > 1n) {
    const divisor = primes.next().value

    // divide remaining by divisor until it does not work anymore
    while (remaining % divisor === 0n) {
      remaining /= divisor
      factors.push(divisor)
    }
  }

  return factors
}

// factorizes but combines the repeated factors and tracks the power
// good for gcf and lcm problems
// powerFactorize(36) ==> [{ value: 2, power: 2 }, { value: 3, power: 2 }]
// like 36 = 2^2 + 3^2
exports.powerFactorize = function (n) {
  const flatFacs = exports.factorize(n)

  // optimize: we know they are in order
  return _.map(_.groupBy(flatFacs), arr => ({ value: arr[0], power: BigInt(arr.length) }))
}

// accepts array or spread
exports.lcm = function (...nums) {
  const arr = Array.isArray(nums[0]) ? nums[0] : nums

  // optimize: this will run primeGen again from the beginning for each num, the primes aren't going to change so we should usually only run it once per solution
  const factorizations = arr.map(exports.powerFactorize)
  const combinedFactorization = []

  // optimize: this is cubic or something bad
  factorizations.forEach(factorization => {
    // iterate through factors in factorization, increasing the power in combinedFactorization to match
    factorization.forEach(factor => {
      const existing = combinedFactorization.find(f => f.value === factor.value)
      if (!existing) combinedFactorization.push({ value: factor.value, power: factor.power })
      else if (existing.power < factor.power) existing.power = factor.power
    })
  })

  // multiply out combinedFactorization
  return combinedFactorization.reduce((product, factor) => product * (factor.value ** factor.power), 1n)
}