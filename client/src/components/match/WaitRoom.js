import { Avatar } from '../player';

export default ({ game, screenInfo } = {}) => {
  console.log('screenInfo', screenInfo);
  return (
    <div>
      <p>Wait Room</p>
      <p>
        En attente de joueurs {screenInfo.numPlayers} / {screenInfo.maxPlayers}
      </p>
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