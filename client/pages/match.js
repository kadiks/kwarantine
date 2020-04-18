import React from 'react';
import Link from 'next/link';
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
    const gameData = {
      name: 'longestword',
      data: {
        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      },
    };
    this.game = new games[gameData.name](gameData.data);
  }

  renderFinalWord() {
    return this.game.state
      .filter((l) => l.type === 'rm-letter')
      .map(this.renderLetter);
  }

  renderLetter(letter) {
    return (
      <div key={letter.index} kwa-type={letter.type} kwa-value={letter.value}>
        {letter.value}
      </div>
    );
  }

  renderPossibilities() {
    return this.game.state
      .filter((l) => l.type === 'add-letter')
      .map(this.renderLetter);
  }

  render() {
    return (
      <div className="container">
        {this.renderFinalWord()}
        {this.renderPossibilities()}
      </div>
    );
  }
}

export default Match;
