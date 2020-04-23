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
    this.playerId = null;
    this.rounds = [];

    this.goToNextRound = this.goToNextRound.bind(this);
    this.goToLastScoreboard = this.goToLastScoreboard.bind(this);
    this.goToGameWait = this.goToGameWait.bind(this);
    this.endMatch = this.endMatch.bind(this);
  }

  attachEvents() {
    this.socket
      .on('test', (text) => console.log('on test text', text))
      .on('connection', () => console.log('client nsp connection'))
      .on('join', () => console.log('client nsp join'))
      .on('match.rounds', this.setRounds)
      // .on('match.waitroom', this.goToWaitRoom)
      .on(kwa.constants.cEvents.MATCH_WAITROOM, this.goToWaitRoom)
      // .on('match.mid.scoreboard', this.goToScoreboard)
      .on(kwa.constants.cEvents.MATCH_MID_SCOREBOARD, this.goToScoreboard)
      // .on('game.wait', this.goToGameWait)
      .on(kwa.constants.cEvents.GAME_WAIT, this.goToGameWait)
      // .on('match.last.scoreboard', this.goToLastScoreboard)
      // .on('match.next.round', this.goToNextRound)
      .on(kwa.constants.cEvents.MATCH_NEXT_ROUND, this.goToNextRound)
      // .on('match.end', this.goToLastScoreboard)
      .on(kwa.constants.cEvents.MATCH_END, this.goToLastScoreboard)
      .on('disconnect', this.removeEvents);
  }

  endMatch() {
    console.log('>> utils/Api#endMatch');
    this.dispatch(kwa.constants.cEvents.MATCH_END);
  }

  goToNextRound(round) {
    console.log('>> utils/Api#goToNextRound');
    // console.log('utils/Api#goToNextRound round', round);
    this.dispatch(kwa.constants.cEvents.MATCH_NEXT_ROUND, round);
  }

  gotToScoreboard() {
    console.log('>> utils/Api#gotToScoreboard');
    this.dispatch(kwa.constants.cEvents.MATCH_MID_SCOREBOARD);
  }

  goToLastScoreboard(results) {
    console.log('>> utils/Api#goToLastScoreboard');
    this.dispatch('match.end', results);
  }

  goToWaitRoom() {
    console.log('>> utils/Api#goToWaitRoom');
    this.dispatch(kwa.constants.cEvents.MATCH_WAITROOM);
  }

  goToGameWait() {
    console.log('>> utils/Api#goToGameWait');
    this.dispatch(kwa.constants.cEvents.GAME_WAIT);
  }

  connect() {
    return new Promise((resolve) => {
      const url = Config.API_URL;
      console.log('utils/Api#connect url', url);
      const socket = io(url);
      socket.on('room', (room) => {
        console.log('utils/Api#connect room', room);
        // set it from socket var as it seems in this.socket
        // it is not readily available
        this.playerId = socket.id;
        this.socket = io(`${url}${room}`);
        // console.log('utils/Api#connect socket', socket);
        // console.log('utils/Api#connect this.socket', this.socket);
        // debugger;

        // console.log('utils/Api#connect this.playerId', this.playerId);
        this.attachEvents();
        resolve();
      });
      socket.on('disconnect', () => {
        socket.removeAllListeners();
      });
    });
  }

  removeEvents() {
    // console.log('>> utils/Api#removeEvents');
    this.socket.removeAllListeners();
  }

  setRounds(rounds) {
    // console.log('>> utils/Api#setRounds');
    // console.log('utils/Api#setRounds rounds', rounds);
    this.rounds = rounds;
  }

  setSocket(socket) {
    // console.log('utils/Api#setSocket socket', socket);
    this.socket = socket;
    this.playerId = socket.id.split('#')[1];
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
