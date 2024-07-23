//Activity 1: Template Literals

//Task 1 : Use template literals to create a string that includes variables for a person's name and age , and log the string to the console
let name = "Bittu"
let age = 21
console.log(`My name is ${name} and my age is ${age}`);

//Task 2 Create a multi line string using template literals and log into the console
let Message = `This is a multi-line string.
You can include line breaks directly in the template literal.
This makes it easier to format your strings.`;
console.log(Message);
//Activity 2 Destructing
//Task 3 Use array distracting to extract the first and second elements from an array of numbers and log into the console
const car = ["Mercedes", "Volvo", "Alto", "Wolkswagon"]
const [First, Second] = car
console.log(`${First} ${Second}`);

//Task 4 use object destructing to extract the title and author from a book object and log into the console
const Book = {
  tittle: "hyper Focus",
  Year: 1992,
  Author: "Chris Bailey"
}
Details(Book);
function Details({ tittle, Author }) {
  console.log(`Tittle of this book is ${tittle} and the author of this book is ${Author}`)

}


//Spread and Rest Operators
//Task 5 Use the spread operators to create a new array that includes all elements of an existing array plus additional elements , and log the new array in the console
const arr = [1, 2, 3, 4, 5, 6]
const newarray = [...arr, 7, 8, 9, 10]
console.log(`${newarray}`);

//Task 6 use the rest operator in a function to accept an arbitary number of an arguments, sum them and return the result
function sum(...numbers) {
  return numbers.reduce((accumaltor, currentvalue) => accumaltor + currentvalue, 0); _
}
console.log(sum(1, 2, 3, 4, 5));

//Activity 4 Default parameters
//Task 7 Write a function that takes two parameters and return their product , with the second parameter having a default value of 1 .Log the result of calling a function with and without the second parameter
function value(a, b = 1) {
  console.log(a * b);

}
value(4);
value(4, 5);


//Activity 5 Enhanced object literals
//Task 8 Use enhanced object literals to create an object with methods and properties, and log th result into the console
let names = "Duke";
let color = "Brown";
let ages = 5;

let Dog = {
  name, color, age,
  bark() {
    console.log("woof woof");
  },
  getdescriptions() {
    return `Name of My dog is ${this.name} , color is ${this.color} and age is ${this.age} `
  }
};

Dog.bark();
console.log(Dog.getdescriptions())
//Task 9 Create an object with computed property names based on variables and log the object into the console
let boy = "name"
let object = {
  [boy]: "Bittu"//computed property name
}
console.log(object.name);



