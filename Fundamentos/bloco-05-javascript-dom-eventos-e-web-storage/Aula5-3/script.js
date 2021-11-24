let fruits = [3, 4, 10, 1, 12];

let valor = 0;

for (let i = 0; i < fruits.length; i += 1) {
    valor += fruits[i];
} if (valor > 15) {
    console.log(valor);
} else {
    console.log('Valor menor que 16')
}

let n = 5;
let box = '';
for (let line = 1; line <= n; line += 1) {
    for (let columns = 1; columns <= n; columns += 1) {
        box += '*'
    }
    console.log(box);
    box = "";
}

let num = 5;
let piramide = '';
for (let linha = 1; linha <= num; linha += 1) {
    for (let coluna = 1; coluna <= num; coluna += 1) {
        if (coluna == linha)
        piramide += '*'
    }
    console.log(piramide);
    box = " ";
}

let size = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputLine);
  inputLine = inputLine + symbol;
};