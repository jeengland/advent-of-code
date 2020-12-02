const txtToArray = require('../../utils/txtToArray.js');

const spaceText = (address, divider=' ') => {
    const array = txtToArray('./input.txt');
    return array.map(line => line.split(divider))
}

module.exports = spaceText