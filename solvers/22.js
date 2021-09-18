const { readFileSync } = require('fs')

module.exports = function () {
  const names = eval(`[${readFileSync('./file-input/p022_names.txt')}]`).sort()
  return names.reduce((sum, name, index) => {
    const alphaScore = [...name].map(l => l.codePointAt(0) - 64).reduce((a,b)=>a+b)
    return sum + (alphaScore * (index + 1))
  }, 0)
}