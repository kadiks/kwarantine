const fs = require('fs');
const path = require('path');

const updateStats = ({
    players = null,
    games = null,
    matches = 1
}) => {
    if (players === null) {
        return;
    }
    // if (process.env.NODE_ENV !== 'production') {
    //     return;
    // }
    const statsPath = `${path.join(__dirname, '../../')}/stats.json`;
    // console.log('statsPath', statsPath);
    fs.readFile(statsPath, 'utf8', (err, content) => {
        if (err) {
            console.log('src/utils#updateStats Read stats.json failed');
            return;
        }
        const stats = JSON.parse(content);
        stats.players += players;
        stats.games += games;
        stats.matches += matches;
        fs.writeFile(statsPath, JSON.stringify(stats), () => {
            if (err) {
                console.log('src/utils#updateStats Write stats.json failed');
                return;
            }
        });
    });
};

module.exports = updateStats;