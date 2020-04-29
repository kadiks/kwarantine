require('dotenv').config();
// General Imports & Constants
const fs = require('fs-extra');
const apiversion = '0.0.1';
const express = require('express');
const cors = require('cors');
const app = express();
const sslOpts = {
  // key: fs.readFileSync('./certs/private.key'),
  // cert: fs.readFileSync('./certs/certificate.crt'),
  // ca: fs.readFileSync('./certs/ca_bundle.crt'),
  key: fs.readFileSync('./certs/privkey.pem'),
  cert: fs.readFileSync('./certs/cert.pem'),
  ca: fs.readFileSync('./certs/chain.pem'),
};
const http = require('http');
const https = require('https');
const isHttpOnly = process.env.IS_HTTP_ONLY || false;
let env = isHttpOnly ? 'dev' : process.env.NODE_ENV || 'dev';
const port = process.env.PORT || 3000;
const portSsl = process.env.PORT_SSL || 3000;

let server;

if (env === 'production') {
  server = https.createServer(sslOpts, app);
} else {
  server = http.createServer(app);
}
const io = require('socket.io')(server);

const utils = require('./src/utils');
const browserify = require('browserify-middleware');
const { uuid } = require('uuidv4');
// Match imports
const { Match, MatchManager, Player } = require('./src/match');

const matchMgr = new MatchManager().getInstance();

if (env === 'production') {
  // https://stackoverflow.com/a/49176816
  app.use(function (req, res, next) {
    if (req.secure) {
      // request was via https, so do no special handling
      next();
    } else {
      // request was via http, so redirect to https
      res.redirect('https://' + req.headers.host + req.url);
    }
  });
} else {
  app.use(cors());
}

app.get('/api/stats', async (req, res) => {
  const statsPath = `${__dirname}/stats/all.json`;
  // console.log('server/index statsPath', statsPath);

  const content = await fs.readFile(statsPath, 'utf8');
  const stats = JSON.parse(content);
  res.json(stats);
});

app.use(
  '/assets/games.js',
  browserify(__dirname + '/src/games/client_bundler.js', {
    standalone: 'games',
  })
);

app.use('/', express.static('public'));

const loadSettings = async () => {
  const settingsFilename = process.env.NODE_ENV !== 'production' ? 'settings_dev' : 'settings';
  const content = await fs.readFile(`./${settingsFilename}.json`, 'utf8');
  const settings = JSON.parse(content);

  // console.log('#loadSettings settings', settings);
  
  return {
    selectedGames: settings.games,
    numRounds: settings.numRounds,
    maxPlayers: settings.maxPlayers
  };
};

// Connects from the host.com/match page
io.on('connect', async (socket) => {
  matchMgr.setIo(io);
  console.log('connected on main nsp');

  let currentMatch = matchMgr.getWaitingMatch();
  // console.log('currentMatch', currentMatch);
  if (currentMatch === null || currentMatch.isWaiting === false) {
    const { selectedGames, numRounds, maxPlayers } = await loadSettings();
    const match = new Match({
      id: uuid(),
      numRounds,
      selectedGames,
      maxPlayers
    });
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
    // console.log('socket.id', socket.id);
    // console.log('matchId', matchId);
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
      const numPlayers = match.removeByPlayerId(player.id);
      // If removal leads to no players in game,
      if (!numPlayers) {
        // remove game too
        matchMgr.removeMatchById(match.id);
        // and clean namespace
        // - Force removal of all connections, to be sure
        // - Remove all event listeners
        // - Remove reference in io object
        // There shouldn't be any remaining sockets in here
        // But we can't leak.
        Object.keys(nsp.connected).forEach((socketId) => {
          nsp.connected[socketId].disconnect();
        });
        nsp.removeAllListeners();
        delete io.nsps[ns];
      }
    });
  });

  socket.on('disconnect', () => {
    console.log('main disconnect');
    // TODO: check playerId and find game from that player
    // TODO: if game is empty, then kill that game
    // TODO: Use MatchManager#getMatchByPlayerId to get the match instance
  });
});

if (env === 'production') {
  http.createServer(app).listen(port);
  server.listen(portSsl, () => {
    console.log('Server started on port SSL:', portSsl, 'and port:', port);
  });
} else {
  server.listen(port, () => {
    console.log('Server started on port:', port);
  });
}

// http.createServer(app);
// http.listen(port, () => console.log(`listening on port: ${port}`));
