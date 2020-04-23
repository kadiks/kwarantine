require('dotenv').config();
// General Imports & Constants
const apiversion = '0.0.1';
const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT;
const utils = require('./src/utils');
const browserify = require('browserify-middleware');
const { uuid } = require('uuidv4');
// Match imports
const { Match, MatchManager } = require('./src/match');
// Game Imports
const Games = require('./src/games');
const games = Object.keys(Games).map((g) => Games[g].Server);
// Domain Constants
const numRounds = 3;

const matchMgr = new MatchManager().getInstance();

if (process.env.NODE_ENV !== 'prod') {
  app.use(cors());
}

app.get('/api', (req, res) => {
  res.json({ name: 'kwarantine', version: apiversion });
});

app.get('/api/go', (req, res) => {
  const rounds = [...new Array(numRounds)].map(() => {
    return new (utils.random.pick(games))();
  });
  const gameData = rounds.map((g) => g.getData());
  res.json(gameData);
});

app.use(
  '/assets/games.js',
  browserify(__dirname + '/src/games/client_bundler.js', {
    standalone: 'games',
  })
);

// Connects from the host.com/match page
io.on('connection', (socket) => {
  matchMgr.setIo(io);
  console.log('connected on main nsp');

  let currentMatch = matchMgr.getWaitingMatch();
  if (currentMatch === null || currentMatch.isWaiting === false) {
    const match = new Match({ id: uuid() });
    matchMgr.addMatch(match);

    // TODO: create MatchManager#generateRounds()
    const selectedGames = [...new Array(numRounds)].map((_) => {
      return new (utils.random.pick(games))();
    });
    const rounds = selectedGames.map((g) => g.getData());
    match.setGames(selectedGames);
    match.setRounds(rounds);
    currentMatch = match;
  }

  const ns = `/${currentMatch.id}`;
  socket.emit('room', ns);

  const nsp = io.of(ns);
  nsp.on('connection', function (socket) {
    // deal with nsp user connection
    console.log('connected on specific nsp');
    console.log('nsp on connection socket.id', socket.id);
    const socketIdSplitted = socket.id.split('#');
    const matchId = socketIdSplitted[0].replace('/', '');
    const playerId = socketIdSplitted[1];
    const match = matchMgr.getMatchById(matchId);
    // console.log('socket.id', socket.id);
    console.log('matchId', matchId);
    match.setSocket(socket);
    match.attachConnectEvents();

    // Add player
    match.addPlayer(playerId);
  });
  socket.on('disconnect', () => {
    console.log('main disconnect');
    // TODO: check playerId and find game from that player
    // TODO: if game is empty, then kill that game
    // TODO: Use MatchManager#getMatchByPlayerId to get the match instance
  });
});

http.listen(port, () => console.log(`listening on port: ${port}`));
