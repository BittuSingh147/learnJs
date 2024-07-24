//Activity 1 Basic Error Handling with try-catch
//Task 1 Write a function that intentionally throws an error and use a try-catch block to handle an error and log in appropiate message to console
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Must be number");
  }
  return a + b;
}
function calculate() {
  try {
    const result = sum(10, 20);
    console.log("sum:", result);
  } catch (error) {
    console.log("An error occured:", error);
  }
}
calculate();

//Task 2 Creates a function that divides two numbers an error if denominator is zero. use a try-catch block to handle error
function divide(numerator, denominator) {
  if (typeof denominator !== "number" || typeof numerator !== "number") {
    throw new Error("Both arguments should be number");
  }
  if (denominator === 0) {
    throw new Error("Denominator cannot be 0");
  }
  return numerator / denominator;
}
function Performdivision() {
  try {
    const results = divide(56, 5);
    console.log("sum:", results);
  } catch (error) {
    console.log("an error occured", error);
  }
}
Performdivision();

//Activity 2 Finally-Block
//Task 3 : Write a scripts that includes a try-catch block and a finally block.Log the message in the try , catch and a finally block to observe the execution flow
function sum(a, b) {
  try {
    if (a >= b) {
      throw new Error("The first number must be less than the second number");
    }

    return a + b;
  } catch (error) {
    console.log("An error occurred:", error.message);
  } finally {
    console.log("Inside finally block");
  }
}

console.log(sum(6, 7));


//Activity 3 Custom error objects
//Task 4 Create a custom error class that extends the built in -error class .Throw an instance of this custom error in a function and handle it using a try-catch block
const person = {
  Name: "John",
  Age: 22
}

function Drinking(p) {
  if (person.Age < 21) {
    throw new Error('Person age must be 24 for drinking')

  }
  console.log(`${p.Name} is drinking!`);
}
try {
  Drinking(person)
} catch (error) {
  console.log('something went wrong', error);

};

//Task 5 write a function that validates user input(eg. checking if string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block
// Step 1: Define the Custom Error Class
class ValidationError extends Error {
  constructor(message) {
    super(message); 
    this.name = 'ValidationError'; 
  }
}
function validateInput(input) {
  if (typeof input !== 'string' || input.trim() === '') {
    throw new ValidationError('Input cannot be empty and must be a string');
  }
  return `Valid input: ${input}`;
}


function processInput(userInput) {
  try {
    const result = validateInput(userInput);
    console.log(result); 
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error(`ValidationError caught: ${error.message}`);
    } else {
      console.error(`Unexpected error: ${error.message}`);
    }
  }
}


processInput(''); 
processInput('Valid Input'); 

//Activity 4 Error handling in promises
//Task 6 create a promises that randomly resolves or rejects . use catch() to handle the rejection and log in appropiate message to console
// const randomPromise = new Promise((resolve, reject) => {
  
//   setTimeout(() => {
   
//     if (Math.random() > 0.5) {
//       resolve('Promise resolved successfully!');
//     } else {
//       reject('Promise rejected.');
//     }
//   }, 1000); 
// });


// randomPromise
//   .then((message) => {
//     console.log(message); 
//   })
//   .catch((error) => {
//     console.error('Error:', error); 
//   });


  //Task 7 use try-catch within async function to handle the errors from a promise that randomly resolves or rejects and log the error message
  // Create a promise that randomly resolves or rejects
const randomPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Randomly resolve or reject
    if (Math.random() > 0.5) {
      resolve('Promise resolved successfully!');
    } else {
      reject('Promise rejected.');
    }
  }, 1000); 
});

async function handlePromise() {
  try {
   
    const result = await randomPromise;
    console.log(result); 
  } catch (error) {
    
    console.error('Error:', error);
  }
}


handlePromise();
//Activity 5: Graceful error handling in fetch
//Task 8: use the fetch API to request data from invalid url and handle the error using .Catch()  log an appropiate message to console
// const invalidURL = 'https://invalid-url-for-testing.com/data';


// fetch(invalidURL)
//   .then(response => {
//     if (!response.ok) {
     
//       throw new Error('Network response was not ok');
//     }
   
//     return response.json();
//   })
//   .then(data => {
    
//     console.log('Response data:', data);
//   })
//   .catch(error => {
  
//     console.error('There was a problem with the fetch operation:', error);
//   });

//Task 9 Use the fetch api to request data from an invalid url within an async function and handle the error using try-catch log an appropiate message
const invalidURL = 'https://invalid-url-for-testing.com/data';

async function fetchData() {
  try {
 
    const response = await fetch(invalidURL);
    
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    
    const data = await response.json();
    console.log('Response data:', data);

  } catch (error) {
 
    console.error('There was a problem with the fetch operation:', error);
  }
}


fetchData();
