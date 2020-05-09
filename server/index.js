require('dotenv').config();
// General Imports & Constants
const fs = require('fs-extra');
const apiversion = '0.0.1';
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
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

require('./src/utils/lettersAndWords.js')

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

const logger = require('./src/utils/Logger');

const beaverLogger = require('beaver-logger/server');

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

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(beaverLogger.expressEndpoint({
 
  // URI to recieve logs at
  uri: '/api/log',
  logger: {
    log: (req, level, event, payload) => {
      // console.log('BEAVER', level, event, payload);
      const logInfo = Object.assign({}, payload);
      delete logInfo.timestamp;
      logger.log({
        level,
        ...logInfo,
        origin: 'client'
      });
    }
  }
  // logger: (a, b, c, d) => {
  //   console.log('BEAVER', a, b, c, d);
  // }

  // Custom logger (optional, by default logs to console)
  // logger: myLogger,

  // Enable cross-origin requests to your logging endpoint
  // enableCors: false
}));

app.use('/', express.static('public'));

app.use(
  '/assets/games.js',
  browserify(__dirname + '/src/games/client_bundler.js', {
    standalone: 'games',
  })
);

app.get('/api/stats', async (req, res) => {
  const statsPath = `${__dirname}/stats/all.json`;
  // console.log('server/index statsPath', statsPath);

  const content = await fs.readFile(statsPath, 'utf8');
  const stats = JSON.parse(content);
  res.json(stats);
});

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
  // console.log('connect socket.id', socket.id);
  logger.log({
    level: 'http',
    message: `Main connect on socket ID: [${socket.id}]`
  });

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

    logger.log({
      level: 'verbose',
      message: `New match created. Match ID: [${match.id}]`
    });
  }

  currentMatch.setSocket(io);

  socket.join(currentMatch.id, () => {
    // utils.socket.getRoom(socket);
    const playerId = socket.id;
    // Add player
    const player = new Player({
      id: playerId,
      socket,
    });
    currentMatch.addPlayer(player);
    currentMatch.attachConnectEvents(player);

    logger.log({
      level: 'verbose',
      message: `Player [ID=${playerId}] has been added to match [ID=${currentMatch.id}]`
    });
  })

  socket.on('disconnect', () => {
    // console.log('main disconnect socket', socket.id);
    logger.log({
      level: 'http',
      message: `Main disconnect on socket ID: [${socket.id}]`
    });
    const playerId = socket.id;
    // Get match from player id
    const match = matchMgr.getMatchByPlayerId(playerId);
    // console.log('match', match);
    // const match = matchMgr.gettMatchById(matchId);
    // A player has disconnected, remove him
    const numPlayers = match.removeByPlayerId(playerId);
    // If removal leads to no players in game,
    if (!numPlayers) {
      // remove game too
      logger.log({
        level: 'verbose',
        message: `Match deleted. ID [${match.id}]`
      });
      matchMgr.removeMatchById(match.id);
    }
    // TODO: check playerId and find game from that player
    // TODO: if game is empty, then kill that game
    // TODO: Use MatchManager#getMatchByPlayerId to get the match instance
  });
});

if (env === 'production') {
  http.createServer(app).listen(port);
  server.listen(portSsl, () => {
    // console.log('Server started on port SSL:', portSsl, 'and port:', port);
    logger.log({
      level: 'info',
      message: `Server started on port SSL: ${portSsl} and port: ${port}`
    });
  });
} else {
  server.listen(port, () => {
    // console.log('Server started on port:', port);
    logger.log({
      level: 'info',
      message: `Server started on port: ${port}`
    });
  });
}

// http.createServer(app);
// http.listen(port, () => console.log(`listening on port: ${port}`));
