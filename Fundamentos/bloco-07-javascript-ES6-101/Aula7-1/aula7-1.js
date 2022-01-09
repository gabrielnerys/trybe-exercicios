const multiply = (multiplicador, multiplicando) => multiplicador * multiplicando;

console.log(multiply(2, 8));

const printName = nome => `Olá ${nome}`;

console.log(printName('Gabriel'));

const person = (name, age) =>
`Nome: ${name}
Idade: ${age}`;

console.log(person('Gabriel', 30))

const verify = (name) => (name === 'Gabriel') ? `Hello Gabriel` : `Get out of here!`;

console.log(verify('Gabriel'));
console.log(verify('Pedro'));

