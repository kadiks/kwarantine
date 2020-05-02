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
const { Match, MatchManager, Player } = require('./src/match');
// Domain Constants
const numRounds = 5;

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
io.on('connect', (socket) => {
  matchMgr.setIo(io);
  console.log('connected on main nsp');

  let currentMatch = matchMgr.getWaitingMatch();
  if (currentMatch === null || currentMatch.isWaiting === false) {
    const match = new Match({ id: uuid(), numRounds });
    matchMgr.addMatch(match);
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
    match.setSocket(socket);

    // Add player
    const player = new Player({
      id: playerId,
      socket,
    });
    match.addPlayer(player);
    match.attachConnectEvents(player);
    socket.on('disconnect', () => {
      // A player has disconnected, remove him
      const numPlayers = match.removeByPlayerId(player.id)
      // If removal leads to no players in game,
      if(!numPlayers){
	// remove game too
	matchMgr.removeMatchById(match.id)
	// and clean namespace
	// - Force removal of all connections, to be sure
	// - Remove all event listeners
	// - Remove reference in io object
	// There shouldn't be any remaining sockets in here
	// But we can't leak.
	Object.keys(nsp.connected).forEach( socketId => {
	  nsp.connected[socketId].disconnect();
	})
	nsp.removeAllListeners();
	delete io.nsps[ns]
      }
    })
  });
  
  socket.on('disconnect', () => {
    console.log('main disconnect');
    // TODO: check playerId and find game from that player
    // TODO: if game is empty, then kill that game
    // TODO: Use MatchManager#getMatchByPlayerId to get the match instance
  });
});

http.listen(port, () => console.log(`listening on port: ${port}`));
