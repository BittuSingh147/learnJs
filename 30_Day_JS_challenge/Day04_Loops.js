//Loops
//Task1: Write a program to print  to 10 number using a for  loops
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   console.log(element);
// }

//Task 2 Write a program to print multipication table of 5 using for loop
// const number = 5
// for (let index = 1; index <= 10; index++) {
//   const element = index;
//   const result = number*element
//   console.log(`${number}*${element}=${result}`);
// }


//Task 3 Write a program to calculate sum of numbers from 1 to 10 by using while loops
// let number = 0;
// let index = 1;
// while (index <= 10) {
//   number += index;
//   index++
// }
// console.log(`The sum of numbers from 1 to 10 is ${number}`);


//Task 4 Write a program from 10 to 1 using while loop


// let index = 10;
// while (index >= 1) {
//   console.log(index);
//   index--
// }


//Task 5 Write a program to print numbers from 1 to 5 in do while loop
// let number = ""
// let index = 1;
// do {

//   number += index + " "
//   index++;
// } while (index <= 5);
// console.log(number);

//Task 6 Write a program to calculate the  factorial of number using a do while loop
// const number = 5;
// let factorial = 1;
// let index = number;
// do {
//   factorial *= index
//   index--

// } while (index >= 1);
// console.log(`The factorial of ${number} is ${factorial}`);

//Task 7 write a program to print a pattern using nested loops
// const numberrows = 5;
// //outer loops
// for (let i = 1; i <= numberrows; i++) {
//   let pattern = "";

//   //innerloops
//   for (let j = 1; j <= i; j++) {
//     pattern += "*"

//   }
//   console.log(pattern);
// }

//Task 8 WAp program to print 1 to 10 but skip the number 5 using continue statement

// for (let index = 0; index <= 10; index++) {
//   const element = index;
//   if (index == 5) {
//     console.log("detucted");
//     continue;
//   }
//   console.log(element);

// }
//Task 9 WAp program to print 1 to 10 but skip the number 7 using break statement
for (let index = 0; index <= 10; index++) {
  const element = index;
  if (index == 7) {
    console.log("End loop here");
    break
  }
  console.log(element);
}