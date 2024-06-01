let score = "33abc"
console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
number 33 output is number
when we print  "33abc" it is convert into string
*/

//convert number into boolean//
let loggedIn = 0;
console.log(typeof loggedIn);

let convertIntoBoolean = Boolean(loggedIn)
console.log(typeof convertIntoBoolean);
console.log(convertIntoBoolean);

//convert number into string
let num = 56
console.log(typeof num)

let ChangeIntoString = String(num)
console.log(typeof ChangeIntoString);
console.log(ChangeIntoString);

//operations//
let value = 3
let negValue= -value;
console.log(negValue);

// adding two string
let str1 = "Hello";
let str2 = "Bittu";
let str3 = str1 + str2;
console.log(str3);

//adding string and number
let name = "Bittu";
let age = 21;
let information= name+age;
console.log(information);