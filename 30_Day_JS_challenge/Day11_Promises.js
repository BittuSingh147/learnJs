//Activity 1 Understanding promises
//Task 1 Create a promises that resolves with a message after a 2-second timeout and log the message into the console.
const mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Message recieved after 2 seconds')
  }, 2000);

});
mypromise.then((message) => {
  console.log(message);
});

//Task 2 Create a promise that rejects with an error message after a 2 second timeout and handle the error message using.catch()
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Something went wrong!');
  }, 2000);
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });


//Activity 2 Chaining Promises
//Task 3 Create a sequence of promises that simulate fetching data from a server.chain the promises to log the message in specific order
function fetchdatafromserver(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`data from step${step}`)
    }, 2000);
  })
}
fetchdatafromserver(1)
  .then((message1) => {
    console.log(message1);
    return fetchdatafromserver(2)
  })
  .then((message2) => {
    console.log(message2);
    return fetchdatafromserver(3)
  })
  .then((message3) => {
    console.log(message3);
  })
  .catch((error) => {
    console.log(`error:`, error);
  })

//Activity 3 Using Async/Await
//Task 4 Write an async function that waits for a promises to resolve and then logs the resolved value
function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data is ready!')
    }, 2000);
  })
}

async function logdata() {
  try {
    const result = await fetchdata();
    console.log(result);
  } catch (error) {
    console.log(`error:`, error);
  }

}
logdata();


//Task 5 Write an async function that handdles a rejected promise using try-catch and logs the error message
function data() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('something went wrong')
    }, 1000);
  })
}
async function logsdata() {
  try {
    const results = await data();
    console.log(results);

  } catch (error) {
    console.log(`error:`, error);

  }
}
logsdata()


//Activity 4 fetching Data from an ApI
//Task 6 use the fetch API to get data from a public API and log the response data to the console using promises
// const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';
// fetch(apiURL)
// .then(Response =>{
//   if (!Response.ok) {
//     throw new error('Network response wat not ok ')

//   }
//   return Response.json();
// })
// .then(data =>{
//   console.log('Response data :' , data);

// })
//  .catch(error =>{
//   console.error('There was a problem with the fetch operation:', error);
//  })


//Task 7 Use the fetch API to get data from public API and log the response data to the console using async/await
// Declare the apiURL variable first
// const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';

// // Define the async function
// async function fetchdata() {
//   try {
//     // Fetch data from the API
//     const response = await fetch(apiURL);

//     // Check if the response is okay
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     // Parse the response as JSON
//     const data = await response.json();

//     // Log the response data
//     console.log('Response data:', data);
//   } catch (error) {
//     // Handle any errors
//     console.error('There was a problem with the fetch operation:', error);
//   }
// }

// // Call the async function to execute it
// fetchdata();

//Activity 5 Concurrent Promises
//Task 9 Use promise.all to wait for a multiple promises to resolve and then log all their values
// const promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Result from promise 1 ')
//   }, 1000);

// });
// const promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Result from promise 2')
//   }, 1000);
// });
// const promise3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Result from promise 3')
//   }, 1000);
// })

// Promise.all([promise1, promise2, promise3])
//   .then((result) => {
//     console.log("all promise resolved");

//     result.forEach((result, index) => {
//       console.log(`Promise ${index + 1}: ${result}`);
//     });
//   }).catch((error) => {
//     console.error('One or more promises failed:', error);
//   })

//Task 9 Use promise.race to log the value of the first promise that resolves among multiple promises
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Result from promise 1');
  }, 2000); // Resolves after 2 seconds
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Result from promise 2');
  }, 1000); // Resolves after 1 second
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Result from promise 3');
  }, 3000); // Resolves after 3 seconds
});
Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log('The first resolved promise result', result);
  }).catch((error) => {
    console.log('error occured', error);
  })
