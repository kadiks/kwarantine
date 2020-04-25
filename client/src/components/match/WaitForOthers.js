import { Router } from "next/router"

export default ({ game, screenInfo } = {}) => {
  return (
    <div className="row text-center">
      <div className="col-12">
        <h2>Quelle rapidité !</h2>
      </div>
      <div className="col-12">
        <p>Nous allons attendre les autres confinés avant de divulguer vos points</p>
      </div>
    </div>
  );
};
