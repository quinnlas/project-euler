const { factorial } = require("../math/combo")
const { sumDigits } = require("../math/string")

module.exports = function () {
  return sumDigits(factorial(100n))
}