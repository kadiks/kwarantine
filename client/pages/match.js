import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Config from '../src/Config';
import { Header, Body } from '../src/components/core/text';
import {
  ButtonGroup,
  Basic as Button,
  Link as ButtonLink,
} from '../src/components/core/button';
import { NavBar, Footer } from '../src/components/navigation';
import { Avatar } from '../src/components/player';
import { Timer } from '../src/components/match';
import Match from '../src/components/MatchComp';

import styles from '../src/utils/styles';
import Icon from '../src/components/core/Icon';

import MatchConnect from '../src/utils/MatchConnect';

class MatchPage extends React.Component {
  constructor(props) {
    super(props);
    this.matchConnect = new MatchConnect().getInstance();

    this.state = {
      game: null,
      screen: 'loading',
      screenInfo: null,
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
    await this.matchConnect.connect();
    this.matchConnect.on('match.next.round', this.startRound);

    this.matchConnect.on('match.end', (results) => {
      this.setState({
        screen: 'lastScoreboard',
        screenInfo: results,
      });
    });

    this.matchConnect.on('game.wait', () => {
      this.setState({
        screen: 'waitForOthers',
        screenInfo: null,
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
        duration: round.duration,
        screen: 'game',
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

  renderLastScoreboard() {
    const { screenInfo } = this.state;
    console.log('pages/match#renderLastScoreboard screenInfo', screenInfo);
    let total = 0;
    const results = screenInfo.map((g, index) => {
      const keys = Object.keys(g);
      const result = g[keys[0]];
      total += result.score;
      return result;
    });
    results.push({
      name: 'TOTAL',
      answer: '',
      score: total,
    });
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Jeu</th>
              <th>Réponse</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {results.map(({ name, answer, score }, index) => {
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{answer}</td>
                  <td>{score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          onClick={() => {
            this.props.router.push('/');
          }}
        >
          Back to homepage
        </button>
      </div>
    );
  }

  renderLoading() {
    return (
      <div>
        <h2>Loading front...</h2>
      </div>
    );
  }

  renderWaitForOthers() {
    return (
      <div>
        <h2>Réponse enregistrée</h2>
        <h3>En attente des autres joueurs</h3>
      </div>
    );
  }

  render() {
    // console.log('pages/match#render');
    const { game, screen, screenInfo } = this.state;
    switch (screen) {
      case 'loading':
        return this.renderLoading();
      case 'lastScoreboard':
        return this.renderLastScoreboard();
      case 'waitForOthers':
        return this.renderWaitForOthers();
    }
    console.log('game.state', game.state);
    const html = game.render();
    // console.log('game.getHtml', html);
    return (
      <div className="container">
        <div className="kwa-game-container">
          <Match game={game} screen={screen} screenInfo={screenInfo} />
        </div>
      </div>
    );
  }
}

export default withRouter(MatchPage);
