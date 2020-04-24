export default ({ game, screenInfo } = {}) => {
  return (
    <div className="text-center">
      <h2>{screenInfo.name}</h2>
      <p>{screenInfo.rules}</p>
    </div>
  );
};
