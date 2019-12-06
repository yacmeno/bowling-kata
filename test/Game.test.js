import { Game } from '../src/Game';

beforeAll(() => {
    return
});
afterAll(() => {
    return
});

test('Should throw error on invalid pin number', () => {
    const game = new Game();
    expect(() => {
        game.roll('octopus');
    }).toThrow();
});
test('Should handle last roll spare', () => {

});
test('Should handle last roll strike', () => {

});
test('Should handle all 0s', () => {

});
test('Should handle all strikes game', () => {

});
test('Should handle all spare game', () => {

});
test('Should handle game with normal frames, spares and strikes', () => {

});

test('debug', () => {
    const game = new Game();
    game.debug()
});