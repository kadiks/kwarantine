const utils = require('../utils');

class Match extends utils.Dispatcher {
  constructor({ id, maxPlayers = 1 } = {}) {
    super();
    this.id = id;
    this.maxPlayers = maxPlayers;
    this.roundIndex = -1;
    this.games = [];
    this.rounds = [];
    this.players = [];
    this.scores = [];
    this.socket = null;

    this.handleInput = this.handleInput.bind(this);
  }

  get isWaiting() {
    return this.players.length < this.maxPlayers;
  }

  addPlayer(playerId) {
    if (this.isPlayerIdExists(playerId) === true) {
      return;
    }
    if (this.players.length < this.maxPlayers) {
      this.players.push(playerId);
      if (this.players.length === this.maxPlayers) {
        const round = this.getNextRound();
        this.sendClient('match.next.round', round);
      }
    }
  }

  attachConnectEvents() {
    this.socket.emit('test', 'okok');
    this.socket.on('game.input', this.handleInput);
  }

  endGame() {
    console.log('match/Match#endGame this.roundIndex', this.roundIndex);
    console.log('match/Match#endGame this.games.length', this.games.length);
    if (this.roundIndex < this.games.length - 1) {
      const round = this.getNextRound();
      this.sendClient('match.next.round', round);
      return;
    }
    this.endMatch();
  }

  endMatch() {
    this.sendClient('match.end', this.getResults());
  }

  getNextRound() {
    this.roundIndex++;
    return this.rounds[this.roundIndex];
  }

  getPlayerById(playerId) {}

  getResults() {
    return this.games.map((g) => g.results);
  }

  handleInput(input) {
    // console.log('match/Match#handleInput this.games', this.games);
    const game = this.games[this.roundIndex]; // get the current round <game>Server instance
    console.log('match/Match#handleInput this.roundIndex', this.roundIndex);
    console.log('match/Match#handleInput game', game);
    if (game.isSafeInput(input) === false) {
      console.log('Input is not safe');
      return;
    }

    console.log('match/Match#handleInput this.socket.id', this.socket.id);
    const playerId = utils.socket.getPlayerId(this.socket.id);
    const score = game.calculatePlayerScore(input, { playerId });
    this.endGame();
  }

  isPlayerIdExists(playerId) {
    return this.players.includes(playerId);
  }

  sendClient(eventName, value) {
    this.socket.emit(eventName, value);
    this.socket.broadcast.emit(eventName, value);
  }

  setGames(games) {
    this.games = games;
  }

  setRounds(rounds) {
    this.rounds = rounds;
  }

  setSocket(socket) {
    this.socket = socket;
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
