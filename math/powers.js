const { binarySearch } = require("./util")

// provides the lower of the integers bounding the sqrt of a bigint
exports.integerSqrt = function (n) {
    return binarySearch(1n, n, (value, min, max) => {
        const square = value * value
        return square - n
    })
}