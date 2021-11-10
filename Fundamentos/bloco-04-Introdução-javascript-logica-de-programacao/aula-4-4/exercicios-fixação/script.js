// EXERCICIOS FIXAÇÃO OBJETOS ------------------------------------------------------------------------------------------------------------


// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
//     4: 'quarta',
//     5: 'quinta',
//     6: 'sexta',
//     7: 'sábado',
//     };
    
// console.log (diasDaSemana['6']);
  
// let moradores = [
//     {
//         nome: "Philipi",
//         sobrenome: "Roberto",
//         idade: "26",
//         numAp: "102",
//     },
//     {
//         nome: "Pedro",
//         sobrenome: "Santos",
//         idade: "22",
//         numAp: "506",
//     },
//     {
//         nome: "Isabela",
//         sobrenome: "Ramos",
//         idade: "27",
//         numAp: "204",
//     },
//     {
//         nome: "Ana",
//         sobrenome: "Veiga",
//         idade: "24",
//         numAp: "305",
//     }
// ]
// let primeiroMorador = moradores[2]
// console.log ("A senhorita " + primeiroMorador.nome + ' ' + primeiroMorador.sobrenome + ', atual residente do apartamento de numero ' + primeiroMorador.numAp + ' é uma ótima moradora!');

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: { golden: 2, silver: 3 }
// }

// console.log ('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.')

// // Para incluir novos elementos ao final de um objeto ja criado, primeiro definir o nome do objeto, seguido pelo nome da chave como string entre colchetes e os dados em seguida.
// player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log ('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por 6 vezes seguidas nos anos de ' + player.bestInTheWorld + '.')
// console.log ('A jogadora ' + player.name + ' possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')


// EXERCICIO FIXAÇÃO FOR/IN------------------------------------------------------------------------------------------------------------


// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(index, cars[index]);
// }

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };

//   for (let index in car) {
//     console.log(index, car[index]);
//   }

// console.table(car)

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge' 
//   };

//   for (let olar in names){
//       console.log ('Olá ' + names[olar]);
//   }

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };
//   for (let keys in car){
//       console.log (keys, car[keys]);
//   }

// function bomDia(tryber) {
//     console.log ('Bom dia ' + tryber + ' :)')
// }

// bomDia('João');
// bomDia('Pedro');
// bomDia('Maria');
// bomDia('Roberta');

// let stats = "logado";
// function logarDeslogar() {
//     if (stats === "logado") {
//         stats = "deslogado"
//     } else {
//         stats = "logado"
//     }    
// }

// console.log (stats)

// logarDeslogar();
// console.log (stats);

// logarDeslogar();
// console.log (stats);

// logarDeslogar();

// console.log ('O usuario está ' + stats)

// function maiorMenor(firstNum, secondNum) {
//     if (firstNum > secondNum) {
//         console.log (firstNum + ' é maior que ' + secondNum);
//     } else if (secondNum > firstNum) {
//         console.log (secondNum + ' é maior que ' + firstNum);
//     } else{
//         console.log ('Os numeros são iguais');
//     }
// }

// maiorMenor(50, 30);
// maiorMenor(15, 30);
// maiorMenor(-15, 2);
// maiorMenor(200, 200);