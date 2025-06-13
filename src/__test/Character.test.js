import  Character from '../class/Character.js'

  
  // Тесты на ошибки при неправильных данных
describe('Ошибки при создании персонажа', () => {
  test('Ошибка при некорректном имени (не строка)', () => {
    expect(() => new Character(123)).toThrow('Имя должно быть строкой');
  });
  
  test('Ошибка при коротком имени', () => {
    expect(() => new Character('A')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
  });
  
  test('Ошибка при длинном имени', () => {
    expect(() => new Character('Оченьдлинноеимя')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
  });
  
  test('Ошибка при неправильном типе', () => {
    expect(() => new Character('Bob', 'InvalidType')).toThrow('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  });
});
  













