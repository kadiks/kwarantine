/**
 * @singleton
 * Contains all the matches of the application
 * https://medium.com/@maheshkumawat_83392/node-js-design-patterns-singleton-pattern-series-1-1e0ab71e3edf
 */

const _ = require('lodash');

class MatchManager {
  constructor() {
    this.waitingMatchId = null;
    this.matches = [];
  }
  /**
   * Every match is added in this.matches this way
   * {
   *   id: <socket.namespace id>,
   *   match: <Match instance>
   * }
   */
  addMatch(match) {
    const { id } = match;
    if (this.isMatchIdExists(id) === true) {
      return;
    }
    this.waitingMatchId = id;
    this.matches.push({
      id,
      match,
    });
  }

  /**
   * Gets a match from its Socket namespace ID
   * @param {String} matchId
   *
   * @returns {Match}
   */
  getMatchById(matchId) {
    let match = null;
    const ms = this.matches;

    for (let index = 0; index < ms.length; index++) {
      if (ms[index].id === matchId) {
        match = ms[index];
        break;
      }
    }
    return match.match;
  }

  getMatchByPlayerId(playerId) {
    let match = null;
    const ms = this.matches;

    for (let index = 0; index < ms.length; index++) {
      if (ms[index].players.includes(playerId)) {
        match = ms[index];
        break;
      }
    }
    return match.match;
  }

  getWaitingMatch() {
    if (this.waitingMatchId === null) {
      return null;
    }
    return this.getMatchById(this.waitingMatchId);
  }

  isMatchIdExists(matchId) {
    return this.matches.some((m) => m.id === matchId);
  }

  removeMatchById(matchId) {
    const ms = this.matches;

    for (let index = 0; index < ms.length; index++) {
      if (ms[index].id === matchId) {
        ms.splice(index, 1);
        break;
      }
    }
  }

  setIo(io) {
    this.io = io;
  }
}

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = new MatchManager();
    }
  }

  getInstance() {
    return Singleton.instance;
  }
}

module.exports = Singleton;
