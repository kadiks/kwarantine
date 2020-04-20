import fetch from 'isomorphic-unfetch';
import _ from 'lodash';
import qs from 'qs';
// import Dispatcher from '../utils/Dispatcher';
const Dispatcher = require('../utils/Dispatcher');

import Config from '../Config';

class MatchConnect extends Dispatcher {
  constructor() {
    super();
    this.socket = null;
    this.rounds = [];

    this.goToNextRound = this.goToNextRound.bind(this);
    this.goToLastScoreboard = this.goToLastScoreboard.bind(this);
    this.endMatch = this.endMatch.bind(this);
  }

  attachEvents() {
    this.socket
      .on('test', (text) => console.log('on test text', text))
      .on('match.rounds', this.setRounds)
      .on('match.waitroom', this.goToWaitRoom)
      .on('match.mid.scoreboard', this.goToScoreboard)
      // .on('match.last.scoreboard', this.goToLastScoreboard)
      .on('match.next.round', this.goToNextRound)
      .on('match.end', this.goToLastScoreboard)
      .on('disconnect', this.removeEvents);
  }

  endMatch() {
    console.log('>> utils/Api#endMatch');
    this.dispatch('match.end');
  }

  goToNextRound(round) {
    console.log('>> utils/Api#goToNextRound');
    console.log('utils/Api#goToNextRound round', round);
    this.dispatch('match.next.round', round);
  }

  gotToScoreboard() {
    console.log('>> utils/Api#gotToScoreboard');
  }

  goToLastScoreboard(results) {
    console.log('>> utils/Api#goToLastScoreboard');
    this.dispatch('match.end', results);
  }

  goToWaitRoom() {
    console.log('>> utils/Api#goToWaitRoom');
  }

  connect() {
    return new Promise((resolve) => {
      const url = Config.API_URL;
      console.log('utils/Api#connect url', url);
      const socket = io(url);
      socket.on('room', (room) => {
        console.log('utils/Api#connect room', room);
        this.socket = io(`${url}${room}`);
        this.attachEvents();
        resolve();
      });
      socket.on('disconnect', () => {
        socket.removeAllListeners();
      });
    });
  }

  removeEvents() {
    console.log('>> utils/Api#removeEvents');
    this.socket.removeAllListeners();
  }

  setRounds(rounds) {
    console.log('utils/Api#setRounds rounds', rounds);
    this.rounds = rounds;
  }
}

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = new MatchConnect();
    }
  }

  getInstance() {
    return Singleton.instance;
  }
}

module.exports = Singleton;
