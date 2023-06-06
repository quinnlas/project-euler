const { allFactors } = require("../math/prime")
const { triangleNumberGen } = require("../math/sequences")

module.exports = function () {
  for(let n of triangleNumberGen()) {
    if (allFactors(n).length > 500) return n
  }
}