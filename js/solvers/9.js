const _ = require('lodash')

module.exports = function () {
    for (let a of _.range(333)) {
        // c > b > a
        // a + b + c = 1000
        // 1000 - a = b + c
        // b < (1000 - a) / 2
        for (let b of _.range(a + 1, Math.ceil((1000 - a)/2))) {
            const c = 1000 - a - b
            if (a * a + b * b === c * c) {
                console.log(a, b, c)
                return a * b * c
            }
        }
    }
}