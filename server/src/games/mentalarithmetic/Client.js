const { events } = require('../../constants');
const Dispatcher = require('../../utils/Dispatcher');

class MentalArithmetic extends Dispatcher {
    constructor({
        operation = [],
        possibilities = [],
        duration = 5,
        socket = null,
        playerId = null
    }) {
        super();

        this.containerEl = null;
        this.socket = socket;
        this.playerId = playerId;

        this.operation = operation;
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
            const answer = parseInt(target.innerHTML);
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
        const operationHtml = this.renderHtmlOperation();
        const possibilitiesHtml = this.renderHtmlPossibilities();
        return `<div class="row kwa-game">
    ${operationHtml}
    ${possibilitiesHtml}
</div>`;
    }

    renderHtmlOperation() {
        return `<div class="col-12">
    <h2 class="text-center">
        ${this.operation[0]} ${this.operation[1]} ${this.operation[2]}
    </h2>
</div>`;
    }

    renderHtmlPossibilities() {
        const possibilitiesHtml = this.possibilities.map(p => {
            return `<div class="btn-group" role="group">
    <button kwa-event="click" type="button" class="btn btn-lg btn-outline-warning mr-3" style="color: black;">${p}</button>
</div>`;
        }).join('');
        return `<div class="col-12">
    <div class="btn-toolbar">
        ${possibilitiesHtml}
    </div>
</div>`;
    }

    removeEvents() {
        this.containerEl.removeEventListener('click', this.handleEventContainer);
    }
}

module.exports = MentalArithmetic;