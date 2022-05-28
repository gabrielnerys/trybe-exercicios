const calculaMultiplicação = (a, b) => {
  if (a === 0 || b === 0) throw new Error('Os números não podem ser iguais ou menores que 0');
  const multiplica = a * b;

  return multiplica;
}

try {
  const calculo = calculaMultiplicação(584, 0);
  console.log(`O resultado da multiplicação é ${calculo}`)
} catch (err) {
  console.log(`Erro: ${err.message}`);
}