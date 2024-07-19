//Array craetion and access
//Task1&2create an array from number 1 to 5 and log the array in consoleand access the fisrt and last elements
// let array = [1, 2, 3, 4, 5]
// console.log(array);
// console.log(array[0]);//first element
// console.log(array[4]);

//Array Methods basic
//Task 3 to 6 for basic method add , remove , shift and unshift Use the push method to add a new number to the end of array and log the updated array
// const arr = [1, 2, 3, 4, 5]
// console.log(arr.push(6));//Add a new number in last
// console.log(arr.pop(6));// Remove a new number in last
// console.log(arr.shift());//shift method remove the first number in array
// console.log(arr.unshift(7));//unshift method to add a new number in begining
// console.log(arr);

//Array Method intermediate
//Task 7 use the map method to create a new array where each number is doubled and log the new array
// const number = [1, 2, 3, 4]
// const doublenumber = number.map(num => num * 2);
// console.log(doublenumber);

//Task 8 use the filter method to create a new array with only even numbers and logs the new array

// const number = [1, 2, 3, 4]
// const doublenumber = number.filter(num => num%2===0);
// console.log(doublenumber);

// Task 9 use the Reduce method to calculate the sum of all number in this array and log into result
// const number = [1, 2, 3, 4,5]
// const doublenumber = number.reduce((accumulator , currentvalue)=>{
//   return accumulator + currentvalue;

// },0);
// console.log(doublenumber);

//Array Iteration
//Task 10  Use a for loop to iterate over the array and log each element to the console
// let array =[1,2,3,4,5,6,7,8,9,10]
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(element);
// }

//Task 11 Use for each method to iterate over the array and log each element to console
// let array =[1,2,3,4,5,6,7,8,9,10]
// array.forEach(element => {
//   console.log(element);
// });

//Multi-Dimensionsal arrays
//Task 12 and 13 Create a two-dimensional array(matrix)and log the array in the console access and log a specific element from the two -dimensional element
let array = [
  [1, 2, 3],
  [2, 3, 4]
]
let element = array[0][2]
console.log(element);

console.log(array);