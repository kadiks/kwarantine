const { Dispatcher } = require('../utils');

class Match extends Dispatcher {
  constructor({ id, maxPlayers = 2 } = {}) {
    super();
    this.id = id;
    this.maxPlayers = maxPlayers;
    this.roundIndex = -1;
    this.rounds = [];
    this.players = [];
    this.scores = [];
  }

  get isWaiting() {
    return this.players.length < this.maxPlayers;
  }

  addPlayer(playerId) {
    // console.log('>> match/Match#addPlayer');
    // console.log('match/Match#addPlayer playerId', playerId);
    // console.log('match/Match#addPlayer this.players', this.players);
    // console.log(
    //   'match/Match#addPlayer this.players.length',
    //   this.players.length
    // );
    if (this.isPlayerIdExists(playerId) === true) {
      return;
    }
    if (this.players.length < this.maxPlayers) {
      //   console.log('match/Match#addPlayer adding player', this.players);
      this.players.push(playerId);
      //   console.log('match/Match#addPlayer added player', this.players);
      if (this.players.length === this.maxPlayers) {
        // console.log('match/Match#addPlayer GOING TO DISPATCH');
        this.dispatch('filled', this.id);
      }
    }
  }

  getNextRound() {
    this.roundIndex++;
    return this.rounds[this.roundIndex];
  }

  getPlayerById(playerId) {}

  isPlayerIdExists(playerId) {
    return this.players.includes(playerId);
  }

  setRounds(rounds) {
    this.rounds = rounds;
  }

  removeByPlayerId(playerId) {
    const index = this.players.indexOf(playerId);
    if (index < 0) {
      return;
    }
    this.players.splice(index, 1);
  }
}

module.exports = Match;
