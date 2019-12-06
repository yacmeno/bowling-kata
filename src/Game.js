export class Game {
    constructor() {
        // Map of each frame: Map<frameNumber, frameProperties>
        this.frames = new Map([
            [0, {
                rolls: [null, null],
                score: null
            }], [1, {
                rolls: [null, null],
                score: null
            }], [2, {
                rolls: [null, null],
                score: null
            }], [3, {
                rolls: [null, null],
                score: null
            }], [4, {
                rolls: [null, null],
                score: null
            }], [5, {
                rolls: [null, null],
                score: null
            }], [6, {
                rolls: [null, null],
                score: null
            }], [7, {
                rolls: [null, null],
                score: null
            }], [8, {
                rolls: [null, null],
                score: null
            }], [9, {
                rolls: [null, null],
                score: null
            }],])

        this.currentFrame = 0;
        this.currentFrameRoll = 0;
    }

    roll(nbPins) {
        if (!Number.isInteger(nbPins) || nbPins < 0 || nbPins > 10) {
            throw new Error("Invalid number of pins")
        }

        const currentFrameValue = this.frames.get(this.currentFrame);
        let nextFrameValue = {};

        if (nbPins === 10) {
            nextFrameValue = {
                ...currentFrameValue,
                rolls: [10, null],
            }

            this.frames.set(this.currentFrame, nextFrameValue)
            this.currentFrame++
            this.currentFrameRoll = 0
        } else {
            if (this.currentFrameRoll === 0) {
                nextFrameValue = {
                    ...currentFrameValue,
                    rolls: [nbPins, null]
                }

                this.frames.set(this.currentFrame, nextFrameValue)

                this.currentFrameRoll++
            } else {
                nextFrameValue = {
                    ...currentFrameValue,
                    rolls: [currentFrameValue.rolls[0], nbPins]
                }

                this.frames.set(this.currentFrame, nextFrameValue)

                this.currentFrame++
                this.currentFrameRoll = 0
            }
        }
    }

    score() {
        return;
    }

    debug() {
        this.roll(4)
        this.roll(4)
        this.roll(6)
        this.roll(4)
        this.roll(8)
        this.roll(8)

        console.log(this.frames)
        // console.log(this.currentFrame);

    }
}