const { expect } = require('chai');
const Game = require('../../../src/games/longestword/Client');

const lettersABC = ['A', 'B', 'C'];

describe('LongestWord', () => {
  describe('Client', () => {
    describe('#constructor', () => {
      it('letters property should be an empty by default', () => {
        const game = new Game();
        expect(game.letters.length).to.eql(0);
      });
      it('letters property should be set at instanciation', () => {
        const letters = lettersABC;
        const game = new Game({ letters });
        expect(game.letters.length).to.eql(letters.length);
      });
    });
    describe('#getInitialState', () => {});

    describe('#getServerInput', () => {
      it('should return an empty string', () => {
        const letters = lettersABC;
        const game = new Game({ letters });
        expect(game.getServerInput().length).to.eql(0);
      });
      it('should display the letter in the right sequence', () => {
        const letters = lettersABC;
        const game = new Game({ letters });
        game.updateState(2);
        expect(game.getServerInput()).to.eql('C');
        game.updateState(0);
        expect(game.getServerInput()).to.eql('CA');
        game.updateState(1);
        expect(game.getServerInput()).to.eql('CAB');
        expect(game.getServerInput().length).to.eql(3);
      });
      it('should display and remove the letter in the right sequence', () => {
        const letters = lettersABC;
        const game = new Game({ letters });
        game.updateState(2);
        expect(game.getServerInput()).to.eql('C');
        game.updateState(1);
        expect(game.getServerInput()).to.eql('CB');
        game.updateState(1);
        expect(game.getServerInput()).to.eql('C');
        game.updateState(0);
        expect(game.getServerInput()).to.eql('CA');
        game.updateState(1);
        expect(game.getServerInput()).to.eql('CAB');
        expect(game.getServerInput().length).to.eql(3);
      });
    });
    describe('#updateState', () => {
      it('should dispatch the event state-updated', (done) => {
        const game = new Game({ letters: lettersABC });
        game.on('game.state.updated', () => {
          done();
        });
        game.updateState(0);
      });
    });
  });
});
