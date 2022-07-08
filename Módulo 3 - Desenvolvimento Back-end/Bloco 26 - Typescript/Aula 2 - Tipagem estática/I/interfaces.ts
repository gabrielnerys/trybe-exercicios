interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employees: Employee = {
  firstName: 'Gabriel',
  lastName: 'Nery',
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

interface Teacher extends Employee {
  subject: string;
  sayHello(): string;
}

let Teachers: Teacher = {
  firstName: 'Pedro',
  lastName: 'Silva',
  subject: 'Matemática',
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  },
  sayHello(): string {
    return `Olá, eu me chamo ${this.firstName} e sou o novo professor de ${this.subject}`;
  }
}

interface Felines {
  name: string,
  breed: string,
  gender: string,
  color: string
}

let cats: Felines = {
  name: 'Rex',
  breed: 'Blue Russian',
  gender: 'Male',
  color: 'Gray',
}

console.log(cats);

