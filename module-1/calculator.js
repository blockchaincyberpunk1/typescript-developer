function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        console.log("Cannot divide by zero!");
        return NaN; // Indicates an error
    }
    return a / b;
}
var num1 = 5;
var num2 = 3;
var resultAdd = add(num1, num2);
var resultSubtract = subtract(10, 4);
var resultMultiply = multiply(6, 7);
var resultDivide = divide(20, 5);
console.log("Addition: " + resultAdd);
console.log("Subtraction: " + resultSubtract);
console.log("Multiplication: " + resultMultiply);
console.log("Division: " + (isNaN(resultDivide) ? "Cannot divide by zero!" : resultDivide));
