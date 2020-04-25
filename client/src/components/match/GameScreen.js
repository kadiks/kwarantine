import Timer from './Timer';
import RoundCounter from './RoundCounter';
import { Avatar } from '../player';
import React from 'react';
import { Countdown } from '../core/loader';

const GameScreen = ({ game, screenInfo, roundNumber } = {}) => {
  const html = game.render();
  return (
    <div>
      <p>Game screen</p>
      <RoundCounter roundNumber={roundNumber} />
      <Countdown duration={game.duration} />
      <Avatar playerId={game.playerId} />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};

export default GameScreen;
