const { random, lettersAndWords } = require('../../utils/');

class Scrambler {
  /**
   * @namespace Server
   * @memberof Games/Scrambler
   * @classdesc Scrambler game
   *
   * @param {Object} params
   * @param {Array} params.numLetters Letters to generate
   * @param {Number} params.duration Game duration
   * @param {Array} params.playerIds Ids of all players in the game
   */
  constructor({
    numLetters = 7,
    duration = 20,
    playerIds = [],
    letters = [],
  } = {}) {
    /**
     * @property
     * @memberof Games/Scrambler.Server
     */
    this.name = 'Mot mélangé'; // TODO: i18n
    this.rules = 'Retrouvez le mot mélangé'; // TODO: i18n
    this.playerIds = playerIds; // for debug purposes
    this.results = this.getInitialResults(playerIds);
    this.duration = duration;
    this.hasAnswered = [];

    // Game specific
    this.numLetters = numLetters;
    if (letters.length === 0) {
      this.answer = this.getAnswer(numLetters);
      this.letters = this.getScrambledLetters(this.answer);
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
            return a.time - b.time;
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
   * @memberof Games/Scrambler.Server
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
      player.answerDisplay = `${input}`;
      return;
    }

    player.isGoodAnswer = true;
    player.answer = input;
    player.answerDisplay = `${input}`;

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
   * @memberof Games/Scrambler.Server
   */
  getAnswer(numLetters) {
    const answer = lettersAndWords.pickDictWord(numLetters);
    return answer;
  }

  getScrambledLetters(answer) {
    const letters = answer.split('').sort(() => {
        return Math.random() < .5 ? -1 : 1;
    });
    return letters;
  }

  /**
   * Generates a random letter
   *
   * @static
   * @memberof Games/Scrambler.Server
   */
  static randLetter() {
    return String.fromCodePoint(random.randinc(65, 90));
  }

  /**
   * Generates the round client data
   *
   * @memberof Games/Scrambler.Server
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
   * @memberof Games/Scrambler.Server
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
    // const isValid = random.validateWord(input);
    // return isValid;
        console.log('#isValidInput input', input);
        console.log('#isValidInput this.answer', this.answer);
        if (input === this.answer) {
            return true;
        }
        // if the word is not the actual answer
        // but still is an annagram of equivalent length
        if (
            input.length === this.answer.length &&
            lettersAndWords.validateWord(input)
        ) {
            return true;
        }
        return false;
  }
}

module.exports = Scrambler;
