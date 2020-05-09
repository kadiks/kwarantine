const { expect } = require('chai');
const Game = require('../../../../src/games/longestword/Server');

const lettersABC = ['A', 'B', 'C'];

describe('LongestWord', () => {
  describe('Server', () => {
    describe('#constructor', () => {
      it('should have 10 letters drawn by default', () => {
        const game = new Game();
        expect(game.letters.length).to.eql(10);
      });
      it('letters property could be adjusted with the numLetters property', () => {
        const numLetters = 7;
        const game = new Game({ numLetters });
        expect(game.letters.length).to.eql(numLetters);
      });
    });

    describe('#calculateScore', () => {
      it('should return 0 if the word does not exist', () => {
        const letters = ['A', 'B', 'S'];
        const playerId = 'p1';
        const game = new Game({ letters, playerIds: [playerId] });
        expect(game.calculatePlayerScore('B', { playerId })).to.eql(0);
      });
      it('should return 3 if the word exists', () => {
        const letters = ['A', 'B', 'S'];
        const playerId = 'p1';
        const game = new Game({ letters, playerIds: [playerId] });
        expect(game.calculatePlayerScore('BAS', { playerId })).to.eql(3);
      });
    });

    describe('#isSafeInput', () => {
      it('should return false if a letter does not match the orginal letters', () => {
        const letters = lettersABC;
        const notSafeInput = 'BAD'; // D
        const game = new Game({ letters });
        expect(game.isSafeInput(notSafeInput)).to.eql(false);
      });
      it('should return true when all letters are in the orginal drawn letters', () => {
        const letters = lettersABC;
        const safeInput = 'CAB';
        const game = new Game({ letters });
        expect(game.isSafeInput(safeInput)).to.eql(true);
      });
    });
    describe('#isValidInput', () => {
      describe('basic validation, more in utils.lettersAndWords#validateWord', () => {
        it('should return false', () => {
          const letters = lettersABC;
          const game = new Game({ letters });
          expect(game.isValidInput('B')).to.eql(false);
        });
        it('should return true', () => {
          const letters = ['A', 'B', 'S'];
          const game = new Game({ letters });
          expect(game.isValidInput('BAS')).to.eql(true);
        });
      });
    });
  });
});
