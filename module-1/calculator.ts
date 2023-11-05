function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    if (b === 0) {
        console.log("Cannot divide by zero!");
        return NaN; // Indicates an error
    }
    return a / b;
}


const num1: number = 5;
const num2: number = 3;

const resultAdd: number = add(num1, num2);
const resultSubtract: number = subtract(10, 4);
const resultMultiply: number = multiply(6, 7);
const resultDivide: number = divide(20, 5);

console.log("Addition: " + resultAdd);
console.log("Subtraction: " + resultSubtract);
console.log("Multiplication: " + resultMultiply);
console.log("Division: " + (isNaN(resultDivide) ? "Cannot divide by zero!" : resultDivide));
