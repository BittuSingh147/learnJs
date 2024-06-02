//Stack are primitive data types and Heap are nono primitive data types.
//Example of stack 
const FirstBike = "PassionPro"
let SeconndBike = FirstBike
SeconndBike = "Discover"
console.log(SeconndBike)
console.log(FirstBike);

//It shows that in Stack data has been copied 

//Example of Heap Sort
let User1 = {
  Name: "Bittu",
  UpiId: "41342@paytm",
  Email: "!9bcs1715@gmail.com"
}
console.log(User1);

let User2 = User1

User2.Email="BittuRajput202019@gmail.com"
console.log(User1.Email)
console.log(User2.Email)
//In heap sort it store data by refrence value it stores only one value at a time