const parse = require('./parse');

// fisher-yates shuffle algorithm
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

function getRandomHighlights(inputFile, numOfRandomElements = 3 ) {
    const arr = parse(inputFile);
    let shuffledHighlights = shuffle(arr);
    let randomHighlights = shuffledHighlights.slice(0, numOfRandomElements);

    let newArr = randomHighlights.map((item) => {
        clipping = item.split('\r\n').filter(e => e.length);
        title = clipping[0];
        highlight = clipping[2];
        return (
            `${highlight} - ${title} \n`
        )
    })

    newArr.forEach((highlight) => {
        console.log(highlight)
    })
}


module.exports = getRandomHighlights;