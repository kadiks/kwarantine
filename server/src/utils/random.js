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

module.exports = {
  randinc,
  randKey,
  pick
};
