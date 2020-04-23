import Timer from './Timer';
import { Avatar } from '../player';
import React from 'react';

const GameScreen = ({ game, screenInfo } = {}) => {
  const html = game.render();
  return (
    <div>
      <p>Game screen</p>
      <Timer duration={game.duration} />
      <Avatar playerId={game.ptrilayerId} />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};

export default GameScreen;
