const txtToArray = require('../../utils/txtToArray')

const solution = (input) => {
    const instructions = txtToArray(input)
    const cache = {}
    let acc = 0
    let i = 0
    let run = true
    while (run == true) {
        if (cache[i]) {
            run = false
            break;
        } else if (i == instructions.length) {
            return 'Success!'
        } else {
            cache[i] = 1
        }
        let [inst, amt] = instructions[i].split(' ')
        amt = parseInt(amt)
        switch (inst) {
            case 'acc':
                acc += amt
                i++
                break;
            case 'jmp':
                i += amt
                break;
            case 'nop':
                i++;
                break;
        }
    }
    return acc
}

console.log(solution('./input.txt'))