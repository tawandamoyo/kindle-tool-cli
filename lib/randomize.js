const clippingsArray = require('./parse');

let randomHighlights = getRandom(clippingsArray);

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // while there remains elements to shuffle
    while (currentIndex != 0) {
        // Pick an element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // swap with current element
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array
}

function getRandom(arr, numOfRandomElements) {
    let shuffledArr = shuffle(arr);
    let randomQuotes = shuffledArr.slice(0, numOfRandomElements);
    return randomQuotes;
}

module.exports = getRandom;
