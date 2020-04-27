const constants = require('../constants');
const LongestWord = require('./longestword/Client');
const MentalArithmetic = require('./mentalarithmetic/Client');

const Games = {
  LongestWord,
  MentalArithmetic
};

if (typeof window !== 'undefined') {
  window.kwa = {
    games: Games,
    constants,
  };
}

module.exports = Games;
