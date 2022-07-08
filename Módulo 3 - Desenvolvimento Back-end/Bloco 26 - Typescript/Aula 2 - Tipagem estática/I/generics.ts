function getArray<T>(items: T[]) : T[] {
  return new Array<T>().concat(items)
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
numberArray.push(30);

console.log(numberArray);

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push('Geckos');
stringArray.push('Ferrets');

console.log(stringArray);

function identity<T, U>(value: T, message: U) : T {
  console.log(message);
  return value;
}

let returnNumber = identity<number, string>(100, "i'm a number");
let returnString = identity<string, string>("100", "i'm a string");
let returnBoolean = identity<boolean, string>(true, "i'm a boolean");


interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

function processIdentity<T, U>(value: T, message: U) : T {
  console.log(message);
  return value;
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber2 = processor(100, "i'm a number");

