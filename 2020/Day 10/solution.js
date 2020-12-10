const txtToArray = require('../../utils/txtToArray.js')

const solution = (input) => {
    const list = txtToArray(input, '\r\n').sort((a, b) => a - b).map((num) => parseInt(num))
    const dict = {'1': 0, '2': 0, '3': 0}
    list.unshift(0)
    list.push(list[list.length - 1] + 3)
    console.log(list)
    list.forEach((ad, i) => {
        if (i < list.length - 1) {
            const diff = list[i + 1] - ad
            dict[diff] = dict[diff] + 1
        }
    })
    return dict
}

console.log(solution('./input.txt'))