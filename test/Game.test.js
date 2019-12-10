import { Game } from "../src/Game";

describe("Bowling game", () => {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    const rollMany = (nbRolls, nbPins) => {
        for (let i = 0; i < nbRolls; i++) {
            game.roll(nbPins);
        }
    };

    test("Should throw error on invalid pin number", () => {
        expect(() => {
            game.roll("octopus");
        }).toThrow();
    });

    test("Should handle all 0s", () => {
        rollMany(20, 0);

        expect(game.score()).toBe(0);
    });

    test("Should handle all 1s (no spare no strike)", () => {
        rollMany(20, 1);

        expect(game.score()).toBe(20);
    });

    test("Should handle spare", () => {
        // roll spare on first frame
        // roll no spare no strike on second frame
        game.roll(5);
        game.roll(5);
        game.roll(5);
        rollMany(17, 0);

        expect(game.score()).toBe(20);
    });

    test("Should handle strike", () => {
        game.roll(10);
        game.roll(5);
        game.roll(2);
        rollMany(17, 0);

        expect(game.score()).toBe(24);
    });

    test("Should handle all strikes game", () => {
        rollMany(13, 10);

        expect(game.score()).toBe(300);
    });
});
