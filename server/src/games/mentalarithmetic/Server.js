const { random } = require('../../utils/');

class MentalArithmetic {
    constructor({
        duration = 5,
        playerIds = [],
        operation = []
    }) {
        // prop scores might not be needed as being duplicated in results
        this.name = 'Calcul mental'; // TODO: i18n
        this.rules = 'Trouvez le résultat de ce calcul'; // TODO: i18n
        this.playerIds = playerIds; // for debug purposes
        // this.scores = this.getInitialScores(playerIds);
        this.results = this.getInitialResults(playerIds);
        this.duration = duration;
        this.hasAnswered = [];

        // Game specific
        this.operators = ['+', '-', 'x'];
        if (operation.length === 0) {
            this.operation = [
                random.randinc(1, 9),
                this.operators[random.randinc(0, this.operators.length - 1)],
                random.randinc(1, 9)
            ];
        } else {
            this.operation = operation;
        }
        this.answer = this.getAnswer();
        this.possibilities = this.getPossibilities();
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

        if (this.isValidInput(input) === false) {
            return;
        }

        player.isGoodAnswer = true;
        player.answer = input;
        player.answerDisplay = input;

        this.calculateAllPlayersScore();
    }

    getAnswer() {
        let answer = 0;
        switch (this.operation[1]) {
            case '+':
                answer = this.operation[0] + this.operation[2];
                break;
            case '-':
                answer = this.operation[0] - this.operation[2];
                break;
            case 'x':
                answer = this.operation[0] * this.operation[2];
                break;
        }
        return answer;
    }

    // getInitialResults(playerIds) {
    //     const results = {};
    //     playerIds.forEach((playerId) => {
    //         results[playerId] = {
    //             name: this.name,
    //             score: 0,
    //             isGoodAnswer: false,
    //             answer: '',
    //             time: null    
    //         };
    //     });
    //     return results;
    // }

    /**
     * @typedef PlayerResult
     * @property {String} playerId
     * @property {String} name Name of the game
     * @property {Number} [score=0]
     * @property {Number} [scoreDisplay=0]
     * @property {String} [answer='']
     * @property {String} [answerDisplay=''] The answer that will be displayed on the screen
     * @property {Number} [time=0] Time in milliseconds the player took to answer
     */

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
    
    // getInitialScores(playerIds) {
    //     const scores = {};
    //     playerIds.forEach((playerId) => {
    //         scores[playerId] = 0;
    //     });
    //     return scores;
    // }

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
                operation: this.operation,
                possibilities: this.possibilities,
                duration: this.duration,
            },
        };
    }

    getPossibilities() {
        const answer = this.getAnswer();
        const answers = [];
        let randomRange = [];
        switch (this.operation[1]) {
            case '+':
                randomRange = [answer - 3, answer + 3];
                break;
            case '-':
                randomRange = [answer - 3, answer + 3];
                break;
            case 'x':
                randomRange = [answer - 5, answer + 5];
                break;
        }

        while (answers.length < 3) {
            const r = random.randinc(randomRange[0], randomRange[1]);
            if (r !== answer && answers.includes(r) === false) {
                answers.push(r);
            }
        }
        answers.push(answer);

        answers.sort((a, b) => {
            return a - b;
        });

        return answers;
    }

    isSafeInput(input) {
        return !isNaN(input);
    }

    isValidInput(input) {
        console.log('input', input);
        console.log('this.answer', this.answer);
        return input === this.answer;
    }
    
}

module.exports = MentalArithmetic;