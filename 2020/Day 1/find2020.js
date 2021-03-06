const textToArray = require('../../utils/txtToArray.js');

const find2020 = (input) => {
    const data = textToArray(input).map(num => parseInt(num));
    const dataAsc = [...data].sort((a, b) => a - b)
    const dataDsc = [...data].sort((a, b) => b - a)
    for (let i = 0; i < data.length - 1; i++) {
        let curr = dataDsc[i]
        for (let j = 0; j < data.length - 1; j++) {
            if (curr + dataAsc[j] == 2020) {
                return [curr, dataAsc[j], curr * dataAsc[j]]
            } else if (curr + dataAsc[j] > 2020) {
                break;
            }
        }
    }
}

console.log(find2020('./input.txt'));