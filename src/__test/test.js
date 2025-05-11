import { Character } from '../index.js'

describe('Класс Character', () => {
  let hero;

  beforeEach(() => {
    hero = new Character('Hero', 'Swordsman');
  });

  test('создание персонажа с правильными начальными параметрами', () => {
    expect(hero.name).toBe('Hero');
    expect(hero.type).toBe('Swordsman');
    expect(hero.health).toBe(100);
    expect(hero.level).toBe(1);
    expect(hero.attack).toBe(40);
    expect(hero.defence).toBe(10);
  });

  test('метод levelUp увеличивает уровень и stats, восстанавливает здоровье', () => {
    hero.health = 50; // урон
    hero.levelUp();

    expect(hero.level).toBe(2);
    expect(hero.health).toBe(100);
    expect(hero.attack).toBe(Math.round(40 * 1.2)); // 48
    expect(hero.defence).toBe(Math.round(10 * 1.2)); // 12
  });

  test('метод levelUp бросает ошибку, если здоровье равно 0', () => {
    hero.health = 0;
    expect(() => hero.levelUp()).toThrow('Нельзя повысить уровень умершего');
  });

  test('damage уменьшает здоровье правильно с учетом defence', () => {
    hero.health = 100;
    hero.damage(50); // урон
    const expectedHealth = 100 - 50 * (1 - hero.defence / 100);
    expect(hero.health).toBeCloseTo(expectedHealth);
  });

  test('здоровье не опускается ниже нуля', () => {
    hero.health = 10;
    hero.damage(100); // очень сильный урон
    expect(hero.health).toBe(0);
  });

  test('при здоровье 0 вызов damage ничего не меняет', () => {
    hero.health = 0;
    hero.damage(50);
    expect(hero.health).toBe(0);
  });
});





















// describe('Character class', () => {
//   // Тесты на успешную инициализацию
//   test('Создает персонажа типа Bowman с правильными свойствами', () => {
//     const character = new Bowerman('Legolas');
//     expect(character.name).toBe('Legolas');
//     expect(character.type).toBe('Bowman');
//     expect(character.health).toBe(100);
//     expect(character.level).toBe(1);
//     expect(character.attack).toBe(25);
//     expect(character.defence).toBe(25);
//   });

//   test('Создает персонажа типа Swordsman с правильными свойствами', () => {
//     const character = new Swordsman('Aragorn');
//     expect(character.name).toBe('Aragorn');
//     expect(character.type).toBe('Swordsman');
//     expect(character.attack).toBe(40);
//     expect(character.defence).toBe(10);
//   });

//   test('Создает персонажа типа Magician с правильными свойствами', () => {
//     const character = new Magician('Gandalf');
//     expect(character.name).toBe('Gandalf');
//     expect(character.type).toBe('Magician');
//     expect(character.attack).toBe(10);
//     expect(character.defence).toBe(40);
//   });

//   test('Создает персонажа типа Daemon с правильными свойствами', () => {
//     const character = new Daemon('Azazel');
//     expect(character.name).toBe('Azazel');
//     expect(character.type).toBe('Daemon');
//     expect(character.attack).toBe(10);
//     expect(character.defence).toBe(40);
//   });

//   test('Создает персонажа типа Undead с правильными свойствами', () => {
//     const character = new Undead('Necro');
//     expect(character.name).toBe('Necro');
//     expect(character.type).toBe('Undead');
//     expect(character.attack).toBe(25);
//     expect(character.defence).toBe(25);
//   });

//   test('Создает персонажа типа Zombie с правильными свойствами', () => {
//     const character = new Zombie('Walker');
//     expect(character.name).toBe('Walker');
//     expect(character.type).toBe('Zombie');
//     expect(character.attack).toBe(40);
//     expect(character.defence).toBe(10);
//   });
// });

//   // // Тесты на ошибки при неправильных данных
// describe('Ошибки при создании персонажа', () => {
//   test('Ошибка при некорректном имени (не строка)', () => {
//     expect(() => new Bowerman(123)).toThrow('Имя должно быть строкой');
//   });

//   test('Ошибка при коротком имени', () => {
//     expect(() => new Bowerman('A')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
//   });

//   test('Ошибка при длинном имени', () => {
//     expect(() => new Bowerman('Оченьдлинноеимя')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
//   });

//   test('Ошибка при неправильном типе', () => {
//     expect(() => new Character('Bob', 'InvalidType')).toThrow('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
//   });
// });