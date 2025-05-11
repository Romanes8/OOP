export class Character {
    constructor(name, type) {
      const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  
      if (typeof name !== 'string') {
        throw new Error('Имя должно быть строкой');
      }
      if (name.length < 2 || name.length > 10) {
        throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
      }
      if (!validTypes.includes(type)) {
        throw new Error(`Тип должен быть одним из: ${validTypes.join(', ')}`);
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
  
      // Задаем attack и defence в зависимости от типа
      switch (type) {
        case 'Bowman':
          this.attack = 25;
          this.defence = 25;
          break;
        case 'Swordsman':
          this.attack = 40;
          this.defence = 10;
          break;
        case 'Magician':
          this.attack = 10;
          this.defence = 40;
          break;
        case 'Daemon':
          this.attack = 10;
          this.defence = 40;
          break;
        case 'Undead':
          this.attack = 25;
          this.defence = 25;
          break;
        case 'Zombie':
          this.attack = 40;
          this.defence = 10;
          break;
      }
    }
  }
  
  export class Bowerman extends Character {
    constructor(name) {
      super(name, 'Bowman');
    }
  }
  
  export class Swordsman extends Character {
    constructor(name) {
      super(name, 'Swordsman');
    }
  }
  
  export class Magician extends Character {
    constructor(name) {
      super(name, 'Magician');
    }
  }
  
  export class Daemon extends Character {
    constructor(name) {
      super(name, 'Daemon');
    }
  }
  
  export class Undead extends Character {
    constructor(name) {
      super(name, 'Undead');
    }
  }
  
  export class Zombie extends Character {
    constructor(name) {
      super(name, 'Zombie');
    }
  }



  