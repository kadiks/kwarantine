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
  }

  attachEvents() {
    this.socket
      .on('test', (text) => console.log('on test text', text))
      .on('match.rounds', this.setRounds)
      .on('match.waitroom', this.goToWaitRoom)
      .on('match.mid.scoreboard', this.goToScoreboard)
      .on('match.next.round', this.goToNextRound)
      .on('disconnect', this.removeEvents);
  }

  goToNextRound(round) {
    console.log('>> utils/Api#goToNextRound');
    this.dispatch('match.next.round', round);
  }

  gotToScoreboard() {
    console.log('>> utils/Api#gotToScoreboard');
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
