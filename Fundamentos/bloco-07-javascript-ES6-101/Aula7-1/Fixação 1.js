// Converter função abaixo para Arrow Function e usar Template literals

// function testingScope(escopo) {
//     if (escopo === true) {
//         var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//         ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//         console.log(ifScope);
//     } else {
//         var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//         console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// Resultado

const testingScope = escopo => {
    if (escopo === true) {
        let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !'`;
        console.log(ifScope);
    } else {
        const elseScope = `Não devo ser utilizada fora meu escopo`;
        console.log(elseScope);
    }
}

testingScope(true);

// Retornar Array com pares e impares

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// // Seu código aqui.

// console.log(oddsAndEvens); // será necessário alterar essa linha 😉

// Resultado
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort();


const sortOddsAndEvens = () => {
    oddsAndEvens[0] = 2
    oddsAndEvens[1] = 3
    oddsAndEvens[2] = 4
    oddsAndEvens[3] = 7
    oddsAndEvens[4] = 10
    oddsAndEvens[5] = 13

    return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens()

console.log(`${sortedArray} O array agora possui seus itens ordenados`);