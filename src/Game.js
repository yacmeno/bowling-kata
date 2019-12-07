export class Game {
    constructor() {
        this.rolls = new Array()
    }

    roll(nbPins) {
        if (!Number.isInteger(nbPins) || nbPins < 0 || nbPins > 10) {
            throw new Error("Invalid number of pins")
        }

        this.rolls.push(nbPins)
    }

    score() {
        let totalScore = 0;
        let rollIndex = 0

        for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
            const isSpare = this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10 ? true : false
            const isStrike = this.rolls[rollIndex] === 10 ? true : false

            if (isSpare) {
                totalScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]
                rollIndex += 2
            } else if (isStrike) {
                totalScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]
                rollIndex++
            } else {
                totalScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1]
                rollIndex += 2
            }
        }

        
        return totalScore;
    }

}