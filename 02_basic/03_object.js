//object literals
const mysym = Symbol("Key1")
const DataOfStudent ={
  Name:"Bittu",
  "Full Name":"Bittu Singh",
  [mysym]:"Mykey1",
  Age:21,
  Email:"19bcs1816@gmail.com"


}
// console.log(DataOfStudent["Full Name"])
// console.log(DataOfStudent.Age)
// console.log(DataOfStudent[mysym]);
// console.log(typeof mysym)
// console.log(DataOfStudent)

// DataOfStudent.Email = "19BCS1715@gmail.com";
// console.log(DataOfStudent.Email)
// Object.freeze(DataOfStudent)
// DataOfStudent.Email = "bitturajput202019@gmail.com" 
// console.log(DataOfStudent.Email)

//Object.freeze(DataOfStudent)

DataOfStudent.Greeting = function(){
  console.log("Hello JS USer")
}

DataOfStudent.Greeting2 = function(){
  console.log(`Hello Js User",${this.Name}`)
}
console.log(DataOfStudent.Greeting())
console.log(DataOfStudent.Greeting2())
