exports.multiply = function (...values) {
    const arr = Array.isArray(values[0]) ? values[0] : values
    return arr.reduce((a, b) => a * b, 1n)
}

exports.add = function (...values) {
    const arr = Array.isArray(values[0]) ? values[0] : values
    return arr.reduce((a, b) => a + b, 0n)
}