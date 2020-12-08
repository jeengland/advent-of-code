const txtParse = require('./txtParse.js');

const txtToArray = (fileLocation, splitter='\n') => {
    const raw = txtParse(fileLocation);
    return raw.split(splitter)
}

module.exports = txtToArray;