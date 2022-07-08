enum EyeColor {
  Black = 'Preto',
  Blue = 'Azul',
  Brown = 'Castanho',
  Green = 'Verde',
}

class Person {
  name: string;
  birthday: Date;
  eyeColor: EyeColor;

  constructor(name: string, birthday: Date, eyeColor: EyeColor) {
    this.name = name;
    this.birthday = birthday;
    this.eyeColor = eyeColor;
  }

  speak(): void {
    console.log(`${this.name} está falando`)
  }

  eat(): void {
    console.log(`${this.name} está comendo`)
  }

  walk(): void {
    console.log(`${this.name} está andando`)
  }
}