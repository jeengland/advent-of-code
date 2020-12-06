const txtToArray = require('../../utils/txtToArray.js')

const validate = (input) => {
    const raw = txtToArray(input);
    let index = 0;
    const sorted = []
    let valid = 0
    let validDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    let validNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let validColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
    sorted[0] = ''
    raw.forEach(line => {
        if (line !== '') {
            sorted[index] += line + ' '
        } else {
            sorted[index] = sorted[index].slice(0, -1)
            index += 1
            sorted[index] = ''
        }
    })
    const objects = sorted.map(line => {
        const obj = {}
        const split = line.split(' ')
        split.forEach(prop => {
            const [key, val] = prop.split(':')
            obj[key] = val
        })
        return obj
    })
    objects.forEach(obj => {
        if ('byr' in obj && 'iyr' in obj && 'eyr' in obj && 'hgt' in obj && 'hcl' in obj && 'ecl' in obj && 'pid' in obj) {
            let checks = 0
            const byr = parseInt(obj['byr'])
            if (byr >= 1920 && byr <= 2002) {
                checks += 1
            }
            const iyr = parseInt(obj['iyr'])
            if (iyr >= 2010 && iyr <= 2020) {
                checks += 1
            }
            const eyr = parseInt(obj['eyr'])
            if (eyr >= 2020 && eyr <= 2030) {
                checks += 1
            }
            const hgt = obj['hgt']
            if (hgt.length === 5) {
                if (hgt.slice(3) == 'cm') {
                    const ht = parseInt(hgt.slice(0, 3))
                    if (ht >= 150 && ht <= 193) {
                        checks += 1
                    }
                }
            } else if (hgt.length === 4) {
                if (hgt.slice(2) == 'in') {
                    const ht = parseInt(hgt.slice(0, 2))
                    if (ht >= 59 && ht <= 76) {
                        checks += 1
                    }
                }
            }
            const hcl = obj['hcl']
            if (hcl[0] === '#') {
                const digits = hcl.slice(1).split('')
                if (digits.length === 6) {
                    let correct = 0
                    digits.forEach(digit => {
                        if (validDigits.includes(digit)) {
                            correct += 1
                        }
                    })
                    if (correct === 6) {
                        checks += 1
                    }
                }
            }
            const ecl = obj['ecl']
            if (validColors.includes(ecl)) {
                checks += 1
            }
            const pid = obj['pid']
            if (pid.length === 9) {
                const correct = 0
                for (let i = 0; i < pid.length; i++) {
                    if (validNums.includes(pid[i])) {
                        correct += 1
                    }
                }
                if (correct == 9) {
                    checks += 1
                }
            }
            if (checks === 7) {
                valid += 1
            }
        }
    })
    return valid
}

console.log(validate('./input.txt'))