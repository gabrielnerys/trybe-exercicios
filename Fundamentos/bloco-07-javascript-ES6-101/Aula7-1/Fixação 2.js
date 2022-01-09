// Crie uma função que receba um número e retorne seu fatorial.

const factorial = (number) => {
    
    let result = 1;

    for (let i = 1; i <= number; i+=1)
    result *= i

    return result
}

console.log(factorial());

// Recursivo usando Ternary Operator

const factorial2 = number => number > 1 ? number * factorial2(number - 1) : 1;
console.log(factorial2(5));

