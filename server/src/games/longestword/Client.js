const { events } = require('../../constants');
const { Dispatcher } = require('../../utils/');

class LongestWord extends Dispatcher {
  /**
   * @namespace Client
   * @memberof Games/LongestWord
   * @classdesc Longest word game
   *
   * @extends Dispatcher
   * @param {Object} params
   * @param {Array} params.letters Letters to be displayed
   * @param {SocketIO} params.socket Client socket
   */
  constructor({ letters = [], playerId = 'p1', socket = null } = {}) {
    super();
    this.playerId = playerId;
    this.containerEl = null;
    this.letters = letters;
    this.socket = socket;

    this.state = this.getInitialState();

    this.handleEventContainer = this.handleEventContainer.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.handleEventElement = this.handleEventElement.bind(this);
  }

  addKeyboardLetter(letter) {
    const letters = this.state.filter((l) => l.type === 'add-letter');
    let index = -1;
    for (let i = 0; i < letters.length; i++) {
      console.log('#1', letters[i].value.letter);
      console.log('#2', letter);
      console.log('#3', letters[i].value.letter === letter);
      if (letters[i].value.letter === letter && index === -1) {
        console.log('hm?');
        index = letters[i].value.index;
      }
    }
    // console.log('okdzodkazode', index);
    this.updateState(index);
  }

  /**
   * Attach events to DOM
   * @method
   * @memberof Games/LongestWord.Client
   */
  attachEvents() {
    console.log('>> server/games/LongestWord#attachEvents');
    if (this.containerEl === null) {
      this.containerEl = document.querySelector('.kwa-game-container');
    }
    this.containerEl.addEventListener('click', this.handleEventContainer);
    document.addEventListener('keypress', this.onKeyPress);
    document.addEventListener('keydown', this.onKeyDown);
    console.log('>> server/games/LongestWord#attachEvents');
  }

  /**
   * Generate the initial state of the whole game
   * @memberof Games/LongestWord.Client
   */
  getInitialState() {
    return this.letters.map((letter, index) => {
      return {
        playerId: this.playerId,
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

  /**
   * Generate the input that will be sent to the server
   * @memberof Games/LongestWord.Client
   */
  getServerInput() {
    return this.state
      .filter((l) => l.type === 'rm-letter')
      .sort((a, b) => a.value.position - b.value.position)
      .map((l) => l.value.letter)
      .join('');
  }

  // Front
  handleEventContainer({ target }) {
    // console.log('click');
    // console.log('server/games/LongestWord#handleEventContainer matches', target.matches('[kwa-event="click"]'));
    // console.log('server/games/LongestWord#handleEventContainer matches', target.matches('[kwa-event]'));
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
  }

  /**
   * Send the input to the server
   * @memberof Games/LongestWord.Client
   *
   * @param {*} value
   * @param {Object} opts
   * @param {String} opts.type Type of the event sent to the server
   */
  input(value, { type } = {}) {
    if (this.socket === null) {
      console.log(
        'server/games/LongestWord#input cannot send input. Socket does not exist'
      );
      return;
    }
    const word = this.getServerInput();
    if (this.isValidInput(word) === false) {
      return;
    }
    console.log('server/games/LongestWord#input word', word);
    this.socket.emit('game.input', { input: word, playerId: this.playerId });
    // this.updateState(index);
  }

  isValidInput(input) {
    return input.length > 0;
  }

  onKeyPress({ keyCode }) {
    console.log('server/games/LongestWord#onKeyPress keyCode', keyCode);
    if (keyCode === 13) {
      this.input();
      return;
    }
    this.addKeyboardLetter(String.fromCharCode(keyCode).toUpperCase());
  }
  onKeyDown({ keyCode }) {
    // console.log('onKeyDown keyCode', keyCode);
    if (keyCode === 8) {
      this.removeLastLetter();
    }
  }

  /**
   * Remove events to DOM
   * @memberof Games/LongestWord.Client
   */
  removeEvents() {
    document.removeEventListener('keypress', this.onKeyPress);
    document.removeEventListener('keydown', this.onKeyDown);
    this.containerEl.removeEventListener('click', this.handleEventContainer);
  }
  removeLastLetter() {
    const letters = this.state
      .filter((l) => l.type === 'rm-letter')
      .sort((a, b) => a.value.position - b.value.position);
    console.log('server/games/LongestWord#removeLastLetter letters', letters);
    const lastLetter = letters[letters.length - 1];
    const index = lastLetter.value.index;
    this.updateState(index);
  }

  // https://stackoverflow.com/questions/29586411/react-js-is-it-possible-to-convert-a-react-component-to-html-doms#comment71545300_30654169

  /**
   * Render the HTML to the page
   * @memberof Games/LongestWord.Client
   */ render() {
    const myWordHtml = this.renderUserWord();
    const leftLettersHtml = this.renderLeftLetters();
    const endGameBtn = this.renderEndButton();
    const styleHtml = this.renderStyleEl();

    return `<div class="kwa-game">
  ${myWordHtml}
  ${endGameBtn}
  ${leftLettersHtml}
  ${styleHtml}
</div>`;
  }

  // Front
  renderEndButton() {
    return `<button kwa-event="click" kwa-type="end-game">End</button>`;
  }

  // Front
  renderLeftLetters() {
    const letters = this.state
      // .filter((l) => l.type === 'add-letter')
      .map(this.renderLeftLetter)
      .join('');

    return `<p class="text-header">Possibilités</p><div class="kwa-keyboard">${letters}</div>`;
  }

  //Front
  renderLeftLetter(letter) {
    if (letter.type === 'rm-letter') {
      return `<div
      class="kwa-keyboard-key kwa-keyboard-key-empty"
    >
      $
    </div>`;
    }
    return `<div
        class="kwa-keyboard-key"
        key="${letter.value.index}"
        kwa-type="${letter.type}"
        kwa-event="${letter.trigger}"
        kwa-value-letter="${letter.value.letter}"
        kwa-value-index="${letter.value.index}"
      >
        ${letter.value.letter}
      </div>`;
  }

  renderLetter(letter) {
    return `<div
        class="kwa-keyboard-key"
        key="${letter.value.index}"
        kwa-type="${letter.type}"
        kwa-event="${letter.trigger}"
        kwa-value-letter="${letter.value.letter}"
        kwa-value-index="${letter.value.index}"
      >
        ${letter.value.letter}
      </div>`;
  }

  renderStyleEl() {
    return `<style>

</style>`;
  }

  // Front
  renderUserWord() {
    const letters = this.state
      .filter((l) => l.type === 'rm-letter')
      .sort((a, b) => a.value.position - b.value.position)
      .map(this.renderLetter)
      .join('');

    return `<p class="text-header">Mot</p><div class="kwa-answer">${letters}</div>`;
  }

  /**
   * Update the state to render to the HTML
   * @memberof Games/LongestWord.Client
   * @param {Number} index
   */
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
    this.dispatch(events.GAME_STATE_UPDATED);
  }
}

module.exports = LongestWord;
