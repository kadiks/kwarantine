const constants = require('../constants');
const LongestWord = require('./longestword/Client');
const MentalArithmetic = require('./mentalarithmetic/Client');
const Flag = require('./flag/Client');
const Scrambler = require('./scrambler/Client');

const Games = {
  LongestWord,
  MentalArithmetic,
  Flag,
  Scrambler
};

if (typeof window !== 'undefined') {
  window.kwa = {
    games: Games,
    constants,
  };
}

module.exports = Games;
