const spaceText = require('./spaceText.js');

const isValidPass = (input) => {
    const passList = spaceText(input);
    passList.pop()
    let record = 0;
    passList.forEach(pass => {
        let bounds = pass[0].split('-')
        let req = pass[1][0]
        let first = (pass[2][bounds[0] - 1] == req)
        let second = (pass[2][bounds[1] - 1] == req)
        if ((first && !second) || (!first && second)) {
            record += 1
        }
    })
    return record
}

console.log(isValidPass('./input.txt'))