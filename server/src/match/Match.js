const { Dispatcher, random, Logger, updateStats } = require('../utils');
const evts = require('../constants/cEvents');
const durations = require('../constants/durations');
const Games = require('../games');
const allServerGames = Object.keys(Games).map((g) => Games[g].Server);

const logger = (level, message, opts = {}) => {
  Logger.log({
    level,
    message,
    ...opts,
    filePath: __filename.replace(process.cwd(), '').replace('/src/', ''),
  });
};

class Match extends Dispatcher {
  constructor({ id, numRounds = 14, maxPlayers = 1, selectedGames = [] } = {}) {
    super();
    logger('debug', '>> #constructor');
    this.gameOn = false;
    this.isOpenToInput = false;
    this.id = id;
    this.maxPlayers = maxPlayers;
    this.roundIndex = 0;
    this.numRounds = numRounds;
    this.games = [];
    this.rounds = [];
    this.players = [];
    this.scores = [];
    this.sockets = {};
    this.selectedGames = selectedGames;

    this.timers = {
      roundTimeUp: null,
    };

    this.handleInput = this.handleInput.bind(this);

    setTimeout(() => {
      this.maxPlayers = this.players.length;
      console.log('before startMatch');
      this.startMatch();
    }, durations.WAITROOM * 1000);
  }

  get isWaiting() {
    return this.players.length < this.maxPlayers;
  }

  /**
   * Adds a player to the room
   *
   * @param {Player} player
   */
  addPlayer(player) {
    Logger.log({
      level: 'debug',
      message: '>> #addPlayer',
      filePath: __filename.replace(process.cwd(), '').replace('/src/', ''),
    });
    logger('debug', '>> #addPlayer');
    if (this.isPlayerExists(player) === true) {
      logger('debug', '<< #addPlayer [player already exists]');
      return;
    }
    if (this.players.length < this.maxPlayers) {
      this.players.push(player);
      if (this.players.length === this.maxPlayers) {
        this.startMatch();
      } else {
        const value = {
          numPlayers: this.players.length,
          maxPlayers: this.maxPlayers,
          playerIds: this.players.map((p) => p.id),
        };
        this.sendClient(evts.MATCH_WAITROOM, {
          value,
        });
      }
    }
    logger('debug', '<< #addPlayer');
  }

  attachConnectEvents(player) {
    logger('debug', '>> #attachConnectEvents');
    player.socket.emit('test', 'okok');
    player.socket.on('game.input', this.handleInput);
    logger('debug', '<< #attachConnectEvents');
  }

  endGame() {
    // console.losg('match/Match#endGame this.games.length', this.games.length);
    clearTimeout(this.timers.roundTimeUp);
    if (this.roundIndex < this.games.length - 1) {
      this.showMidGameScoreboard();
      this.roundIndex++;
      setTimeout(() => {
        this.showGamePrepare();
        setTimeout(() => {
          this.startGame();
        }, durations.GAME_PREPARE * 1000);
      }, durations.MID_GAME_SCOREBOARD * 1000);

      return;
    }
    this.showMidGameScoreboard();
    setTimeout(() => {
      this.endMatch();
    }, durations.MID_GAME_SCOREBOARD * 1000);
  }

  endMatch() {
    const value = {
      results: this.getResults(),
      playerIds: this.players.map((p) => p.id),
    };
    this.sendClient(evts.MATCH_END, { value });
  }

  getCurrentGame() {
    return this.games[this.roundIndex];
  }

  getCurrentRound() {
    return this.rounds[this.roundIndex];
  }

  getNextRound() {
    this.roundIndex++;
    return this.getCurrentRound();
  }

  getPlayerById(playerId) {
    return this.players.find((p) => p.id === playerId) || null;
  }

  getResults() {
    return this.games.map(({ results }) => {
      // console.log('match/Match#getResults results', results);
      return results;
    });
  }

  handleInput({ input, playerId }) {
    console.log('match/Match#handleInput input', input);
    console.log('match/Match#handleInput input', playerId);
    if (this.isOpenToInput === false) {
      return;
    }
    // console.log('match/Match#handleInput playerId', playerId);
    const game = this.getCurrentGame(); // get the current round <game>Server instance
    // console.log('match/Match#handleInput this.roundIndex', this.roundIndex);
    // console.log('match/Match#handleInput game', game);
    if (game.isSafeInput(input) === false) {
      console.log(`Input [${input}] is not safe`);
      return;
    }

    // console.log('match/Match#handleInput this.socket.id', this.socket.id);
    // console.log('match/Match#handleInput playerId', playerId);
    // const playerId = utils.socket.getPlayerId(this.socket.id);
    const time = new Date().getTime() - this.currentGameStartTime;
    game.calculatePlayerScore(input, { playerId, time });
    // console.log('match/Match#handleInput game.hasAnswered.length', game.hasAnswered.length);
    // console.log('match/Match#handleInput this.maxPlayers', this.maxPlayers);
    if (game.hasAnswered.length === this.maxPlayers) {
      // console.log('match/Match#handleInput this.endGame OK');
      this.isOpenToInput = false;
      this.endGame();
      return;
    }

    this.sendClient(evts.GAME_WAIT, { playerId });
    // this.sendClient('game.wait', { playerId });
  }

