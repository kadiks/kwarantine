import { Countdown } from '../core/loader';

export default ({ game, screenInfo } = {}) => {
  return (
    <div className="text-center">
      <h2>{screenInfo.name}</h2>
      <p>{screenInfo.rules}</p>
      <Countdown duration={kwa.constants.durations.GAME_PREPARE} />
    </div>
  );
};
