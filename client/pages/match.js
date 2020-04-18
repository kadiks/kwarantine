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

class Match extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: null,
    };
  }

  async componentDidMount() {
    // const gameData = {
    //   name: 'LongestWord',
    //   data: {
    //     letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    //   },
    // };
    const url = `${Config.API_URL}/api/go`;
    // console.log('url', url);
    const res = await fetch(url);
    const matchData = await res.json();
    const gameData = matchData[0];

    this.setState(
      {
        game: new games[gameData.name](gameData.data),
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
    const html = game.getHtml();
    console.log('game.getHtml', html);
    return (
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    );
  }
}

export default Match;
