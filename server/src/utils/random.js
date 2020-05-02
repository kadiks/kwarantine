const mots = require('../../data/dict.json');
const nomCommuns = require('../../data/mots.json');
const removeDiacritics = require('diacritics').remove;

function randinc(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(xs) {
  return xs[randinc(0, xs.length - 1)];
}

function validateWord(word) {
  return mots.hasOwnProperty(word.toLowerCase());
}

function pickDictWord(nbLetters = 7) {
  // console.log('mots', mots);
  const selectedWords = Object.keys(nomCommuns)
    .filter(w => w.length <= nbLetters && w.length >= 3);
  const selectedWordIndex = randinc(0, selectedWords.length - 1);
  const selectedWord = selectedWords[selectedWordIndex];
  const cleanWord = removeDiacritics(selectedWord);

  return cleanWord.toUpperCase();
}

const letterFrequencies = {
  consonants: {
    B: 97,
    C: 315,
    D: 373,
    F: 112,
    G: 97,
    H: 85,
    J: 45,
    K: 2,
    L: 569,
    M: 287,
    N: 712,
    P: 28,
    Q: 121,
    R: 664,
    S: 814,
    T: 722,
    V: 164,
    W: 3,
    X: 41,
    Z: 15,
  },
  vowels: {
    A: 815,
    E: 139,
    I: 731,
    O: 528,
    U: 638,
    Y: 28
  }
};

/**
 * Randomly selects a key from an object
 * The associated values are the key's weight
 */
function randKey(obj){
  const sumWeights = Object.values(obj).reduce((x, y) => x + y)
  let target = randinc(0, sumWeights-1)
  const pairs = Object.entries(obj)
  for(let i = 0; i < pairs.length; i++){
    if(target < pairs[i][1]){
      return pairs[i][0]
    }
    target -= pairs[i][1];
  }
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
  randinc,
  pick,
  validateWord,
  pickDictWord,
  randLetters
};
