function SaymyName() {
  console.log("B");
  console.log("I");
  console.log("t");
  console.log("t");
  console.log("u");
}
//SaymyName()

// function sumof(number1,number2){
//   console.log(number1+number2)

// }
// sumof(3,4)
function sumof(number1, number2) {
  return number1 + number2 //please do not add any value after return

}
const Result = sumof(4, 5)
console.log("Result:", Result)

function loginusermessage(username = "Rahul") {
  if (username === undefined) {
    console.log("Enter your username")
  }
  return `${username} Just Logged In`
}
console.log(loginusermessage("Bittu"))


function Calculatecartprice(val1, val2, ...num1) {
  return num1
}
console.log(Calculatecartprice(200, 400, 656, 800))

const user = {
  Name: "Bittu",
  age: 21
}
function Details(user) {
  console.log(`Name is ${user.Name} and age is ${21}`)
}
Details(user)

const newArray = [100, 200, 300, 400, 500]

function returnsecondvalue(getArray) {
  return getArray[1]
}
console.log(returnsecondvalue(newArray))