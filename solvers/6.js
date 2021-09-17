const _ = require('lodash')
const { range } = require('../math/util')

module.exports = function () {
    let sumOfSquares = 0n
    let sum = 0n
    for (let i of range(1n, 101n)) {
        sumOfSquares += i * i
        sum += i
    }
    const squareOfSums = sum * sum
    return squareOfSums - sumOfSquares
}