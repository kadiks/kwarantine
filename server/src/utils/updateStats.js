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
    const statsFolderPath = `${path.join(__dirname, '../../')}/stats`;
    const statsPath = `${statsFolderPath}/all.json`;
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

    const today = (new Date()).toISOString().split('T')[0];
    const statsTodayPath = `${statsFolderPath}/daily_${today}.json`;
    fs.exists(statsTodayPath, (isExist) => {
        if (isExist === false) {
            try {
                fs.writeFileSync(statsTodayPath, '{"players":0,"games":0,"matches":0}', 'utf8');
            } catch(e) {
                console.log(`src/utils#updateStats Write daily_${today}.json failed`);
                return;
            }
        }
        fs.readFile(statsTodayPath, 'utf8', (err, contentToday) => {
            if (err) {
                console.log(`src/utils#updateStats Read daily_${today}.json failed`);
                return;
            }
            const statsToday = JSON.parse(contentToday);
            statsToday.players += players;
            statsToday.games += games;
            statsToday.matches += matches;
            fs.writeFile(statsTodayPath, JSON.stringify(statsToday), () => {
                if (err) {
                    console.log(`src/utils#updateStats Write daily_${today}.json failed`);
                    return;
                }
            });

        });
    });
};

module.exports = updateStats;