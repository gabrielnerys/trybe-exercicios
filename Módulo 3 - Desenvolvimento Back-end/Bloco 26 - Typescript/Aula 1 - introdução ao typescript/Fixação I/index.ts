import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangleArea(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangleArea(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangleArea(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.squareArea(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.squareArea(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.squareArea(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangleArea(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangleArea(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangleArea(100, 200)}cm²`);

console.log(`Losango de diagonal 32cm e 25cm: ${Exercise.diamondArea(32, 18)}cm²`);
console.log(`Losango de diagonal 200cm e 50cm: ${Exercise.diamondArea(200, 50)}cm²`);
console.log(`Losango de diagonal 75cm e 25cm: ${Exercise.diamondArea(75, 25)}cm²`);

console.log(`Trapézio base 100cm e 70cm, e de lado 50cm: ${Exercise.trapezeArea(100, 70, 50)}cm²`);
console.log(`Trapézio base 75cm e 50cm, e de lado 35cm: ${Exercise.trapezeArea(75, 50, 35)}cm²`);
console.log(`Trapézio base 150cm e 120cm, e de lado 80cm: ${Exercise.trapezeArea(150, 12, 80)}cm²`);

console.log(`Circulo de raio 25cm: ${Exercise.circleArea(25)}cm²`);
console.log(`Circulo de raio 100cm: ${Exercise.circleArea(100)}cm²`);
console.log(`Circulo de raio 12,5cm: ${Exercise.circleArea(12.5)}cm²`);