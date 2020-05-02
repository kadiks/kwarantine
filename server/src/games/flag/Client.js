const Dispatcher = require('../../utils/Dispatcher');

class Flag extends Dispatcher {
    constructor({
        countryCode = '',
        possibilities = [],
        duration = 10,
        socket = null,
        playerId = null
    }) {
        super();

        this.containerEl = null;
        this.socket = socket;
        this.playerId = playerId;

        this.countryCode = countryCode;
        this.possibilities = possibilities;
        this.duration = duration;

        this.handleEventContainer = this.handleEventContainer.bind(this);
    }

    attachEvents() {
        if (this.containerEl === null) {
            this.containerEl = document.querySelector('.kwa-game-container');
        }
        // this.containerEl.classList.add(this.constructor.name);
        console.log('this.containerEl', this.containerEl);
        this.containerEl.addEventListener('click', this.handleEventContainer);
    }

    handleEventContainer({ target }) {
        console.log('server/games/MentalArithmetic#handleEventContainer click');
        // console.log('server/games/LongestWord#handleEventContainer matches', target.matches('[kwa-event="click"]'));
        // console.log('server/games/LongestWord#handleEventContainer matches', target.matches('[kwa-event]'));
        if (target.matches('[kwa-event="click"]')) {
            // this.handleEventElement({ target });
            const answer = target.innerHTML;
            this.input(answer);
        }
    }

    input(value, { type } = {}) {
        if (this.socket === null) {
          console.log(
            'server/games/MentalArtithmetic#input cannot send input. Socket does not exist'
          );
          return;
        }
        // if (this.isValidInput(value) === false) {
        //   return;
        // }
        console.log('server/games/MentalArtithmetic#input value', value);
        console.log('server/games/MentalArtithmetic#input this.playerId', this.playerId);
        this.socket.emit('game.input', { input: value, playerId: this.playerId });
        // this.updateState(index);
      }
        

    render() {
        const questionHtml = this.renderHtmlQuestion();
        const possibilitiesHtml = this.renderHtmlPossibilities();
        return `<div class="row kwa-game">
    ${questionHtml}
    ${possibilitiesHtml}
</div>`;
    }

    renderHtmlQuestion() {
        return `<div class="col-4 offset-4 mb-3">
    <img src="/img/flags/${this.countryCode}.png" class="img-fluid" />
</div>`;
    }

    renderHtmlPossibilities() {
        const possibilitiesHtml = this.possibilities.map(p => {
            return `<div class="col-6 col-md-3 mb-1 text-center">
    <button kwa-event="click" type="button" class="btn btn-lg btn-outline-warning" style="color: black;">${p}</button>
</div>`;
        }).join('');
        return `<div class="col-12">
    <div class="row">
        ${possibilitiesHtml}
    </div>
</div>`;
    }

    removeEvents() {
        this.containerEl.removeEventListener('click', this.handleEventContainer);
    }
}

module.exports = Flag;