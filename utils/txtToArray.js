const txtParse = require('./txtParse.js');

const txtToArray = (fileLocation) => {
    const raw = txtParse(fileLocation);
    return raw.split('\n')
}

module.exports = txtToArray;