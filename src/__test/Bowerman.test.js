import Bowerman from '../class/Bowerman.js'

test('Правильно создается объект', () => {
  const bowerman = new Bowerman('Bowman');
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Bowman',
    type: 'Bowman',
  };

  expect(bowerman).toEqual(correct);
});
















