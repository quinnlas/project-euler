const { factorize } = require("../math/prime")

module.exports = function () {
  return factorize(600851475143n).slice(-1)[0]
}