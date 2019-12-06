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

        this.currentFrame = 0
    }

    roll(pins) {
        return;
    }

    score() {
        return;
    }

    debug() {
        console.log(this.frames)
    }
}