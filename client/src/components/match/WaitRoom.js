export default ({ game, screenInfo } = {}) => {
    console.log('screenInfo', screenInfo);
    return (
      <div>
        <p>Wait Room</p>
        <p>En attente de joueurs {screenInfo.numPlayers} / {screenInfo.maxPlayers}</p>
      </div>
    );
  };
  