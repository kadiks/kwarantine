import { Plain as Loader } from './core/loader';
import {
  LastScoreboard,
  Scoreboard,
  WaitForOthers,
  WaitRoom,
  GameTitle,
  GameScreen,
  GamePresentation,
} from './match';

export default ({ game, screen, screenInfo, roundNumber } = {}) => {
  return (
    <div className="container">
      <div className="kwa-game-container">
        {renderScreen(screen, { game, screenInfo, roundNumber })}
      </div>
    </div>
  );
};

const renderScreen = (screen, props) => {
  if (screen === 'loading') {
    return <Loader />;
  }
  if (screen === 'waitRoom') {
    return <WaitRoom {...props} />;
  }
  if (screen === 'scoreboard') {
    return <Scoreboard {...props} />;
  }
  if (screen === 'lastScoreboard') {
    return <LastScoreboard {...props} />;
  }
  if (screen === 'gameTitle') {
    return <GameTitle {...props} />;
  }
  if (screen === 'waitForOthers') {
    return <WaitForOthers {...props} />;
  }
  if (screen === 'gamePresentation') {
    return <GamePresentation {...props} />;
  }
  if (screen === 'game') {
    return <GameScreen {...props} />;
  }
  return (
    <div>
      <p>Unrecognized screen: {screen}</p>
    </div>
  );
};
