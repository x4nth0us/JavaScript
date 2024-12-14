import { PI } from './const.mjs';
import E from './const.mjs';

export function addition(a, b) {
    return a + b;
}

export function subtraction(a, b) {
    return a - b;
}

export function multiplication(a, b) {
    return a * b;
}

export function division(a, b) {
    return a / b;
}

export function circleArea(radius) {
    return PI * radius ** 2;
}

export function exponent(x) {
    return E ** x;
}


export {
    addition as add, 
    subtraction as subtract,
    multiplication as multiply,
    division as divide,
    circleArea as CA,
    exponent as exp
};