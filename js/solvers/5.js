const { lcm } = require("../math/prime")
const { range } = require("../math/util")

module.exports = function () {
  // easily solved with pen/paper
  return lcm(...range(1n, 21n))
}