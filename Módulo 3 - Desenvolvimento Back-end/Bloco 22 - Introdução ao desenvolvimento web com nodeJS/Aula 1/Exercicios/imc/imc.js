const readline = require('readline-sync')

const peso = readline.questionInt('Qual o seu peso? ')
const altura = readline.questionFloat('Qual a sua altura?  ')

// const altura = 1.80;
// const peso = 70;

const calculoIMC = () => {
  const calculo = peso/(altura*altura)
  const convert = calculo.toFixed(2)
  if (convert < 18.5) {
    console.log(`Seu indice IMC é ${convert}, você está abaixo do peso ideal`)
  } if (convert > 18.5 && convert < 24.9) {
    console.log(`Seu indice IMC é ${convert}, você está no peso ideal`)
  } if (convert > 24.9 && convert < 29.9) {
    console.log(`Seu indice IMC é ${convert}, você está acima do peso ideal`)
  } if (convert > 29.9 && convert < 34.9) {
    console.log(`Seu indice IMC é ${convert}, considerado Grau I de obesidade`)
  } if (convert > 34.9 && convert < 39.9) {
    console.log(`Seu indice IMC é ${convert}, considerado Grau II de obesidade`)
  } if (convert > 40) {
    console.log(`Seu indice IMC é ${convert}, considerado Grau III e IV de obesidade`)
  }
}

console.log(`Seu indice IMC é ${convert}, você está no peso ideal`)