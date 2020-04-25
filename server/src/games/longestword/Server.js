const { random } = require('../../utils/');

class LongestWord {
  /**
   * @namespace Server
   * @memberof Games/LongestWord
   * @classdesc Longest word game
   *
   * @param {Object} params
   * @param {Array} params.numLetters Letters to generate
   * @param {Number} params.duration Game duration
   * @param {Array} params.playerIds Ids of all players in the game
   */
  constructor({
    numLetters = 10,
    duration = 30,
    playerIds = [],
    letters = [],
  } = {}) {
    /**
     * @property
     * @memberof Games/LongestWord.Server
     */
    // prop scores might not be needed as being duplicated in results
    this.name = 'Le mot le plus long'; // TODO: i18n
    this.rules = 'Trouver le mot le plus long'; // TODO: i18n
    this.playerIds = playerIds; // for debug purposes
    this.scores = this.getInitialScores(playerIds);
    this.results = this.getInitialResults(playerIds);
    this.duration = duration;
    this.hasAnswered = [];

    // Game specific
    this.numLetters = numLetters;
    if (letters.length === 0) {
      this.letters = LongestWord.getLetters(numLetters);
    } else {
      this.letters = letters;
    }
  }

  getInitialResults(playerIds) {
    const results = {};
    playerIds.forEach((playerId) => {
      results[playerId] = {
        name: this.name,
        score: 0,
        answer: '',
      };
    });
    return results;
  }

  getInitialScores(playerIds) {
    const scores = {};
    playerIds.forEach((playerId) => {
      scores[playerId] = 0;
    });
    return scores;
  }

  /**
   * Draw the letters to find a word from
   *
   * @static
   * @memberof Games/LongestWord.Server
   */
  static getLetters(numLetters) {
    return [...new Array(numLetters)].map(random.randLetter);
  }

  /**
   * Generates a random letter
   *
   * @static
   * @memberof Games/LongestWord.Server
   */
  static randLetter() {
    return String.fromCodePoint(random.randinc(65, 90));
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
    if (this.hasAnswered.includes(playerId) === false) {
      this.hasAnswered.push(playerId);
    }
    if (this.isSafeInput(input) === true) {
      if (this.isValidInput(input) === true) {
        score = input.length; // the player has the n pts that matches the number of letters
      }
    }

    // console.log('game/LongestWord/Server#calculatePlayerScore playerId', playerId);
    // console.log('game/LongestWord/Server#calculatePlayerScore this.results', this.results);

    this.scores[playerId] = score;
    this.results[playerId].answer = input;
    this.results[playerId].score = score;
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
        duration: this.duration,
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
    console.log('isSafeInput:', input)
    console.log('this.letters', this.letters)
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
}

module.exports = LongestWord;
