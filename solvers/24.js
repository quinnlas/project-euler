// another one that is easily done by hand
// you could write an algorithm for the "by hand" method that would be faster

module.exports = function () {
  const genInstance = gen()
  for (let i = 1; i <= 999999; i++) genInstance.next()
  return genInstance.next().value
}

// generate perms in lexographic order
const digits = '0123456789'.split('')
function* gen(str = '') {
  const remainingDigits = digits.filter(d => !str.includes(d))

  if (remainingDigits.length === 1) {
    yield str + remainingDigits[0]
    return
  }
  for (let nextDigit of remainingDigits) {
    yield* gen(str + nextDigit)
  }
}