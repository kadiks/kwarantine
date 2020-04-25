import { Avatar } from '../player';
import { withRouter } from 'next/router';
import {
  Basic as Button,
} from '../core/button';

const LastScoreboard = (props) => {
  // console.log('cmp/match/LastScoreboard props.screenInfo', props.screenInfo);
  return (
    <div className="row">
      <div className="col-12 text-center">
        <Button
            onClick={() => {
              window.location = window.location.origin;
              // props.router.push('/');
            }}
          >
          Sortir du confinement !
        </Button>
      </div>
      {renderPlayersScore(props)}
      {renderMyScore(props)}
      <div className="col-12 text-right">
        <Button
          onClick={() => {
            window.location = window.location.origin;
            // props.router.push('/');
          }}
        >
          Sortir du confinement !
        </Button>
      </div>
    </div>
  );
};

const getScoreboardByPlayerId = (results, { playerId }) => {
  let total = 0;
  const resultsWithTotal = results.map((g) => {
    const keys = Object.keys(g);
    // console.log('playerId', playerId);
    // console.log('g', g);
    // console.log('keys', keys);
    const result = g[playerId];
    total += result.score;
    return result;
  });
  resultsWithTotal.push({
    name: 'TOTAL',
    answer: '',
    score: total,
  });
  return resultsWithTotal;
};

const renderPlayersScore = ({ game, screenInfo }) => {
  const playerIds = Object.keys(screenInfo.results[0]);
  const results = playerIds.map(playerId => {
    const resultPlayer = getScoreboardByPlayerId(screenInfo.results, { playerId }); 
    const totalPlayer = resultPlayer[resultPlayer.length - 1];
    totalPlayer.playerId = playerId;
    return totalPlayer;
  });
  const sortedResults = results.sort((a, b) =>
    b.score - a.score
  );
  // console.log('#renderPlayersScore RESULTS RESULTS', results);
  
  return (
    <div className="col-12">
    <h2>Classement final</h2>
    <table className="table table-striped">
      <thead>
        <th>N°</th>
        <th>Joueu.r.se</th>
        <th>Points</th>
      </thead>
      <tbody>
        {sortedResults.map(({ playerId, answer, score }, index) => {
          const styles = {};
          if (playerId === game.playerId) {
            styles.backgroundColor = 'black';
            styles.color = 'white';
          }
          return (
            <tr key={playerId}>
              <td style={styles}>{index + 1}</td>
              <td style={styles}><Avatar playerId={playerId} size="small" /></td>
              <td style={styles}>{score}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  );
  // const { results } = screenInfo;
  // const playerIds = Object.keys(results);
  // const resultsArr = playerIds.map((playerId) => {
  //   return {
  //     playerId,
  //     answer: results[playerId].answer,
  //     score: results[playerId].score,
  //     name: results[playerId].name,
  //   };
  // });
  // resultsArr.sort((a, b) => {
  //   return b.score - a.score;
  // });
}

const renderMyScore = ({ game, screenInfo }) => {
  const results = getScoreboardByPlayerId(screenInfo.results, {
    playerId: game.playerId
  });
  // console.log('#renderMyScore RESULTS RESULTS', results);
  return (
    <div className="col-12">
      <h4>Récapitulatif de mes scores</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Jeu</th>
            <th>Réponse</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {results.map(({ name, answer, score }, index) => {
            return (
              <tr key={index}>
                <td>{name}</td>
                <td>{answer}</td>
                <td>{score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(LastScoreboard);
