exports.isPalindrome = function (n) {
  const str = String(n)
  const reverse = str.split('').reverse().join('')
  return str === reverse
}

// see problem 16 for a dumb way to do this
exports.sumDigits = function(n) {
  return [...String(n)].map(Number).reduce((a, b) => a + b)
}