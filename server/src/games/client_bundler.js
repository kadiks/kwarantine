const constants = require('../constants');
const LongestWord = require('./longestword/Client');
const MentalArithmetic = require('./mentalarithmetic/Client');
const Flag = require('./flag/Client');

const Games = {
  LongestWord,
  MentalArithmetic,
  Flag
};

if (typeof window !== 'undefined') {
  window.kwa = {
    games: Games,
    constants,
  };
}

module.exports = Games;
