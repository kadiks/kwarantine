const { expect } = require('chai');
const Match = require('../../../src/match/Match');

describe('Match', () => {
    it('should have only one round', () => {
        const match = new Match({
            id: 'a',
            selectedGames: ['LongestWord'],
            numRounds: 1,
            maxPlayers: 1
        });

        match.addPlayer({
            id: 'p1',
            socket: null
        });
        
        
    });
});