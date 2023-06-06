exports.fibGen = function* (first = 1n, second = 2n) {
  let v1 = first
  let v2 = second

  while (true) {
    yield v1
    const v3 = v1 + v2
    v1 = v2
    v2 = v3
  }
}