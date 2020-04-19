require('dotenv').config();
// General Imports & Constants
const apiversion = '0.0.1';
const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT;
const utils = require('./utils');
const browserify = require('browserify-middleware');
const { uuid } = require('uuidv4');
// Match imports
const { Match, MatchManager } = require('./match');
// Game Imports
const Games = require('./games');
const games = Object.keys(Games).map((g) => Games[g]);
// Domain Constants
const numRounds = 1;

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
  browserify(__dirname + '/games/index.js', { standalone: 'games' })
);

// Connects from the host.com/match page
io.on('connection', (socket) => {
  matchMgr.setIo(io);
  console.log('connected on main nsp');

  // console.log(
  //   'server/index matchMgr.matches.length #1',
  //   matchMgr.matches.length
  // );

  const playerId = socket.id; // remove ns from user id
  let currentMatch = matchMgr.getWaitingMatch();
  // console.log('currentMatch === null', currentMatch === null);
  // console.log(
  //   'currentMatch.isWaiting === true',
  //   currentMatch.isWaiting === true
  // );
  if (currentMatch === null || currentMatch.isWaiting === false) {
    const match = new Match({ id: uuid() });
    matchMgr.addMatch(match);
    const selectedGames = [...new Array(numRounds)].map((_) => {
      return new (utils.random.pick(games))();
    });
    const rounds = selectedGames.map((g) => g.getData());
    match.setRounds(rounds);
    currentMatch = match;
  }
  // console.log(
  //   'server/index matchMgr.matches.length #2',
  //   matchMgr.matches.length
  // );
  // console.log('server/index currentMatch', currentMatch);

  // console.log(
  //   'server/index matchMgr.matches.length #4',
  //   matchMgr.matches.length
  // );
  currentMatch.addPlayer(playerId);
  // console.log(
  //   'server/index matchMgr.matches.length #5',
  //   matchMgr.matches.length
  // );

  // Found this: https://socket.io/docs/rooms-and-namespaces/, tried to implement it
  // let me know if that works for you
  // put namespaces in array, with uuid instead of fake
  const ns = `/${currentMatch.id}`;
  socket.emit('room', ns);

  const nsp = io.of(ns);
  nsp.on('connection', function (socket) {
    // deal with nsp user connection
    console.log('connected on specific nsp');
    console.log('nsp on connection socket.id', socket.id);
    const matchId = socket.id.split('#')[0].replace('/', '');
    const match = matchMgr.getMatchById(matchId);
    match.on('filled', (id) => {
      console.log('FILLEED');
      console.log('server/index match.on filled id', id);
      const round = match.getNextRound();
      setTimeout(() => {
        socket.emit('match.next.round', round);
        socket.broadcast.emit('match.next.round', round);
      }, 1000);
    });
    socket.emit('test', 'okok');
    socket.on('game.input', function (input) {
      // deal with input.
      console.log('socket game.input', a);
    });
  });
});

http.listen(port, () => console.log(`listening on port: ${port}`));
