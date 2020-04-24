/**
 * @module ConnectedEvents
 */
const events = {
  /**
   * @property {String} [S->C] After GAME_INPUT, if others players are still playing
   */
  // TODO: Check if we truly need it as it seems that it is implied by GAME_INPUT
  GAME_WAIT: 'game.wait',
  /**
   * @property {String} [S->C] To show the game explanation screen to all players
   */
  GAME_PREPARE: 'game.prepare',
  /**
   * @property {String} [C->S] When a player sends its answer to the server
   */
  GAME_INPUT: 'game.input',
  /**
   * @property {String} [C->S] When the game duration is up
   */
  // Not used for now, directly using setTimeout from server. But if there are some discrepancies, it will be used to be sent out from client to server
  GAME_TIME_UP: 'game.time.up',

  /**
   * @property {String} [S->C] When a player goes to the waitroom. Dispatch to the whole room with the current number of participants
   */
  MATCH_WAITROOM: 'match.waitroom',
  /**
   * @property {String} [S->C] Send to all players to show the current score of everyone
   */
  MATCH_MID_SCOREBOARD: 'match.mid.scoreboard',
  /**
   * @property {String} [S->C] When the game starts with all the data to be displayed
   */
  // might be changed for GAME_START
  MATCH_NEXT_ROUND: 'match.next.round',
  /**
   * @property {String} [S->C] When the match ends, usually to display the last scoreboard (then the players can stay on the page as long as they like, they will change page on their own by clicking)
   */
  MATCH_END: 'match.end',
};

module.exports = events;
