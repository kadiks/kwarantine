import { Presentation } from '../player';

export default ({ game, screenInfo } = {}) => {
  console.log('screenInfo', screenInfo);
  return (
    <div className="row text-center">
      <div className="col-12">
        <h2>Salle d'attente</h2>
      </div>
      <div className="col-12">
        <p>
          En attente de confinés {screenInfo.numPlayers} / {screenInfo.maxPlayers}
        </p>
      </div>
      <div className="col-12">
        <Presentation screenInfo={screenInfo} />
      </div>
    </div>
  );
};
