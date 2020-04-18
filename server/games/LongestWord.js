const utils = require('../utils/');
// https://blog.k.io/atech/creating-a-simple-custom-event-system-in-javascript
const Dispatcher = require('../utils/Dispatcher');

function randLetter() {
  return String.fromCodePoint(utils.randinc(65, 90));
}

class LongestWord extends Dispatcher {
  constructor({ numLetters = 6, letters = [], pId = 'p1' } = {}) {
    super();
    this._numLetters = numLetters;
    this._id = 'LongestWord';
    this._pId = pId;
    this._containerEl = null;
    if (letters.length === 0) {
      this._letters = [...new Array(this._numLetters)].map(randLetter);
    } else {
      this._letters = letters;
    }

    this.state = this.getInitialState();

    // this.dispatcher = new Dispatcher();

    this.handleEventContainer = this.handleEventContainer.bind(this);
    this.handleEventElement = this.handleEventElement.bind(this);
  }

  // Front
  attachEvents() {
    if (this._containerEl === null) {
      this._containerEl = document.querySelector('.kwa-game-container');
    }
    this._containerEl.addEventListener('click', this.handleEventContainer);
  }

  // endGame() {
  //   console.log('>> server/games/LongestWord#endGame');
  // }

  // Backend
  getData() {
    return {
      name: this._id,
      data: {
        letters: this._letters,
      },
    };
  }

  // Front
  getInitialState() {
    return this._letters.map((letter, index) => {
      return {
        pId: this._pId,
        trigger: 'click',
        value: {
          index,
          letter,
          position: null,
        },
        type: 'add-letter',
      };
    });
  }

  // Front
  getHtml() {
    const myWordHtml = this.getHtmlUserWord();
    const leftLettersHtml = this.getHtmlLeftLetters();
    const endGameBtn = this.getHtmlEndButton();

    return `<div class="kwa-game">${myWordHtml}${endGameBtn}${leftLettersHtml}</div>`;
  }

  // Front
  getHtmlEndButton() {
    return `<button kwa-event="click" kwa-type="end-game">End</button>`;
  }

  // Front
  getHtmlLeftLetters() {
    const letters = this.state
      .filter((l) => l.type === 'add-letter')
      .map(this.getHtmlLetter)
      .join('');

    return `<p class="text-header">Possibilités</p>${letters}`;
  }

  //Front
  getHtmlLetter(letter) {
    return `<div
        key="${letter.value.index}"
        kwa-type="${letter.type}"
        kwa-event="${letter.trigger}"
        kwa-value-letter="${letter.value.letter}"
        kwa-value-index="${letter.value.index}"
      >
        ${letter.value.letter}
      </div>`;
  }

  // Front
  getHtmlUserWord() {
    const letters = this.state
      .filter((l) => l.type === 'rm-letter')
      .sort((a, b) => a.value.position - b.value.position)
      .map(this.getHtmlLetter)
      .join('');

    return `<p class="text-header">Mot</p>${letters}`;
  }

  // Front
  getServerInput() {
    return this.state
      .filter((l) => l.type === 'rm-letter')
      .sort((a, b) => a.value.position - b.value.position)
      .map((l) => l.value.letter);
  }

  // Front
  handleEventContainer({ target }) {
    console.log('click');
    console.log('target matches', target.matches('[kwa-event="click"]'));
    console.log('target matches', target.matches('[kwa-event]'));
    if (target.matches('[kwa-event="click"]')) {
      if (target.matches('[kwa-type="end-game"]')) {
        this.endGame();
      } else {
        this.handleEventElement({ target });
      }
    }
  }

  // Front
  handleEventElement({ target }) {
    // console.log('#handleEvent');
    // console.log('index', target.getAttribute('kwa-value-index'));
    const index = parseInt(target.getAttribute('kwa-value-index'));
    // console.log('index', index);
    if (isNaN(index) === true) {
      return;
    }
    this.updateState(index);
    this.dispatch('state-updated');
  }

  // Front
  input(
    player = this._pId,
    {
      value = {
        index,
        letter,
      },
      type,
    } = {}
  ) {
    const input = this.getServerInput();
    this.updateState(index);
  }

  removeEvents() {
    this._containerEl.removeEventListener('click', this.handleEventContainer);
  }

  updateState(index) {
    const userWordLength = this.state.filter((l) => l.type === 'rm-letter')
      .length;
    this.state.forEach((letterInfo) => {
      if (letterInfo.value.index === index) {
        if (letterInfo.type === 'add-letter') {
          letterInfo.type = 'rm-letter';
          letterInfo.value.position = userWordLength - 1;
        } else {
          letterInfo.type = 'add-letter';
          letterInfo.value.position = null;
        }
      }
    });
  }
}

module.exports = LongestWord;
