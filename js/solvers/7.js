const { primeGen } = require("../math/prime");
const { range } = require("../math/util");

module.exports = function () {
    const gen = primeGen()
    for (let i of range(10000n)) {
        gen.next()
    }
    return gen.next().value
}