//Object creation and access
//Task 1 Create an object representing a book with properties like title , author ,and year ,and log the object to the console
// const Book = {
//   Tittle: "Hyper Focus",
//   Author: "Chris Bailey",
//   year: 1997
// }
// console.log(Book);

//Task 2 Access and log the tittle and author properties of the book object
// const Book = {
//   Tittle: "Hyper Focus",
//   Author: "Chris Bailey",
//   year: 1997
// }
// console.log(Book.Tittle);
// console.log(Book.Author);

//Object Methods
//Task3 Add a method to the book object that returns a string with the book's title and author , and log the result of calling his method
// const Book = {
//   Tittle: "Hyper Focus",
//   Author: "Chris Bailey",
//   year: 1997,
//   getdetails: function () {
//     return (`Tittle is ${this.Tittle} and the author of this book is ${this.Author}`)

//   }

// }
// console.log(Book.getdetails());

//Task 4 Add a method to the book of object that takes a parameter (year) and update the property 

// const Book = {
//   Tittle: "Hyper Focus",
//   Author: "Chris Bailey",
//   year: 1997,
//   Updatenewyear: function (newyear) {
//     this.year = newyear
//   }

// }
// Book.Updatenewyear(2000);
// console.log(Book.year);

//Nsted object
//Task 5 Create a nested object representing a library with properties like name and books (an array of book object and log the result to console)

// const library = {
//   name: "City Library",
//   books: [
//     {
//       title: "Hyper Focus",
//       author: "Chris Bailey",
//       year: 1997
//     },
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       year: 1925
//     },
//     {
//       title: "1984",
//       author: "George Orwell",
//       year: 1949
//     }
//   ]

// };

// console.log(library);

//Task 6 Access and log the name of the library and the titles of all the books in library
// console.log(library.books[0].title);
//Task 7 The this keyword 
//Add a method to the book object that uses the this keyword to return a string with the book's title and year , and log the result of calling this method
// const library = {
//   name: "City Library",
//   books: [
//     {
//       title: "Hyper Focus",
//       author: "Chris Bailey",
//       year: 1997,
//       // Add a method to return the book's title and year
//       getDetails: function() {
//         return `Title: ${this.title}, Year: ${this.year}`;
//       }
//     },
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       year: 1925,
//       getDetails: function() {
//         return `Title: ${this.title}, Year: ${this.year}`;
//       }
//     },
//     {
//       title: "1984",
//       author: "George Orwell",
//       year: 1949,
//       getDetails: function() {
//         return `Title: ${this.title}, Year: ${this.year}`;
//       }
//     }
//   ]
// };

// // Log the details of each book using the getDetails method
// library.books.forEach(book => {
//   console.log(book.getDetails());
// });


//Object iteration
//Task 8 Use a for..in loop to iterate over the properties of book object and log each property and its value
// const book = {
//   title: "1984",
//   author: "George Orwell",
//   year: 1949
// };


// for (let property in book) {
//   if (book.hasOwnProperty(property)) { 
//     console.log(`${property}: ${book[property]}`);
//   }
// }

//Task 9 Use Object..keys and object..values method to log all the keys and value of the book object
const book = {
  title: "1984",
  author: "George Orwell",
  year: 1949
};
// const keys = Object.keys(book)
// console.log(keys);
const values = Object.values(book)
console.log(values);


