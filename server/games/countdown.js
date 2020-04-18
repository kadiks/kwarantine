const utils = require('../utils/')

const numLetters = 6

module.exports = class Countdown{
  constructor(){
    this.data = [... new Array(numLetters)].map(utils.random.randLetter)
  }
  getData(){
    return { name: "chiffresetdeslettres", data: { letters: this.data } }
  }
  scoreWord(word){
    return Number(utils.random.validateWord(word))
  }
}
