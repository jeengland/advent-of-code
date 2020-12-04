const txtToArray = require('../../utils/txtToArray.js')

const validate = (input) => {
    const raw = txtToArray(input);
    let index = 0;
    const sorted = []
    let valid = 0
    sorted[0] = ''
    raw.forEach(line => {
        if (line !== '') {
            sorted[index] += line
        } else {
            index += 1
            sorted[index] = ''
        }
    })
    sorted.forEach(line => {
        if (line.includes('byr:') && line.includes('iyr:') && line.includes('eyr:') && line.includes('hgt:') && line.includes('hcl:') && line.includes('ecl:') && line.includes('pid:')) {
            valid += 1
        }
    })
    return valid
}

console.log(validate('./input.txt'))