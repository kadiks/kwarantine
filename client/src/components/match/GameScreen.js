import Timer from './Timer';
import RoundCounter from './RoundCounter';
import { Avatar } from '../player';
import React from 'react';
import { Countdown } from '../core/loader';

const GameScreen = ({ game, screenInfo, roundNumber } = {}) => {
  const html = game.render();
  return (
    <>
      <div className="row text-center">
        <div className="col-4">
          <Avatar playerId={game.playerId} />
        </div>
        <div className="col-4">
          <RoundCounter roundNumber={roundNumber} />
        </div>
        <div className="col-4">
          <Countdown duration={game.duration} />
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
};

export default GameScreen;
