import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Config from '../../src/Config';
import { Header, Body } from '../../src/components/core/text';
import {
  ButtonGroup,
  Basic as Button,
  Link as ButtonLink,
} from '../../src/components/core/button';
import { NavBar, Footer } from '../../src/components/navigation';
import { Avatar } from '../../src/components/player';
import { Timer } from '../../src/components/match';
import Match from '../../src/components/MatchComp';

import styles from '../../src/utils/styles';
import Icon from '../../src/components/core/Icon';

import MatchConnect from '../../src/utils/MatchConnect';

class MatchPage extends React.Component {
  constructor(props) {
    super(props);
    this.matchConnect = new MatchConnect().getInstance();

    this.state = {
      game: null,
      screen: 'loading',
      duration: 0,
      screenInfo: null,
      roundNumber: 0,
    };

    this.startRound = this.startRound.bind(this);
  }

  async componentDidMount() {
    // const gameData = {
    //   name: 'LongestWord',
    //   data: {
    //     letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    //   },
    // };
    // console.log('#cmpDM');
    const evts = kwa.constants.cEvents;
    await this.matchConnect.connect();
    // TODO: chain events?
    this.matchConnect.on(evts.MATCH_WAITROOM, (room) => {
      console.log('pages/match#cmDM evts.MATCH_WAITROOM room', room);
      this.setState({
        screen: 'waitRoom',
        screenInfo: {
          playerId: this.matchConnect.playerId,
          ...room,
        },
      });
    });
    this.matchConnect.on(evts.MATCH_NEXT_ROUND, this.startRound);
    // this.matchConnect.on('match.next.round', this.startRound);

    this.matchConnect.on(evts.MATCH_END, (results) => {
      this.setState({
        screen: 'lastScoreboard',
        screenInfo: results,
      });
    });

    this.matchConnect.on(evts.GAME_WAIT, () => {
      this.setState({
        screen: 'waitForOthers',
        screenInfo: null,
      });
    });

    this.matchConnect.on(evts.MATCH_MID_SCOREBOARD, (results) => {
      this.setState({
        screen: 'scoreboard',
        screenInfo: results,
      });
    });
    this.matchConnect.on(evts.GAME_PREPARE, (instructions) => {
      this.setState({
        screen: 'gameTitle',
        screenInfo: instructions,
      });
    });
    this.matchConnect.on(evts.GAME_PRESENTATION, (playerIds) => {
      this.setState({
        screen: 'gamePresentation',
        screenInfo: {
          playerId: this.matchConnect.playerId,
          ...playerIds,
        },
      });
    });
  }

  startRound(round) {
    // console.log('pages/match#startRound round', round);
    // console.log(
    //   'pages/match#startRound this.matchConnect.playerId',
    //   this.matchConnect.playerId
    // );
    this.setState(
      {
        game: new kwa.games[round.className]({
          ...round.data,
          playerId: this.matchConnect.playerId,
          socket: this.matchConnect.socket, // might not be needed...
        }),
        duration: round.data.duration,
        screen: 'game',
        roundNumber: this.state.roundNumber + 1,
      },
      () => {
        this.state.game.attachEvents();
        this.state.game.on(kwa.constants.events.GAME_STATE_UPDATED, () => {
          //   console.log('state has been updated', state);
          this.setState({
            screen: 'game',
          });
        });
      }
    );
  }

  render() {
    // console.log('pages/match#render');
    const { game, screen, screenInfo, roundNumber } = this.state;
    console.log('pages/match#render screen', screen);
    console.log('pages/match#render screenInfo', screenInfo);
    return (
      <div className="container">
        <div className="kwa-game-container">
          <Match
            game={game}
            screen={screen}
            screenInfo={screenInfo}
            roundNumber={roundNumber}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(MatchPage);
