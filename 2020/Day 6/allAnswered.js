const txtToArray = require('../../utils/txtToArray')

const allAnswered = (input) => {
    const raw = txtToArray(input)
    let matches = {reset: true}
    let count = 0
    raw.forEach(line => {
        // console.log(line)
        if (matches.reset === true) {
            // console.log('match', line)
            for (let i = 0; i < line.length; i++) {
                matches[line[i]] = 1
            }
            matches.reset = false;
        }
        if (line === '') {
            // console.log(Object.keys(matches))
            count += Object.keys(matches).length 
            matches = { reset: true }
        } else {
            let candidates = Object.keys(matches)
            candidates.forEach(can => {
                if (!line.includes(can)) {
                    delete matches[can]
                }
            })
        }
    })
    return count
}

console.log(allAnswered('./input.txt'))
