// Task 1: Export a function to add two numbers
export function add(a, b) {
  return a + b;
}

// Task 2: Export an object representing a person with properties and methods
export const person = {
  name: 'Bittu',
  age: 21,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
  incrementAge() {
    this.age += 1;
    return this.age;
  }
};

// Task 3: Export multiple functions using named exports
export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Task 4: Export a single function using default export
export default function greet(name) {
  return `Hello, ${name}!`;
}

// Task 5: Export multiple constants and functions
export const PI = 3.14159;
export const E = 2.71828;

export function addConstants(value) {
  return value + PI;
}

export function multiplyConstants(value) {
  return value * E;
}
