const Dispatcher = require('./Dispatcher');
const random = require('./random');

module.exports = {
  Dispatcher,
  random,
};
// const mots = require('../data/mots.json')

// function randinc(min, max){
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

// function randLetter(){
//   return String.fromCodePoint(randinc(65, 90))
// }

// function pick(xs){
//   return xs[randinc(0, xs.length-1)]
// }

// function validateWord(word){
//   return mots.hasOwnProperty(word)
// }

// module.exports =  {
//   randinc,
//   pick,
//   randLetter
// }
