module.exports = function () {
  return calcLattice(20)
}

function calcLattice(n) {
  const diagonals = 2 * n + 1
  const pascalTriangleRow = pascalTriangle(diagonals)
  return pascalTriangleRow[(pascalTriangleRow.length - 1)/2]
}

function pascalTriangle(level) {
  if (level === 1) return [1]
  const prevRow = pascalTriangle(level - 1)
  const row = [1]
  for (let i = 1; i < prevRow.length; i++) {
    row.push(prevRow[i - 1] + prevRow[i])
  }
  row.push(1)
  return row
}