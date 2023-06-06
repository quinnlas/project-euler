// a generator that continues until the predicate, when called with the would-be next value, returns false
// can take a generator instance OR function
exports.genWhile = function* (gen, predicate) {
  const genInstance = typeof gen === 'function' ? gen() : gen

  while (true) {
    const { value, done } = genInstance.next()
    if (!predicate(value)) break
    yield value
    if (done) break
  }
}

// it's python
// this uses bigint but lodash provides one for number
exports.range = function (start, stop, step) {
  let _start = 0n, _stop, _step = 1n
  switch (arguments.length) {
    case 1:
      [_stop] = arguments
      break
    case 2:
      [_start, _stop] = arguments
      break
    case 3:
      [_start, _stop, _step] = arguments
  }

  return (function* () {
    let v = _start

    while (v < _stop) {
      yield v
      v += _step
    }
  })()
}

// a wrapper for synchronous integer binary searches with BigInt indices
// callback is provided (value, min, max) that needs to return with a number
// if the number is negative, search takes the value as the new min
// positive vice versa
// 0 is done, and value will be returned
// if 0 is never returned from the callback, this function will return the lower bound
exports.binarySearch = function (min, max, callback) {
  let prev = min - 1n
  let value
  while (true) {
    value = (min + max) / 2n

    // true answer is decimal but this is a bounding integer
    // not sure why but it's always the lower bound
    if (value === prev) return value

    const result = callback(value, min, max)
    if (result < 0n) {
      // too low
      min = value
    } else if (result > 0n) {
      // too high
      max = value
    } else return value
    prev = value
  }
}