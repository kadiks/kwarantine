const utils = require('../utils/')

const numLetters = 6

function randLetter(){
  return String.fromCodePoint(utils.randinc(65, 90))
}

module.exports = class Countdown{
  constructor(){
    this.data = [... new Array(numLetters)].map(randLetter)
  }
  getData(){
    return { name: "chiffresetdeslettres", data: { letters: this.data } }
  }
}
