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
    this.evts = null;

    this.goToGamePresentation = this.goToGamePresentation.bind(this);
    this.goToLastScoreboard = this.goToLastScoreboard.bind(this);
    this.goToScoreboard = this.goToScoreboard.bind(this);
    this.goToNextRound = this.goToNextRound.bind(this);
    this.goToGameTitle = this.goToGameTitle.bind(this);
    this.goToGameWait = this.goToGameWait.bind(this);
    this.onWaitRoom = this.onWaitRoom.bind(this);
    this.endMatch = this.endMatch.bind(this);
  }

  attachEvents() {
    this.socket
      .on('test', (text) => console.log('on test text', text))
      .on('connection', () => console.log('client nsp connection'))
      .on('join', () => console.log('client nsp join'))
      .on('match.rounds', this.setRounds)
      // .on('match.waitroom', this.goToWaitRoom)
      .on(this.evts.MATCH_WAITROOM, this.onWaitRoom)
      // .on('match.mid.scoreboard', this.goToScoreboard)
      .on(this.evts.GAME_PREPARE, this.goToGameTitle)
      .on(this.evts.MATCH_MID_SCOREBOARD, this.goToScoreboard)
      // .on('game.wait', this.goToGameWait)
      .on(this.evts.GAME_WAIT, this.goToGameWait)
      .on(this.evts.GAME_PRESENTATION, this.goToGamePresentation)
      // .on('match.last.scoreboard', this.goToLastScoreboard)
      // .on('match.next.round', this.goToNextRound)
      .on(this.evts.MATCH_NEXT_ROUND, this.goToNextRound)
      // .on('match.end', this.goToLastScoreboard)
      .on(this.evts.MATCH_END, this.goToLastScoreboard)
      .on('disconnect', this.removeEvents);
  }

  endMatch() {
    console.log('>> utils/Api#endMatch');
    this.dispatch(this.evts.MATCH_END);
  }

  goToNextRound(round) {
    console.log('>> utils/Api#goToNextRound');
    // console.log('utils/Api#goToNextRound round', round);
    this.dispatch(this.evts.MATCH_NEXT_ROUND, round);
  }

  goToGamePresentation(playerIds) {
    console.log('>> utils/Api#goToGamePresentation');
    // console.log('utils/Api#goToNextRound round', round);
    this.dispatch(this.evts.GAME_PRESENTATION, playerIds);
  }

  goToScoreboard(results) {
    console.log('>> utils/Api#gotToScoreboard');
    this.dispatch(this.evts.MATCH_MID_SCOREBOARD, results);
  }

  goToLastScoreboard(results) {
    console.log('>> utils/Api#goToLastScoreboard');
    this.dispatch(this.evts.MATCH_END, results);
    // this.socket.disconnect();
  }

  goToGameTitle(instructions) {
    console.log('>> utils/Api#goToGameTitle');
    this.dispatch(this.evts.GAME_PREPARE, instructions);
  }

  onWaitRoom(room) {
    console.log('>> utils/Api#onWaitRoom');
    console.log('utils/Api#onWaitRoom room', room);
    this.dispatch(this.evts.MATCH_WAITROOM, room);
  }

  goToGameWait() {
    console.log('>> utils/Api#goToGameWait');
    this.dispatch(this.evts.GAME_WAIT);
  }

  connect() {
    return new Promise((resolve) => {
      this.evts = kwa.constants.cEvents;
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
        console.log('socket on disconnect');
        socket.removeAllListeners();
      });
    });
  }

  removeEvents() {
    console.log('>> utils/Api#removeEvents');
    // this.socket.removeAllListeners();
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
