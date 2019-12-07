import { Game } from '../src/Game';

const rollMany = (game, nbRolls, nbPins) => { 
    for (let i = 0; i < nbRolls; i++) {
          game.roll(nbPins)
    }
 }

test('Should throw error on invalid pin number', () => {
    const game = new Game();

    expect(() => {
        game.roll('octopus');
    }).toThrow();
});

test('Should handle all 0s', () => {
    const game = new Game();

    rollMany(game, 20, 0)

    expect(game.score()).toBe(0)
});


test('Should handle all 1s (no spare no strike)', () => {
    const game = new Game();

    rollMany(game, 20, 1)

    expect(game.score()).toBe(20)
});

test('Should handle spare', () => {
    const game = new Game();
    
    // roll spare on first frame
    // roll no spare no strike on second frame
    game.roll(5)
    game.roll(5)
    game.roll(5);
    rollMany(game, 17, 0)

    expect(game.score()).toBe(20)
});


// test('Should handle strike', () => {

// });
// test('Should handle all strikes game', () => {

// });

// test('Should handle game with normal frames, spares and strikes', () => {

// });