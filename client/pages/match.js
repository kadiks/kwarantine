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

import styles from '../src/utils/styles';
import Icon from '../src/components/core/Icon';

import MatchConnect from '../src/utils/MatchConnect';

class Match extends React.Component {
  constructor(props) {
    super(props);
    this.matchConnect = new MatchConnect().getInstance();

    this.state = {
      game: null,
      currentPage: 'loading',
      pageInfo: null,
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
    console.log('#cmpDM');
    await this.matchConnect.connect();
    this.matchConnect.on('match.next.round', this.startRound);

    this.matchConnect.on('match.end', (results) => {
      this.setState({
        currentPage: 'lastScoreboard',
        pageInfo: results,
      });
    });

    // const url = `${Config.API_URL}/api/go`;

    // this.setState(
    //   {
    //     game: new games[gameData.name]({
    //       ...gameData.data,
    //       socket: MatchConnect.socket,
    //     }),
    //   },
    //   () => {
    //     this.state.game.attachEvents();
    //     this.state.game.on('state-updated', () => {
    //       //   console.log('state has been updated', state);
    //       this.setState({});
    //     });
    //   }
    // );
  }

  startRound(round) {
    console.log('pages/match#startRound round', round);
    this.setState(
      {
        game: new games[round.className]({
          ...round.data,
          socket: this.matchConnect.socket,
        }),
        currentPage: 'game',
      },
      () => {
        this.state.game.attachEvents();
        this.state.game.on('state-updated', () => {
          //   console.log('state has been updated', state);
          this.setState({
            currentPage: 'game',
          });
        });
      }
    );
  }

  renderLastScoreboard() {
    const { pageInfo } = this.state;
    console.log('pages/match#renderLastScoreboard pageInfo', pageInfo);
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
            {pageInfo.map((g, index) => {
              const keys = Object.keys(g);
              const { name, answer, score } = g[keys[0]];
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

  render() {
    console.log('pages/match#render');
    const { game, currentPage } = this.state;

    if (game === null) {
      return <div>Loading...</div>;
    }
    if (currentPage === 'loading') {
      return <div>Loading front...</div>;
    }
    if (currentPage === 'lastScoreboard') {
      return this.renderLastScoreboard();
    }
    console.log('game.state', game.state);
    const html = game.render();
    // console.log('game.getHtml', html);
    return (
      <div className="container">
        <div className="kwa-game-container">
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </div>
    );
  }
}

export default withRouter(Match);
