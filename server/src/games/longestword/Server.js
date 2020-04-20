const { random } = require('../../utils/');

class LongestWord {
  /**
   * @namespace Server
   * @memberof Games/LongestWord
   * @classdesc Longest word game
   *
   * @param {Object} params
   * @param {Array} params.numLetters Letters to generate
   */
  constructor({ numLetters = 10 } = {}) {
    /**
     * @property
     * @memberof Games/LongestWord.Server
     */
    this.scores = {};
    this.results = {};
    this.name = 'Le mot le plus long'; // TODO: i18n

    // Game specific
    this.numLetters = numLetters;
    this.letters = [...new Array(this.numLetters)].map(this.randLetter);
  }

  /**
   * Calculate the player score
   *
   * @memberof Games/LongestWord.Server
   * @param {*} input
   * @param {Object} params
   * @param {String} params.playerId
   *
   * @returns {Number} The score to be resent to the client for info
   */
  calculatePlayerScore(input, { playerId = 'p1' } = {}) {
    let score = 0;
    if (this.isValidInput(input) === true) {
      score = input.length; // the player has the n pts that matches the number of letters
    }

    this.scores[playerId] = score;
    this.results[playerId] = {
      name: this.name,
      answer: input,
      score: input.length,
    };
    return score;
  }

  /**
   * Generates the round client data
   *
   * @memberof Games/LongestWord.Server
   */
  getData() {
    return {
      className: this.constructor.name,
      name: this.name,
      data: {
        letters: this.letters,
      },
    };
  }

  /**
   * Check if the input is safe from hackers/cheaters
   * Like sending a 10 letter word that is not based on the given letters
   *
   * @memberof Games/LongestWord.Server
   * @param {String} input
   */
  isSafeInput(input) {
    let isSafe = true;
    const letters = JSON.parse(JSON.stringify(this.letters));
    const inputAr = input.split('');
    inputAr.forEach((inputLetter) => {
      const index = letters.indexOf(inputLetter);
      if (index === -1) {
        isSafe = false;
      } else {
        letters.splice(index, 1);
      }
    });

    return isSafe;
  }

  isValidInput(input) {
    const isValid = random.validateWord(input);
    return isValid;
  }

  /**
   * Generates a random letter
   *
   * @memberof Games/LongestWord.Server
   */
  randLetter() {
    return String.fromCodePoint(random.randinc(65, 90));
  }
}

module.exports = LongestWord;
