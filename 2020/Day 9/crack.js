const txtToArray = require('../../utils/txtToArray')

const myKey = 1721308972
const beg = 548
const end = 564

const crack = (input, key) => {
    const code = txtToArray(input).map(num => parseInt(num))
    // code.forEach((num, i) => {
    //     let total = num
    //     for (let j = i + 1; j < code.length; j++) {
    //         // console.log(total)
    //         total += code[j];
    //         if (total == key) {
    //             console.log([num, code[j], j, i])
    //         } else if (total > key) {
    //             break;
    //         }
    //     }
    // })
    // return 'error'
    const slice = code.slice(beg, end + 1)
    console.log(slice)
    const values = [Math.min(...slice), Math.max(...slice)]
    return [values, values[0] + values[1]]
}

console.log(crack('./input.txt', myKey))