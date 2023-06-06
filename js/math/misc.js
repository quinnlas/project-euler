const { forEachRight } = require("lodash")

// for problems 18/67
exports.triangleMaxPathSum = function(triangle) {
  // parse text into array
  const rows = triangle.split('\n').map(line => line.split(' ').map(Number))

  forEachRight(rows, (rowBelow, rowIndex) => {
    if (rowIndex === 0) return
    rows[rowIndex - 1] = rows[rowIndex - 1].map((n, colIndex) => n + Math.max(rowBelow[colIndex], rowBelow[colIndex + 1]))
  })

  return rows[0][0]
}