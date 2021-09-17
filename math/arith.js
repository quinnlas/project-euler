exports.multiply = function (...values) {
    const arr = Array.isArray(values[0]) ? values[0] : values
    return arr.reduce((a, b) => a * b)
}