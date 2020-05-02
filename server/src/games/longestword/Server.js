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
    duration = 20,
    playerIds = [],
    letters = [],
  } = {}) {
    /**
     * @property
     * @memberof Games/LongestWord.Server
     */
    this.name = 'Le mot le plus long'; // TODO: i18n
    this.rules = 'Trouvez le mot le plus long'; // TODO: i18n
    this.playerIds = playerIds; // for debug purposes
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

  // TODO: Find a way to export the 2 #calculate methods but
  // have a way to parameters like the sorting method for score
  // and a way to transform the "answerDisplay" property 
  calculateAllPlayersScore() {
    let maxPoints = this.playerIds.length;

    const orderedResults = this.results
        .filter(p => p.isGoodAnswer)
        .sort((a, b) => {
          // https://stackoverflow.com/a/6130014
          // if length is equal, sort by time
          if (a.answer.length === b.answer.length) {
            return a.time - b.time;
          }
          // otherwise, sort by word length
          return b.answer.length - a.answer.length;
        })
        .map(p => {
            maxPoints--;
            return {
                playerId: p.playerId,
                score: maxPoints + 1
            };
        });

    this.results.forEach((p) => {
        const playerScore = orderedResults.find(pS => pS.playerId === p.playerId);
        // console.log('games/MA.Server#calculateAllPlayersScore playerScore', playerScore);
        if (typeof playerScore !== 'undefined') {
            p.score = playerScore.score;
        }
    });
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
  calculatePlayerScore(input, { playerId, time }) {
    if (this.hasAnswered.includes(playerId) === false) {
      this.hasAnswered.push(playerId);
    }

    const player = this.results.find(r => r.playerId === playerId);
    player.time = time;

    if (this.isValidInput(input) === false) {
      player.answerDisplay = `${input} (0)`;
      return;
    }

    player.isGoodAnswer = true;
    player.answer = input;
    player.answerDisplay = `${input} (${input.length})`;

    this.calculateAllPlayersScore();
  }

  // TODO: Has to be in another module. Already exactly the same
  getInitialResults(playerIds) {
    const results = [];
    playerIds.forEach(playerId => {
        results.push({
            playerId,
            name: this.name,
            score: 0,
            isGoodAnswer: false,
            answer: '',
            answerDisplay: '',
            time: 0
        });
    });
    return results;
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
