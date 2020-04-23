import { withRouter } from 'next/router';

const LastScoreboard = ({ screenInfo }) => {
  console.log('cmp/match/LastScoreboard screenInfo', screenInfo);
  let total = 0;
  const results = screenInfo.map((g) => {
    const keys = Object.keys(g);
    const result = g[keys[0]];
    total += result.score;
    return result;
  });
  results.push({
    name: 'TOTAL',
    answer: '',
    score: total,
  });
  return (
    <div>
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
      <button
        onClick={() => {
          this.props.router.push('/');
        }}
      >
        Back to homepage
      </button>
    </div>
  );
};

export default withRouter(LastScoreboard);
