const calculaMultiplicação = (a, b) => {
  const promise = new Promise ((resolve, reject) => {
    if (a === 0 || b === 0) reject(new Error('Os numeros não podem ser menores ou iguais a zero'));

    const multiplica = a * b;

    resolve(multiplica);

  })
  return promise;
};

calculaMultiplicação(2, 0)
.then((result) => console.log(`O resultado da multiplicação é ${result}`))
.catch(err => console.log("erro: %s", err.message));

