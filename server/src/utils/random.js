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
  A: 815,
  B: 97,
  C: 315,
  D: 373,
  E: 139,
  F: 112,
  G: 97,
  H: 85,
  I: 731,
  J: 45,
  K: 2,
  L: 569,
  M: 287,
  N: 712,
  O: 528,
  P: 28,
  Q: 121,
  R: 664,
  S: 814,
  T: 722,
  U: 638,
  V: 164,
  W: 3,
  X: 41,
  Y: 28,
  Z: 15,
};

/**
 * Generates a random letter
 *
 */
function randLetter() {
  const sumWeights = Object.values(letterFrequencies).reduce((x, y) => x + y);
  let target = randinc(0, sumWeights);
  const pairs = Object.entries(letterFrequencies);
  for (let i = 0; i < pairs.length; i++) {
    // console.log(target, pairs[i][1]);
    if (target < pairs[i][1]) {
      return pairs[i][0];
    }
    target -= pairs[i][1];
  }
  console.log('should not happen') // it does, however
}

function randLetters(numLetters){
  const vowels = ['A', 'E', 'I', 'O', 'U', 'Y']
  const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J',
                      'K', 'L', 'M', 'N', 'P', 'Q', 'R',
                      'S', 'T', 'V', 'X', 'Z']
  const res = new Array(numLetters)
  const numV = randinc(2, 7)
  for(let i = 0; i < numLetters; i++){
    res[i] = i < numV ? pick(vowels) : pick(consonants)
  }
  return res;
}


module.exports = {
  randinc,
  pick,
  validateWord,
  randLetter,
  pickDictWord
};
