import { Avatar } from '../player';
import { Countdown } from '../core/loader';

export default ({ game, screenInfo } = {}) => {
  const { results } = screenInfo;
  // const playerIds = Object.keys(results);
  // const resultsArr = playerIds.map((playerId) => {
  //   return {
  //     playerId,
  //     answer: results[playerId].answer,
  //     score: results[playerId].score,
  //     name: results[playerId].name,
  //   };
  // });
  results.sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <div className="row">
      <div className="col-10">
        <h2>Classement intermédiaire</h2>
      </div>
      <div className="col-2">
        <Countdown duration={10} />
      </div>
      <table className="table table-striped">
        <thead>
          <th>N°</th>
          <th>Joueu.r.se</th>
          <th>Réponse</th>
          <th>Temps</th>
          <th>Points</th>
        </thead>
        <tbody>
          {results.map(({
            playerId,
            answerDisplay,
            score,
            time
          }, index) => {
            const styles = {};
            if (playerId === game.playerId) {
              styles.backgroundColor = 'black';
              styles.color = 'white';
            }
            return (
              <tr key={playerId}>
                <td style={styles}>{index + 1}</td>
                <td style={styles}>
                  <Avatar playerId={playerId} size="small" />
                </td>
                <td style={styles}>{answerDisplay}</td>
                <td style={styles}>{(time * 0.001).toFixed(3)} s</td>
                <td style={styles}>{score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
