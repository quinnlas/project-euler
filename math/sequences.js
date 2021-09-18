// misc sequences

exports.triangleNumberGen = function* () {
    for(let natty = 1n, triangle = 0n;;natty++) {
        triangle += natty
        yield triangle
    }
}