const { random, Dispatcher } = require('../utils/');

function randLetter() {
  return String.fromCodePoint(random.randinc(65, 90));
}

class LongestWord extends Dispatcher {
  constructor({
    numLetters = 6,
    letters = [],
    pId = 'p1',
    socket = null,
  } = {}) {
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
    this.socket = socket;

    this.state = this.getInitialState();

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
  getServerInput() {
    return this.state
      .filter((l) => l.type === 'rm-letter')
      .sort((a, b) => a.value.position - b.value.position)
      .map((l) => l.value.letter)
      .join('');
  }

  // Front
  handleEventContainer({ target }) {
    console.log('click');
    console.log('target matches', target.matches('[kwa-event="click"]'));
    console.log('target matches', target.matches('[kwa-event]'));
    if (target.matches('[kwa-event="click"]')) {
      if (target.matches('[kwa-type="end-game"]')) {
        this.input();
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
  input(player = this._pId, { value, type } = {}) {
    if (this.socket === null) {
      console.log(
        'server/games/LongestWord#input cannot send input. Socket does not exist'
      );
      return;
    }
    const word = this.getServerInput();
    console.log('server/games/LongestWord#input word', word);
    this.socket.emit('game.input', word);
    // this.updateState(index);
  }

  removeEvents() {
    this._containerEl.removeEventListener('click', this.handleEventContainer);
  }

  // Front
  // https://stackoverflow.com/questions/29586411/react-js-is-it-possible-to-convert-a-react-component-to-html-doms#comment71545300_30654169
  render() {
    const myWordHtml = this.renderUserWord();
    const leftLettersHtml = this.renderLeftLetters();
    const endGameBtn = this.renderEndButton();

    return `<div class="kwa-game">${myWordHtml}${endGameBtn}${leftLettersHtml}</div>`;
  }

  // Front
  renderEndButton() {
    return `<button kwa-event="click" kwa-type="end-game">End</button>`;
  }

  // Front
  renderLeftLetters() {
    const letters = this.state
      .filter((l) => l.type === 'add-letter')
      .map(this.renderLetter)
      .join('');

    return `<p class="text-header">Possibilités</p>${letters}`;
  }

  //Front
  renderLetter(letter) {
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
  renderUserWord() {
    const letters = this.state
      .filter((l) => l.type === 'rm-letter')
      .sort((a, b) => a.value.position - b.value.position)
      .map(this.renderLetter)
      .join('');

    return `<p class="text-header">Mot</p>${letters}`;
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
