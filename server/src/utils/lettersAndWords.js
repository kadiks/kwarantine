const letterFrequencies = require('./letterFrequencies.json');
const mots = require('../../data/dict.json');
const nomCommuns = require('../../data/mots.json');
const removeDiacritics = require('diacritics').remove;
const { randinc, randKey, pick } = require('./random.js');


function validateWord(word) {
  return mots.hasOwnProperty(word.toLowerCase());
}

function pickDictWord(nbLetters = 7) {
  const selectedWords = Object.keys(nomCommuns)
    .filter(w => w.length <= nbLetters && w.length >= 3);
  return removeDiacritics(pick(selectedWords)).toUpperCase();
}

/*
 * Return an array of numLetters letters
 * With at least 2 and at most 7 vowels
 * Letters selected according to weights in
 * letterFrequencies object
 */
function randLetters(numLetters){
  const res = new Array(numLetters)
  const numV = randinc(2, 7)
  const v = letterFrequencies.vowels
  const c = letterFrequencies.consonants
  for(let i = 0; i < numLetters; i++){
    res[i] = randKey(i < numV ? v : c)
  }
  return res;
}

module.exports = {
  validateWord,
  pickDictWord,
  randLetters
}
