const txtToArray = require('../../utils/txtToArray')

const parser = (instructions) => {
    const cache = {}
    let acc = 0
    let i = 0
    let run = true
    while (run == true) {
        if (cache[i]) {
            run = false
            break;
        } else if (i == instructions.length) {
            return ['Success', acc]
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

const solution = (input) => {
    const base = txtToArray(input)
    base.forEach((line, i) => {
        let [inst, amt] = line.split(' ')
        if (inst == 'jmp') {
            let copy = [...base]
            copy[i] = `nop ${amt}`
            const result = parser(copy)
            console.log(result)
        } else if (inst == 'nop') {
            let copy = [...base]
            copy[i] = `jmp ${amt}`
            const result = parser(copy)
            console.log(result)
        }
    })
}

console.log(solution('./input.txt'))