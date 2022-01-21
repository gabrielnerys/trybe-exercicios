// Crie uma função que receba um número e retorne seu fatorial.

const factorial = (number) => {

    let result = 1;

    for (let i = 1; i <= number; i += 1)
        result *= i

    return result
}

console.log(factorial());

// Recursivo usando Ternary Operator

const factorial2 = number => number > 1 ? number * factorial2(number - 1) : 1;
console.log(factorial2(5));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const wordLength = text => {
    let wordArray = text.split(' ');
    let count = 0;
    let result = '';

    for (let word of wordArray) {
        if (word.length > count) {
            count = word.length;
            result = word
        }
    }
    return result;
}

console.log(wordLength('Então faz mto tempo que eu vi a primeira temporada'))

// Exercicio 4

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase(paramOne) {
    const fun1 = paramInner => (
        `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill) =>
        result = `${result}

    - ${skill}`);

    result = `
    ${result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));