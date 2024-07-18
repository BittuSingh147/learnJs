//if else statement
let number = 4;
if (number > 0) {
  console.log("Positive number ");
  
} else if (number < 0) {
  console.log("Negative number ");
  
} else {
  console.log("Print equal ");
  
}

//Task 2 Person age
let personage = 12;
if (personage >=18) {
  console.log("He can vote");
  
}
else{
  console.log("He can't vote");
}
//Task 3 to perform largest of three numbers
let a = 4;
let b = 6;
let c = 9;

if (a >= b && a >= c) {
  console.log("a is the largest number");
} else if (b >= a && b >= c) {
  console.log("b is the largest number");
} else {
  console.log("c is the largest number");
}


//Task 4  switch case weekdays

const Week = 5
switch (Week) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    break;
    case 7:
    console.log("Sunday");
    break;

  default:
    console.log("No matches");
    break;
}

//Task 5 assign a grade  based on score
const score = 70;

switch (true) {
  case (score >= 90):
    console.log("A Grade");
    break;
  case (score >= 80):
    console.log("B Grade");
    break;
  case (score >= 60):
    console.log("C Grade");
    break;
  case (score >= 40):
    console.log("D Grade");
    break;
  case (score >= 25):
    console.log("E Grade Fail");
    break;
  default:
    console.log("No result declared");
    break;
}

//Task 6 write a program that uses the ternary operators to check if number is even or odd and log the result to the console
let num = 5;
EvenorOdd =  num % 2 === 0 ? 'Even' : 'Odd'
console.log(EvenorOdd);

//Task 7 Write a program to check if a year is a leap year using multiple conditions (divisible by 4 , but not 100 unless also divide by 400)and log the result to the console
let year = 1996;
if ((year % 4===0 && year % 100===0) ||(year % 400===0)) {
  console.log("This is a leap year");
  
} else{
console.log("This is not leap year");
}