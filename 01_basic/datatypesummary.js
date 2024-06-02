//Types of data dtypes
//Two types of datatypes we have
//1.Primitive
//2.Non-Primitive(Refrence datatypes)
//1.Primitive-String , Number , Boolean , Null(Null is empty not 0 ), BigInt , Symbol,Undefined

const Name = "Bittu"
const Age = 21
const IsLoggedIn = false
const Temperature = null
const LargeNumber = 747838n
const cityName = undefined;
const Id = Symbol('8488')
const IdName = Symbol('95995')
console.log(Id === IdName)
//symbol always give unique id 


//2.Non-Primitve 
//arrays , objet , function

const Cars = ["Mercedes", "BMW","Fortuner","Buggati"]
//Above one is array which is non-primitive data types and also an object

let myobj={
  name:"Bittu",
  age : 21,
  height : 5.11
}
//above one is object here it shows property and an object is object 
console.log(myobj);
console.log(typeof myobj);



const Myfunction = function(){
  console.log("Rahul")
  console.log(typeof Myfunction)

}
Myfunction()

//above one is Function when it execute it give function as a output but this is also an object 