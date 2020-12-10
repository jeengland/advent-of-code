const txtToArray = require('../../utils/txtToArray.js')

const solution = (input) => {
    let list = txtToArray(input, '\r\n').map((num) => parseInt(num))
    list.push(0)
    list.push(Math.max(...list) + 3)
    list = list.sort((a, b) => a - b)

    let perms = []
    for (let i = 0; i < list.length; i++) {
        perms.push(0)
    }
    perms[0] = 1
    list.forEach((num, i) => {
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] - num > 3) {
                break;
            } else {
                perms[j] += perms[i]
            }
        }
    })
    return perms[perms.length - 1]
}

console.log(solution('./input.txt'))