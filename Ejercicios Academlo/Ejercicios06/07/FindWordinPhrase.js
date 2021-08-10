let phrase = 'Hoy es un buen día para programar'
let word = 'programar'

function findWord(phrase, word) {
    const searchWord = phrase.includes(word);
    return searchWord;
}

console.log(findWord(phrase, word));