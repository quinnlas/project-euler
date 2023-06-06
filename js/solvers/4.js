const { isPalindrome } = require("../math/string")

module.exports = function () {
  let max = 0
  for (let m = 100; m < 1000; m++) {
    // start n at m to avoid double checking
    for (let n = m; n < 1000; n++) {
      const product = m * n
      if (product > max && isPalindrome(product)) max = product
    }
  }
  return max
}