const fs = require('fs');
const inputTxtFile = process.argv[2];

const boundary = '==========';

const clippingsData = openTxtFile(inputTxtFile);
const clippingsArray = clippingsData.split(boundary);

function openTxtFile(txtFile) {
    try {
        fileData = fs.readFileSync(txtFile, 'utf-8');
        return fileData;
    } catch (err) {
        throw err;
    }
}

module.exports = clippingsArray;
