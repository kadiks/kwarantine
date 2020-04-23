import { Plain as Loader } from './core/loader';
import {
  LastScoreboard,
  Scoreboard,
  WaitForOthers,
  GameTitle,
  GameScreen,
} from './match';

export default ({ game, screen, screenInfo } = {}) => {
  return (
    <div className="container">
      <div className="kwa-game-container">
        {renderScreen(screen, { game, screenInfo })}
      </div>
    </div>
  );
};

const renderScreen = (screen, props) => {
  if (screen === 'loading') {
    return <Loader />;
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
  if (screen === 'game') {
    return <GameScreen {...props} />;
  }
  return (
    <div>
      <p>Unrecognized screen: {screen}</p>
    </div>
  );
};
