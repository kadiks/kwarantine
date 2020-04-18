// General Imports & Constants
const apiversion = "0.0.1"
const express = require('express')
const app = express()
const port = 3000
const utils = require('./utils')
// Game Imports
const Countdown = require('./games/countdown.js')
const games = [ Countdown ]
// Domain Constants
const numRounds = 1


app.get('/api', (req, res) => {
  res.json({"name": "kwarantine", "version": apiversion})
})


app.get('/api/go', (req, res) => {
  const rounds = [... new Array(numRounds)].map( () => {
    return new (utils.pick(games))}
  )
  const gameData = rounds.map( g => g.getData() )
  res.json(gameData)
})


app.listen(port, () => console.log('listening'))
