const fs = require('fs');

const textParse = (fileLocation) => {
    try {
        const data = fs.readFileSync(fileLocation, 'utf8')
        return data;
    } catch (error) {
        console.error(error)
    }
};

module.exports = textParse;