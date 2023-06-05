import Boweman from '../class/Boweman.js';

test('Правильно создается объект', () => {
    const boweman = new Boweman('Boweman');
    const correct = {
        attack: 25, defence: 25, health: 100, level: 1, name: 'Boweman', type: 'Boweman',
    };

expect(boweman).toEqual(correct);
});