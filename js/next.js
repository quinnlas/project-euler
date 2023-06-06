const fs = require('fs')
const files = fs.readdirSync('solvers')
const numbers = files
  .map(f => Number(f.slice(0, -3)))
  .filter(n => n === n)
  .sort((a,b)=>a-b)
for (let i = 1;;i++) {
  if (!numbers.includes(i)) {
    console.log(i)
    break
  }
}