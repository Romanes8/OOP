import { Character } from '../index.js'

describe('Character и наследники', () => {
    test('успешное создание Bowerman', () => {
      const hero = new Bowerman('Лёха');
      expect(hero.name).toBe('Лёха');
      expect(hero.type).toBe('Bowman');
      expect(hero.health).toBe(100);
      expect(hero.level).toBe(1);
      expect(hero.attack).toBe(25);
      expect(hero.defence).toBe(25);
    });
  
    test('некорректное имя (слишком короткое)', () => {
      expect(() => new Swordsman('Р')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    });
  
    test('некорректное имя (слишком длинное)', () => {
      expect(() => new Magician('ОченьДлинноеИмя')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    });
  
    test('некорректный тип', () => {
      class FakeHero extends Character {
        constructor(name) {
          super(name, 'НекорректныйТип');
        }
      }
      expect(() => new FakeHero('Игорь')).toThrow('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    });
  
    test('проверка свойств у Magician', () => {
      const magician = new Magician('Герман');
      expect(magician.health).toBe(100);
      expect(magician.level).toBe(1);
      expect(magician.attack).toBe(10);
      expect(magician.defence).toBe(40);
    });
  });