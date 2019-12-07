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
        let totalScore = 0

        this.rolls.forEach(pins => totalScore += pins)
        
        return totalScore;
    }
}