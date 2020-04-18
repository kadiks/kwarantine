const utils = require('../utils/');

function randLetter() {
  return String.fromCodePoint(utils.randinc(65, 90));
}

class LongestWord {
  constructor({ numLetters = 6, letters = [], pId = 'p1' } = {}) {
    this._numLetters = numLetters;
    this._id = 'longestword';
    this._pId = pId;
    if (letters.length === 0) {
      this._letters = [...new Array(this._numLetters)].map(randLetter);
    } else {
      this._letters = letters;
    }

    this.state = this.getInitialState();
  }
  // Front
  getInitialState() {
    return this._letters.map((letter, index) => {
      return {
        pId: this._pId,
        index,
        value: letter,
        type: 'add-letter',
      };
    });
  }
  // Backend
  getData() {
    return {
      name: this._id,
      data: {
        letters: this._letters,
      },
    };
  }
  input(
    player = this._pId,
    {
      value = {
        index,
      },
      type,
    } = {}
  ) {
    this.updateState(index);
  }

  updateState(index) {
    this.state.forEach((letterInfo) => {
      if (letterInfo.index === index) {
        if (letterInfo.type === 'add-letter') {
          letterInfo.type === 'rm-letter';
        } else {
          letterInfo.type === 'add-letter';
        }
      }
    });
  }
}

module.exports = LongestWord;
