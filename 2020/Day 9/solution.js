const txtToArray = require('../../utils/txtToArray.js')

const solution = (input) => {
    const code = txtToArray(input)
    code.pop()
    for (let i = 25; i < code.length - 25; i++) {
        const beg = -25 + i;
        const end = 0 + i;
        const factors = code.slice(beg, end)
        // console.log(factors)
        const check = code[i]
        let matched = false
        for (let j = 0; j < factors.length; j++) {
            for (let k = j + 1; k < factors.length; k++) {
                // console.log(parseInt(factors[j]) + parseInt(factors[k]))
                if (parseInt(factors[j]) + parseInt(factors[k]) == parseInt(check)) {
                    matched = true
                }
            }
        }
        if (!matched) {
            return check
        }
    }
}

console.log(solution('./input.txt'))