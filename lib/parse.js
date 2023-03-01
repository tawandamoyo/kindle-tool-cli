const fs = require('fs');

function openTxtFile(txtFile) {
    const boundary = '==========';

    try {
        fileData = fs.readFileSync(txtFile, 'utf-8');
        const clippingsArray = fileData.split(boundary);
        return clippingsArray;
    } catch (err) {
        throw err;
    }
}

module.exports = openTxtFile;
