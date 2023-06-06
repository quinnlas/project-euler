const { primeGen } = require("../math/prime")
const { genWhile } = require("../math/util")

// looks simple but it forced me to optimize the primeGen function to get under 1 min
module.exports = function () {
    let sum = 0n
    for (let p of genWhile(primeGen, v => v < 2000000n)) {
        sum += p
    }
    return sum
}