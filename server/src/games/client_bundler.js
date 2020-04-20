const LongestWord = require('./longestword/Client');

const Games = {
  LongestWord,
};

if (typeof window !== 'undefined') {
  window.games = Games;
}

module.exports = Games;
