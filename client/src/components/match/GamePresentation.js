import { Presentation } from '../player';
import { Countdown } from '../core/loader';

export default ({ game, screenInfo } = {}) => {
  return (
    <div className="row text-center">
      <div className="col-12 mb-3">
        <h2>La quarantaine va bientôt commencer...</h2>
      </div>
      <div className="col-12 mb-5">
        <Presentation screenInfo={screenInfo} />
      </div>
      <div className="col-12">
        <Countdown duration={5} />
      </div>
    </div>
  );
};
