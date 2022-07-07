"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleArea = exports.trapezeArea = exports.diamondArea = exports.rectangleArea = exports.squareArea = exports.triangleArea = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos.`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangleArea(base, heigth) {
    return (base * heigth) / 2;
}
exports.triangleArea = triangleArea;
function squareArea(side) {
    return side ** 2;
}
exports.squareArea = squareArea;
function rectangleArea(base, heigth) {
    return base * heigth;
}
exports.rectangleArea = rectangleArea;
function diamondArea(higher, shorter) {
    return (higher * shorter) / 2;
}
exports.diamondArea = diamondArea;
function trapezeArea(higherBase, shorterBase, height) {
    return ((higherBase + shorterBase) * height) / 2;
}
exports.trapezeArea = trapezeArea;
function circleArea(radius) {
    return (radius ** 2) * 3.14;
}
exports.circleArea = circleArea;