  initializeGames() {
    // console.log('>> match/Match#initializeGames');
    updateStats({
      players: this.players.length,
      games: this.numRounds,
    });
    const games = [...new Array(this.numRounds)].map((_, index) => {
      const selectedGames = allServerGames.filter((a) => {
        // Gets only the game from the settings
        return this.selectedGames.includes(a.name);
      });
      return new (random.pick(selectedGames))({
        playerIds: this.players.map((p) => p.id),
      });
      // return selectedGames.map(g => new g({
      //   playerIds: this.players.map(p => p.id)
      // }));
      return new selectedGames[index]({
        playerIds: this.players.map((p) => p.id),
      });
    });
    console.log('games', games);
    const rounds = games.map((g) => g.getData());
    this.rounds = rounds;
    this.games = games;
    console.log(rounds.forEach((r) => console.log(r.className, r.data)));
    // match.setGames(selectedGames);
    // match.setRounds(rounds);
  }

  isPlayerExists(player) {
    return this.players.some((p) => p.id === player.id);
  }

  sendClient(eventName, { playerId = null, value } = {}) {
    // console.log('>> match/Match#sendClient');
    console.log('>> match/Match#sendClient eventName', eventName);
    console.log('>> match/Match#sendClient playerId', playerId);
    console.log('>> match/Match#sendClient value', value);
    // console.log('>> match/Match#sendClient this.socket.id', this.socket.id);
    // console.log('>> match/Match#sendClient this.socket.id', this.socket.id);
    if (playerId) {
      console.log('match/Match#sendClient playerId', playerId);
      const player = this.getPlayerById(playerId);
      // console.log('match/Match#sendClient player', player);
      if (player === null) {
        return;
      }
      player.socket.emit(eventName, value);
      // this.socket.to(playerId).emit(eventName, value);
      // this.sockets[playerId].emit(eventName, value);
      // this.io.to(playerId).emit(eventName, value);
      return;
    }
    if (this.socket) {
      this.socket.in(this.id).emit(eventName, value);
    }
    // this.socket.to(this.id).emit(eventName, value);
    // this.socket.emit(eventName, value);
    // this.socket.broadcast.emit(eventName, value);
  }

  startMatch() {
    console.log('>> match/Match#startMatch');
    this.gameOn = true;
    this.initializeGames();
    console.log('match/Match#startMatch after initializeGames');
    this.showGamePresentation();
    setTimeout(() => {
      this.showGamePrepare();
      setTimeout(() => {
        this.startGame();
      }, durations.GAME_PREPARE * 1000);
    }, durations.GAME_PRESENTATION * 1000);
  }

  /**
   * TODO:
   * 1 - Should have all setTimeout available from `this`
   * 2 - #stop will go through every timeout or interval and clear them
   */
  stop() {}

  // Returns the number of players remaining after ?deletion
  removeByPlayerId(playerId) {
    const ids = this.players.map((p) => p.id);
    const index = ids.indexOf(playerId);
    if (index !== -1) {
      this.players.splice(index, 1);
      if (this.gameOn) {
        this.maxPlayers--;
      }
    }
    return this.players.length;
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

  showGamePrepare() {
    const game = this.getCurrentGame();
    const value = {
      name: game.name,
      rules: game.rules,
      duration: game.duration,
    };
    this.sendClient(evts.GAME_PREPARE, { value });
  }

  showGamePresentation() {
    console.log('>> match/Match#showGamePresentation');
    const game = this.getCurrentGame();
    const value = {
      playerIds: this.players.map((p) => p.id),
    };
    this.sendClient(evts.GAME_PRESENTATION, { value });
  }

  showMidGameScoreboard() {
    const game = this.getCurrentGame();
    // console.log('server/match/Match#showMidGameScoreboard game', game);
    const value = {
      results: game.results,
      playerIds: this.players.map((p) => p.id),
    };
    this.sendClient(evts.MATCH_MID_SCOREBOARD, { value });
  }

  startGame() {
    const round = this.getCurrentRound();
    // console.log('server/match/Match#startGame round', round);
    this.currentGameStartTime = new Date().getTime();
    this.timers.roundTimeUp = setTimeout(() => {
      this.endGame();
    }, round.data.duration * 1000);
    this.sendClient(evts.MATCH_NEXT_ROUND, { value: round });
    this.isOpenToInput = true;
  }
}

module.exports = Match;
