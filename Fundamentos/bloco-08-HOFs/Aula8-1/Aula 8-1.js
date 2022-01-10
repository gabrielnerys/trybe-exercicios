// Funções de primeira ordem poder ser atribuidas como parametro de variáveis

const sum = (number1, number2) => number1 + number2;

console.log(sum(5, 5));

// Tambem podem ser passadas como argumento para outras funções

const message = name => `Hello ${name}, como vai?`;

const print = callback => {
    console.log(callback('Gabriel'));
}

print(message);

