const spaceText = require('./spaceText.js');

const isValidPass = (input) => {
    const passList = spaceText(input);
    passList.pop()
    let record = 0;
    passList.forEach(pass => {
        let bounds = pass[0].split('-')
        let req = pass[1][0]
        let instances = (pass[2].match(new RegExp(req, 'g')) || []).length
        if (instances >= bounds[0] && instances <= bounds[1]) {
            record += 1
        }
    })
    return record
}

console.log(isValidPass('./input.txt'))