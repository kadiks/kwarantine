const getId = (socketId) => {
  const id = getSplit(socketId)[0];
  return id;
};

const getNamespace = (socketId) => {
  const ns = getSplit(socketId)[0];
  return ns.replace('/', '');
};

const getSplit = (socketId) => {
  return socketId.split('#');
};

const getPlayerId = getId;
const getMatchId = getNamespace;

module.exports = {
  getId,
  getNamespace,
  getMatchId,
  getPlayerId,
};
