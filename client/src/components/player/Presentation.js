import { Avatar } from '../player';

export default ({ screenInfo }) => {
    return (
        <div className="player-presentation mx-auto">
            <Avatar playerId={screenInfo.playerId} />
            <ul class="list-group list-group-horizontal mx-auto">
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
}