require('dotenv').config();
// General Imports & Constants
const apiversion = '0.0.1';
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;
const utils = require('./utils');
const browserify = require('browserify-middleware');
// Game Imports
const Games = require('./games');
const games = Object.keys(Games).map((g) => Games[g]);
// Domain Constants
const numRounds = 1;

if (process.env.NODE_ENV !== 'prod') {
  app.use(cors());
}

app.get('/api', (req, res) => {
  res.json({ name: 'kwarantine', version: apiversion });
});

app.get('/api/go', (req, res) => {
  const rounds = [...new Array(numRounds)].map(() => {
    return new (utils.pick(games))();
  });
  const gameData = rounds.map((g) => g.getData());
  res.json(gameData);
});

app.use(
  '/assets/games.js',
  browserify(__dirname + '/games/index.js', { standalone: 'games' })
);

app.listen(port, () => console.log(`listening on port: ${port}`));
