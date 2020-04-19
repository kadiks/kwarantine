import React from 'react';
import Link from 'next/link';
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
    this.setState(
      {
        game: new games[round.name]({
          ...round.data,
          socket: this.matchConnect.socket,
        }),
      },
      () => {
        this.state.game.attachEvents();
        this.state.game.on('state-updated', () => {
          //   console.log('state has been updated', state);
          this.setState({});
        });
      }
    );
  }

  renderFinalWord() {
    return this.state.game.state
      .filter((l) => l.type === 'rm-letter')
      .map(this.renderLetter);
  }

  renderLetter(letter) {
    return (
      <div
        key={letter.value.index}
        kwa-type={letter.type}
        kwa-event={letter.trigger}
        kwa-value-letter={letter.value.letter}
        kwa-value-index={letter.value.index}
      >
        {letter.value.letter}
      </div>
    );
  }

  renderPossibilities() {
    return this.state.game.state
      .filter((l) => l.type === 'add-letter')
      .map(this.renderLetter);
  }

  render() {
    const { game } = this.state;

    if (game === null) {
      return <div>Loading...</div>;
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

export default Match;
