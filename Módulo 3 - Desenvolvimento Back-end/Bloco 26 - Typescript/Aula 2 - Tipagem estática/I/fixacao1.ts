type bird = {
  species: string,
  color: string
}

function printBird(b: bird) {
  console.log(`O pássaro da espécie ${b.species} tem  coloração ${b.color}`);
}

printBird({ species: 'Canário', color: 'Amarelo' });

type sumNum = {
  x: number,
  y: number
}

function printSum(s: sumNum) {
  let sum = s.x + s.y
  console.log(`A soma de ${s.x} e ${s.y} é igual a ${sum}`);
}

printSum({ x: 10, y:30 });

type address = {
  street: string,
  number: number,
  city: string
}

function printAddress(ad: address) {
  console.log(`O endereço é ${ad.street}, numero ${ad.number}, cidade: ${ad.city}`);
}

printAddress({ street: 'Rua dos Alfeneiros', number: 75, city: 'Londres' });