const constants = require('../constants');
const LongestWord = require('./longestword/Client');

const Games = {
  LongestWord,
};

if (typeof window !== 'undefined') {
  window.kwa = {
    games: Games,
    constants,
  };
}

module.exports = Games;
