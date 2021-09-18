const { triangleMaxPathSum } = require("../math/misc")
const { readFileSync } = require('fs')

module.exports = () => triangleMaxPathSum(readFileSync('./file-input/p067_triangle.txt', 'utf-8'))