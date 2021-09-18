const { range } = require("lodash")

// only guaranteed to work for 1-1000
// accepts numbers or strings
// https://en.wikipedia.org/wiki/English_numerals
function numberWord (n) {
  const str = String(n)
  const num = Number(n)
  if (str === '1000') return 'one thousand'
  if (str.length === 3) {
    const hundreds = `${numberWord(str[0])} hundred`
    const lastTwo = str.slice(1)
    const after = lastTwo === '00' ? '' : ` and ${numberWord(Number(lastTwo))}` // convert lastTwo to num in case single digit
    return hundreds + after
  }
  if (str.length === 2) {
    const teens = 'ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen'.split(',')
    const tens = 'twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety'.split(',')
    if (num < 20) return teens[num - 10]
    const tensName = tens[str[0] - 2]
    const last = str[1]
    const after = last === '0' ? '' : `-${numberWord(last)}`
    return tensName + after
  }
  return 'one,two,three,four,five,six,seven,eight,nine'.split(',')[num - 1]
}

module.exports = function () {
  let sum = 0
  for(let i of range(1, 1001)) {
    const word = numberWord(i)
    sum += word.replace(/[^a-z]/g, '').length // only count letters
  }
  return sum
}