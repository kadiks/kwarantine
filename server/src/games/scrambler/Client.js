const { events } = require('../../constants');
const Dispatcher = require('../../utils/Dispatcher');

class Scrambler extends Dispatcher {
  /**
   * @namespace Client
   * @memberof Games/Scrambler
   * @classdesc Scrambler game
   *
   * @extends Dispatcher
   * @param {Object} params
   * @param {Array} params.letters Letters to be displayed
   * @param {Number} params.duration Game duration in seconds
   * @param {SocketIO} params.socket Client socket
   */
  constructor({
    letters = [],
    playerId = 'p1',
    socket = null,
    duration = 20,
  } = {}) {
    super();
    this.playerId = playerId;
    this.containerEl = null;
    this.letters = letters;
    this.socket = socket;
    this.duration = duration;

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
      // console.log('#1', letters[i].value.letter);
      // console.log('#2', letter);
      // console.log('#3', letters[i].value.letter === letter);
      if (letters[i].value.letter === letter && index === -1) {
        index = letters[i].value.index;
      }
    }
    // console.log('okdzodkazode', index);
    this.updateState(index);
  }

  /**
   * Attach events to DOM
   * @method
   * @memberof Games/Scrambler.Client
   */
  attachEvents() {
    // console.log('>> server/games/Scrambler#attachEvents');
    if (this.containerEl === null) {
      this.containerEl = document.querySelector('.kwa-game-container');
    }
    // this.containerEl.classList.add(this.constructor.name);
    this.containerEl.addEventListener('click', this.handleEventContainer);
    document.addEventListener('keypress', this.onKeyPress);
    document.addEventListener('keydown', this.onKeyDown);
    // console.log('>> server/games/Scrambler#attachEvents');
  }

  /**
   * Generate the initial state of the whole game
   * @memberof Games/Scrambler.Client
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
   * @memberof Games/Scrambler.Client
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
    // console.log('server/games/Scrambler#handleEventContainer matches', target.matches('[kwa-event="click"]'));
    // console.log('server/games/Scrambler#handleEventContainer matches', target.matches('[kwa-event]'));
    if (target.matches('[kwa-event="click"]')) {
      if (target.matches('[kwa-type="end-game"]')) {
        this.input();
      } else if (target.matches('[kwa-type="rm-last-letter"]')) {
        this.removeLastLetter();
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
   * @memberof Games/Scrambler.Client
   *
   * @param {*} value
   * @param {Object} opts
   * @param {String} opts.type Type of the event sent to the server
   */
  input(value, { type } = {}) {
    if (this.socket === null) {
      console.log(
        'server/games/Scrambler#input cannot send input. Socket does not exist'
      );
      return;
    }
    const word = this.getServerInput();
    if (this.isValidInput(word) === false) {
      return;
    }
    // console.log('server/games/Scrambler#input word', word);
    this.socket.emit('game.input', { input: word, playerId: this.playerId });
    // this.updateState(index);
  }

  isValidInput(input) {
    return input.length > 0;
  }

  onKeyPress({ keyCode }) {
    // console.log('server/games/Scrambler#onKeyPress keyCode', keyCode);
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
   * @memberof Games/Scrambler.Client
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
    // console.log('server/games/Scrambler#removeLastLetter letters', letters);
    const lastLetter = letters[letters.length - 1];
    const index = lastLetter.value.index;
    this.updateState(index);
  }

  // https://stackoverflow.com/questions/29586411/react-js-is-it-possible-to-convert-a-react-component-to-html-doms#comment71545300_30654169

  /**
   * Render the HTML to the page
   * @memberof Games/Scrambler.Client
   */ render() {
    const myWordHtml = this.renderUserWord();
    const leftLettersHtml = this.renderLeftLetters();
    const endGameBtn = this.renderEndButton();
    const backBtn = this.renderBackButton();
    const styleHtml = this.renderStyleEl();

    return `<div class="kwa-game">
  ${myWordHtml}
  ${backBtn}
  ${leftLettersHtml}
  ${styleHtml}
  ${endGameBtn}
</div>`;
  }

  renderBackButton() {
    return `<div class="text-center mb-3"><button type="button" class="btn-lg btn-outline-warning" kwa-event="click" kwa-type="rm-last-letter">Effacer</button></div>`;
  }

  // Front
  renderEndButton() {
    return `<div class="text-center mt-3"><button type="button" class="btn-lg btn-warning" kwa-event="click" kwa-type="end-game">Envoyer</button></div>`;
  }

  // Front
  renderLeftLetters() {
    const letters = this.state
      // .filter((l) => l.type === 'add-letter')
      .map(this.renderLeftLetter)
      .join('');

    return `<h3 class="text-center mb-3">Possibilités</h3><div class="kwa-answer mb-5">${letters}</div>`;
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

    return `<h3 class="text-center mb-3">Mot</h3><div class="kwa-answer mb-3">${letters}</div>`;
  }

  /**
   * Update the state to render to the HTML
   * @memberof Games/Scrambler.Client
   * @param {Number} index
   */
  updateState(index) {
    const userWordLength = this.state.filter((l) => l.type === 'rm-letter')
      .length;
    // console.log('this.state', this.state);
    this.state.forEach((letterInfo) => {
      if (letterInfo.value.index === index) {
        if (letterInfo.type === 'add-letter') {
          letterInfo.type = 'rm-letter';
          letterInfo.value.position = userWordLength;
        } else {
          if (letterInfo.value.position === userWordLength - 1) {
            letterInfo.type = 'add-letter';
            letterInfo.value.position = null;
          }
        }
      }
    });
    this.dispatch(events.GAME_STATE_UPDATED);
  }
}

module.exports = Scrambler;
