//Function Declaration
//Task 1 Write a fucntion to check if a number is even or odd
// function isEvenOrOdd(number) {
//   if (number % 2 === 0) {
//     console.log("Number is even");
//   } else {
//     console.log("number is odd");
//   }

// }
// isEvenOrOdd(5)

//Task 2 Write a function to calculate the square of a number and return the result
// function SquareOfNumber(number) {
//   return number * number

// }
// console.log(SquareOfNumber(5));

//Function Expressions
//Task 3 Write a function expression to find the maximum of two numbers and log the result to console

// const MaxofTwoNumbers = function (a, b) {
//   return a > b ? a : b;
// }
// console.log(MaxofTwoNumbers(10, 5));

//Task 4 Write a function expression to concatenate two strings and return the result
// let string1 = "Bittu"
// let string2 = "Singh"
// let concatenateString = function (a, b) {
//   return a.concat(b)

// }
// console.log(concatenateString(string1, " " + string2));

//Arrow Functions
//Task5 Write an arrow functions to calculate the sum of two numbers and return the result

// let addnumber = (a, b) => a + b;
// console.log(addnumber(4,6));

//Task 6 Write a arrow function to check if a string contains a specific character or contained a boolean value

// const checkString = (str, charOrBoolean) => str.includes(charOrBoolean);

// let str1 = "Rahul";
// let charToCheck = "R";
// let booleanToCheck = "true";  // Change the boolean value to a string "true"

// console.log(checkString(str1, charToCheck)); // Correctly pass variables
// console.log(checkString("This statement is true", booleanToCheck)); // Correctly pass variables

//Function parameters and default values
//Task 7 write a function that two parameters and return their product.provide a default value for the second parameter

// const sum = function (a, b = 6) {
//   return a * b;

// }
// console.log(sum(6));//Default value
// console.log(sum(6, 7));

//Task 8 Write a function that takes two person name and age and returns a greeting message .Provide a default value for age
// const greetTheperson = function (name, age = 30) {
//   return (`Hello ${name},You are ${age} year old`)

// }
// console.log(greetTheperson("Rahul"));
// console.log(greetTheperson("vinod", 25));

//Higher-oreder Functions
//Task 9 Write a higher order functions that takes a function and a number , and calls the function many times
// const FirstFunction = (func, num) => {
//   for (let index = 0; index < num; index++) {
//     func();

//   }
// };
// const sayHello = () => {
//   console.log("Hello Bittu");
// }
// FirstFunction(sayHello, 6)

//Task 10 Write a higher-order function that takes two functions and a value applies the first functions to the value and thn applies the second function to in to result
const applyFunctions = (func1, func2, val) => {
  const intermediateResult = func1(val);
  return func2(intermediateResult);
};
const add5 = (x) => x + 5;
const multiplyBy2 = (x) => x * 2;
const result = applyFunctions(add5, multiplyBy2, 10);
console.log(result);
