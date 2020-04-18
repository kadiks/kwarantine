require("dotenv").config();
// General Imports & Constants
const apiversion = "0.0.1";
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = process.env.PORT;
const utils = require("./utils");
// Game Imports
const Games = require("./games");
const games = Object.keys(Games).map(g => Games[g]);
// Domain Constants
const numRounds = 1;

app.get("/api", (req, res) => {
  res.json({ name: "kwarantine", version: apiversion });
});

app.get("/api/go", (req, res) => {
  const rounds = [...new Array(numRounds)].map(() => {
    return new (utils.pick(games))();
  });
  const gameData = rounds.map(g => g.getData());
  res.json(gameData);
});

http.listen(port, () => console.log(`listening on port: ${port}`));
