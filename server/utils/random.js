const mots = require("../data/motsCleaned.json");

function randinc(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(xs) {
  return xs[randinc(0, xs.length - 1)];
}

function validateWord(word) {
  return mots.hasOwnProperty(word);
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
  Z: 15
};

function randLetter() {
  const sumWeights = Object.values(letterFrequencies).reduce((x, y) => x + y);
  let target = randinc(0, sumWeights);
  const pairs = Object.entries(letterFrequencies);
  for (let i = 0; i < pairs.length; i++) {
    console.log(target, pairs[i][1]);
    if (target < pairs[i][1]) {
      return pairs[i][0];
    }
    target -= pairs[i][1];
  }
}

module.exports = {
  randinc,
  pick,
  validateWord,
  randLetter
};
