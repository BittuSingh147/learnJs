// Importing functions and constants from Day13_modules.js
import { add, person, subtract, multiply, divide, PI, E, addConstants, multiplyConstants } from './Day13_modules.js';
import greet from './Day13_modules.js'; // Default import

const num1 = 10;
const num2 = 5;

// Task 1: Use the add function
console.log(`The sum of ${num1} and ${num2} is ${add(num1, num2)}`);

// Task 2: Use the person object
console.log(person.greet());
console.log(`Next year, I will be ${person.incrementAge()} years old.`);

// Task 3: Use the arithmetic functions
console.log(`Subtraction: ${subtract(num1, num2)}`);
console.log(`Multiplication: ${multiply(num1, num2)}`);
console.log(`Division: ${divide(num1, num2)}`);

// Task 4: Use the default export function
console.log(greet('Alice'));

// Task 5: Use the constants and functions
console.log(`PI: ${PI}`);
console.log(`E: ${E}`);
console.log(`Addition with PI: ${addConstants(5)}`);
console.log(`Multiplication with E: ${multiplyConstants(5)}`);
