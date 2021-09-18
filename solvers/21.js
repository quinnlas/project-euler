const { add } = require("../math/arith");
const { properDivisors } = require("../math/prime");
const { range } = require("../math/util");

function d(n) {
  const divisors = properDivisors(n)
  return add(divisors)
}

function isAmicable(a) {
  const b = d(a)
  if ([0n, a].includes(b)) return false
  return d(b) === a
}

module.exports = function () {
  let sum = 0n
  for (let i of range(1n, 10000n)) {
    if (isAmicable(i)) sum += i
  }

  return sum
}