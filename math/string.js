exports.isPalindrome = function (n) {
  const str = String(n)
  const reverse = str.split('').reverse().join('')
  return str === reverse
}