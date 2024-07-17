//Task 1 var declaration
var age = 21
console.log(age);

//Task 2 Let declaration
let name = "Bittu"
console.log(name);

//Task 3 const declaration
const isunderage = true
console.log(isunderage);

//Task 4 (Data Types)
let number = 21
name = "Bittu"
isloggedin = true
let car = {
  name: "Mercedes",
  color: "Red"
}
let arr = [1, 2, 3, 4, 5]
console.log(typeof arr);
console.log(typeof car);
console.log(typeof number);
console.log(typeof isloggedin);

//Task 5 Reassigning variables
let num = 3;
num = 6;
console.log(num);

//Task 6 Reassigning variables
const numbers = 3;

console.log(numbers);

// Declare variables of different data types
let stringVar = "Hello, world!"; // String
let numberVar = 42; // Number
let booleanVar = true; // Boolean
let undefinedVar; // Undefined
let nullVar = null; // Null
let objectVar = { name: "John", age: 30 }; // Object
let arrayVar = [1, 2, 3, 4, 5]; // Array
let functionVar = function () { return "I am a function"; }; // Function
let symbolVar = Symbol("unique"); // Symbol
let bigIntVar = BigInt(9007199254740991); // BigInt

let logValueType = function (variable, variablename) {
  console.log(`${variablename}-value:`, variable, ",Type:", typeof variable);
}

logValueType(stringVar, "stringVar");
logValueType(numberVar, "numberVar");
logValueType(booleanVar, "booleanVar");
logValueType(undefinedVar, "undefinedVar");
logValueType(nullVar, "nullVar");
logValueType(objectVar, "objectVar");
logValueType(arrayVar, "arrayVar");
logValueType(functionVar, "functionVar");
logValueType(symbolVar, "symbolVar");
logValueType(bigIntVar, "bigIntVar");


//Reassigment demo
const nums = 21
let numberss = 27;
//nums = 22;//getting error because in const we can't reassign value
numberss = 29
console.log(nums, numberss);