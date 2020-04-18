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

io.on("connection", socket => {
  const rounds = [...new Array(numRounds)].map(_ => {
    return new (utils.pick(games))();
  });
  const gameData = rounds.map(g => g.getData());
  // put namespaces in array, with uuid instead of fake
  const ns = "/fake";
  io.emit("room", ns);
});

nsp.on("connection", function(socket) {
  // deal with user connection
});

nsp.on("input", function(socket) {
  // deal with input.
});

http.listen(port, () => console.log(`listening on port: ${port}`));
