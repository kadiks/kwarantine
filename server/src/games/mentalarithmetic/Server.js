const { random } = require('../../utils/');

class MentalArithmetic {
    constructor({
        duration = 5,
        playerIds = [],
        operation = []
    }) {
        // prop scores might not be needed as being duplicated in results
        this.name = 'Calcul mental'; // TODO: i18n
        this.rules = 'Trouver le résultat de ce calcul'; // TODO: i18n
        this.playerIds = playerIds; // for debug purposes
        this.scores = this.getInitialScores(playerIds);
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
    }

    getInitialResults(playerIds) {
        const results = {};
        playerIds.forEach((playerId) => {
            results[playerId] = {
            name: this.name,
            score: 0,
            answer: '',
            };
        });
        return results;
    }

    getInitialScores(playerIds) {
        const scores = {};
        playerIds.forEach((playerId) => {
            scores[playerId] = 0;
        });
        return scores;
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
                operation: this.operation,
                duration: this.duration,
            },
        };
    }

    
    
}

module.exports = MentalArithmetic;