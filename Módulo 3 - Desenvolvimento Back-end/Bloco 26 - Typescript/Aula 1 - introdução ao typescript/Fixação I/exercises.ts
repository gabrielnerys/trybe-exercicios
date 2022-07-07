export function greeter(name: string) {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos.`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangleArea(base: number, heigth: number): number {
  return (base * heigth) / 2;
}

export function squareArea(side: number): number {
  return side ** 2;
}

export function rectangleArea(base: number, heigth: number): number {
  return base * heigth;
}

export function diamondArea(higher: number, shorter: number): number {
  return (higher * shorter) / 2;
}

export function trapezeArea(higherBase: number, shorterBase: number, height: number): number {
  return ((higherBase + shorterBase) * height) / 2;
}

export function circleArea(radius: number): number {
  return (radius ** 2) * 3.14;
}