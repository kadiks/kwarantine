class Player {
      /**
   * @namespace Player
   * @memberof Match
   *
   * @param {Object} params
   * @param {String} params.id Player ID
   * @param {SocketIO} params.socket Socket connected to that player
   */
    constructor({id = 'p1', name = '', socket} = {}) {
        this.socket = socket;
        this.id = id;
        this.name = name;
        /**
         * @property {String}
         */
        this.matchId = null;
    }

    setMatchId(matchId) {
        this.matchId = matchId;
    }

    setName(name) {
        this.name = name;
    }
}

module.exports = Player;