const LongestWord = require('./LongestWord');

const Games = {
  LongestWord,
};

if (typeof window !== 'undefined') {
  window.games = Games;
}

module.exports = Games;
