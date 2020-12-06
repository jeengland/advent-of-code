const txtToArray = require('../../utils/txtToArray')

const answerSum = (input) => {
    const raw = txtToArray(input)
    let matches = {}
    let count = 0
    raw.forEach(line => {
        if (line === '') {
            console.log('reset')
            matches = {}
        } else {
            for (let i = 0; i < line.length; i++) {
                if (!matches[line[i]]) {
                    count += 1
                    matches[line[i]] = true
                }
            }
        }
    })
    return count
}

console.log(answerSum('./input.txt'))