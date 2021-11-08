const a = 10;
const b = 8;
const c = 16;
const number = 0;

/*Retorna diferentes operações básicas*/

console.log("Adição: " + (a+b));
console.log("Subtração: " + (a-b));
console.log("Multiplicação: " + (a*b));
console.log("Divisão: " + (a/b));
console.log("Módulo: " + (a%b));

/*Retorna o maior de dois números*/

if (a > b) {
    console.log ("a é maior que b");
} else {
    console.log ("b é maior que a");
}

/*Retorna o maior de três números*/

if (a > b && a > c) {
    console.log ("a é maior que b e c");
} else if (b > a && b > c) {
    console.log ("b é maior que a e c");
} else{
    console.log ("c é maior que a e b");
}


/*Retorna se o valor da const number é positivo ou negativo*/

if (number > 0) {
    console.log ("Positive");
} else if (number < 0){
    console.log ("Negative");
} else {
    console.log ("O numero é zero")
}

/*Retorna Positive se o valor da soma dos três angulos for a soma dos angulos de um triangulo, ou false se não for. E caso 
algum angulo seja inválido, retorna Error*/

let angleA = 90;
let angleB = 60;
let angleC = 0;

let somaDosAngulos = angleA + angleB + angleC;

let angulosSaoPositivos = angleA > 0 && angleB > 0 && angleC > 0;

if (angulosSaoPositivos) {
    if (somaDosAngulos === 180) {
        console.log ("Positive")
    } else {
        console.log ("False")
    }
} else {
    console.log ("Error")
}

/*Retorna o nome da peça e quais os movimentos no xadrez. E caso alguma peça seja inválida, retorna Error*/

let pecaXadrez = "Rei"

switch (pecaXadrez.toLowerCase()) {
    case "rei":
        console.log('Rei-> Uma casa apenas para qualquer direção.');
        break;
    case "bispo":
        console.log('Bispo-> Diagonal.');
        break;
    case "rainha":
        console.log('Rainha-> Diagonal, horizontal e vertical.');
        break;
    case "cavalo":
        console.log('Cavalo -> "L" pode pular sobre as peças.');
        break;
    case "torre":
        console.log('Torre -> Horizontal e vertical.');
        break;
    case "peão":
        console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
    default:
        console.log("Peça não encontrada")
        break;
}

/*Retorna porcentagem de nota convertida em um sistema de A a F. E caso 
a nota seja inválida, retorna Error*/

let porcentagem = 85;

if (porcentagem < 0 || porcentagem > 100) {
  console.log("Erro, nota incorreta!");
} else if (porcentagem >= 90) {
  console.log("A");
} else if (porcentagem >= 80) {
  console.log("B");
} else if (porcentagem >= 70) {
  console.log("C");
} else if (porcentagem >= 60) {
  console.log("D");
} else if (porcentagem >= 50) {
  console.log("E");
} else {
  console.log("F");
}

/*Verifica se pelo menos uma das constantes é par*/

const number1 = 15
const number2 = 26
const number3 = 35

if (number1%2 === 0 || number2%2 === 0 || number3%2 === 0){
    console.log("true");
} else {
    console.log("false");
}