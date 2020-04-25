import { Avatar } from '../player';
import { Countdown } from '../core/loader';

export default ({ game, screenInfo } = {}) => {
  return (
    <div className="text-center">
      <h2>La partie va bientôt commencer...</h2>
      <Countdown duration={5} />
      <Avatar playerId={screenInfo.playerId} />
      <ul class="list-group list-group-horizontal">
        {screenInfo.playerIds
          .filter((p) => p !== screenInfo.playerId)
          .map((playerId) => {
            return (
              <li className="list-group-item" key={playerId}>
                <Avatar playerId={playerId} size="small" />
              </li>
            );
          })}
      </ul>
    </div>
  );
};
