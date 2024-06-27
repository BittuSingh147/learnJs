//Default Parameters Write a function greetWithDefault that takes a name and logs "Hello, [name]!" to the console. If no name is provided, it should default to "Guest".

// function greetWithDefault(name = "guest") {
//   console.log(`Hello ${name}`);
// }
// greetWithDefault("Bittu")

//Object Method
//Write a method sayHi within an object person that logs "Hi, my name is [name]" to the console, where name is a property of the person object.

// let person = {
//   name :"Bittu",
//   sayHi : function(){
//     console.log(`Hi, my name is ${this.name}`);
//   }
// }
// person.sayHi()

//Arrow Function
//Rewrite the add function from earlier using the arrow function syntax.

// const addnum = (num1, num2) => {
//   return num1 + num2

// }
// console.log(addnum(4, 5))

//Array Filtering
//Write a function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let evenNumber = arr.filter(number => number % 2 === 0);
// console.log(evenNumber);

//Template Literals
//Write a function formatGreeting that takes a name and returns a string "Hello, [name]!" using template literals.
// function formatGreeting(name) {
//   console.log(`Hello ${name}`);
// }
// formatGreeting("Bittu")

//Destructuring Assignment
//Write a function logFirstTwoElements that takes an array and logs the first two elements separately.
// function logFirstTwoElements(arr) {
//   if (arr.length < 2) {
//     console.log("First two elements are logged");
//   }
//   console.log(arr[0]);
//   console.log(arr[1]);
// }
// logFirstTwoElements([11, 2, 3, 4, 5]);

//Write a function doubleNumbers that takes an array of numbers and returns a new array with each number doubled.
// function doubleNumbers(numbers) {
//   return numbers.map(number => number * 2);
// }

// let originalArray = [1, 2, 3, 4, 5];
// let doubledArray = doubleNumbers(originalArray);

// console.log(doubledArray); 

//Write a function splitString that takes a string and returns an array of its individual characters.
function splitString(str) {
  return str.split('');
}
console.log(splitString("Bittu"));