const { random } = require('../../utils/');
const countries = require('../../../data/countries/fr.json');

class Flag {
    constructor({
        duration = 8,
        playerIds = []
    }) {
        this.name = 'Devine le drapeau'; // TODO: i18n
        this.rules = 'Trouvez à quel pays appartient le drapeau'; // TODO: i18n
        this.playerIds = playerIds; // for debug purposes
        // this.scores = this.getInitialScores(playerIds);
        this.results = this.getInitialResults(playerIds);
        this.duration = duration;
        this.hasAnswered = [];

        // Game specific
        const { possibilities, answer, countryCode } = this.getQuestion();
        this.countryCode = countryCode;
        this.possibilities = possibilities;
        this.answer = answer;
    }

    calculateAllPlayersScore() {
        let maxPoints = this.playerIds.length;

        const orderedResults = this.results
            .filter(p => p.isGoodAnswer)
            .sort((a, b) => a.time - b.time)
            .map(p => {
                maxPoints--;
                return {
                    playerId: p.playerId,
                    score: maxPoints + 1
                };
            });
   
        this.results.forEach((p) => {
            const playerScore = orderedResults.find(pS => pS.playerId === p.playerId);
            // console.log('games/MA.Server#calculateAllPlayersScore playerScore', playerScore);
            if (typeof playerScore !== 'undefined') {
                p.score = playerScore.score;
            }
        });
    }

    calculatePlayerScore(input, { playerId, time }) {
        if (this.hasAnswered.includes(playerId) === false) {
          this.hasAnswered.push(playerId);
        }

        const player = this.results.find(r => r.playerId === playerId);
        player.time = time;
        player.answerDisplay = input;

        if (this.isValidInput(input) === false) {
            return;
        }

        player.isGoodAnswer = true;
        player.answer = input;

        this.calculateAllPlayersScore();
    }

    /**
     * 
     * @param {Array<String>} playerIds 
     * 
     * @return {Array<PlayerResult>}
     */
    getInitialResults(playerIds) {
        const results = [];
        playerIds.forEach(playerId => {
            results.push({
                playerId,
                name: this.name,
                score: 0,
                isGoodAnswer: false,
                answer: '',
                answerDisplay: '',
                time: 0
            });
        });
        return results;
    }

    /**
     * Generates the round client data
     *
     * @memberof Games/MentalArithmetic.Server
     */
    getData() {
        
        return {
            className: this.constructor.name,
            name: this.name,
            data: {
                countryCode: this.countryCode,
                possibilities: this.possibilities,
                duration: this.duration,
            },
        };
    }

    getQuestion() {
        let answer = '';
        let countryCode = '';
        const possibilities = [];
        const answerIndexes = [];
        const countryNames = Object.values(countries);
        const countryKeys = Object.keys(countries);

        while (answerIndexes.length < 4) {
            const rCountryIdx = random.randinc(0, countryNames.length - 1);
            if (answerIndexes.includes(rCountryIdx) === false) {
                answerIndexes.push(rCountryIdx);
            }
        }
        
        const answerIndex = answerIndexes[random.randinc(0, answerIndexes.length - 1)];
        answer = countryNames[answerIndex];
        countryCode = countryKeys[answerIndex].toLowerCase();
        
        answerIndexes.forEach((index) => {
            possibilities.push(countryNames[index]);
        });

        return {
            countryCode, 
            answer,
            possibilities
        };
    }

    isSafeInput(input) {
        return typeof input === 'string';
    }

    isValidInput(input) {
        console.log('#isValidInput input', input);
        console.log('#isValidInput this.answer', this.answer);
        return input === this.answer;
    }
    
}

module.exports = Flag;