//Activity 1 Understanding Closures
//Task 1: Write a function that returns another function, where the inner function access a variable from outer function scope.Call the inner function and log the result.
function Info() {
  let name = "Bittu"

  function displayname() {
    console.log(name)
  }
  return displayname;

}
const innerfunction = Info();
innerfunction();

//Task 2: Creates a closures that maintain a private counter .Implement functions to increment and get the current value of the counter.
function createcounter() {
  let counter = 0;
  return {
    increment: function () {
      counter++;
    },
    getvalue: function () {
      return counter;

    }
  }
}
const mycounter = createcounter();
mycounter.increment();
console.log(mycounter.getvalue());
mycounter.increment();
console.log(mycounter.getvalue());
mycounter.increment();
console.log(mycounter.getvalue());

//Activity 2: Practical Closures
//Task 3: Write a function that generates uniques'id Use the closures to keep track of last generated id and increment it with each call.
function creategenerateid() {
  let lastID = "1294";

  return function () {
    lastID++;
    return lastID;
  }
}
const generateID = creategenerateid();
console.log(generateID());
console.log(generateID());

//Task 4 : Create a closures that capture a user'sname and returns a function that greets the user by name.
function username() {
  let name = "Bittu Singh"

  function greeting() {
    return `Hy My name is ${name}`

  }
  return greeting;

}
const greet = username();
console.log(greet());


//Activiy 3 Closures in Loops

//Task 5 Write a loop that creates an array of functions.Each function should log its index when called.Use a closure to ensure that each function logs the correct index.
function createLoggingFunctions() {
  const functionsArray = [];

  for (let index = 0; index < 10; index++) {
    functionsArray.push((function(i) {
      return function() {
        console.log(i);
      };
    })(index));
  }

  return functionsArray;
}

const loggingFunctions = createLoggingFunctions();

loggingFunctions[0](); 
loggingFunctions[1](); 
loggingFunctions[2](); 
loggingFunctions[9](); 


//Activity 4:Module Pattern
//Task 6: Use closure to create a simple module for managing and collecting items .Implement methods to add,remove and list of items.
function createItemManager() {
  let items = []; 
  return {
    addItem: function(item) {
      items.push(item);
    },
    removeItem: function(item) {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
      }
    },
    listItems: function() {
      return items.slice(); 
    }
  };
}

const itemManager = createItemManager();

itemManager.addItem('Apple');
itemManager.addItem('Banana');
itemManager.addItem('Orange');
console.log(itemManager.listItems()); 

itemManager.removeItem('Banana');
console.log(itemManager.listItems()); 


//Activity 5 Memoization
//Task 7:Write a function that memoizes the result of another function .Use a closures to store the result of previous computitions.
function memoize(fn) {
  const cache = {}; // Private cache to store results of previous computations

  return function(...args) {
    const key = JSON.stringify(args); // Create a unique key for the arguments
    if (cache[key]) {
      console.log('Returning cached result for:', args);
      return cache[key];
    } else {
      const result = fn(...args); // Compute the result
      cache[key] = result; // Store the result in the cache
      console.log('Computing result for:', args);
      return result;
    }
  };
}

// Example usage
function slowFunction(num) {
  // Simulate a slow computation
  for (let i = 0; i < 1e6; i++) {}
  return num * 2;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5)); // Computes and returns 10
console.log(memoizedSlowFunction(5)); // Returns cached result 10
console.log(memoizedSlowFunction(10)); // Computes and returns 20
console.log(memoizedSlowFunction(10)); // Returns cached result 20


//Task 8:Create a memoized version of a function that calculates the factorial of a number.
function memoize(fn) {
  const cache = {}; // Private cache to store results of previous computations

  return function(...args) {
    const key = JSON.stringify(args); // Create a unique key for the arguments
    if (cache[key]) {
      console.log('Returning cached result for:', args);
      return cache[key];
    } else {
      const result = fn(...args); // Compute the result
      cache[key] = result; // Store the result in the cache
      console.log('Computing result for:', args);
      return result;
    }
  };
}

// Factorial function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Computes and returns 120
console.log(memoizedFactorial(5)); // Returns cached result 120
console.log(memoizedFactorial(6)); // Computes and returns 720
console.log(memoizedFactorial(6)); // Returns cached result 720
console.log(memoizedFactorial(7)); // Computes and returns 5040
console.log(memoizedFactorial(7)); // Returns cached result 5040
