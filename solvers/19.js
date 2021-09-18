module.exports = () => {
  const date = new Date(-2177452800000) // 1/1/1901 midnight UTC
  const end = new Date(978000000000) // 12/28/2000
  let count = 0
  while (date < end) {
    if (date.getUTCDay() === 0) count++
    date.setUTCMonth(date.getUTCMonth() + 1)
  }

  return count
}