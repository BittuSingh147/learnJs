// const User = {
//   UserName: "Bittu",
//   Password: 1234,
//   WelcomeMessage: function () {
//     console.log(`${this.UserName},Welcome to my Login Page`);

//   }

// }
// User.WelcomeMessage()
// User.UserName = "Rahul"
// User.WelcomeMessage()


// // const chai = function () {
// //   let username = "Bittuu"
// //   console.log(`${this.username}`)

// // }
// // chai()

// const addnum = (num1, num2) => (num1 + num2)
// console.log(addnum(3, 4))


//IIFE(Immediatly Invoked Function Expression)

(function chai() {
  console.log('Database Connected');
})();//use semicolon to diffrentiate IIFE 

((Name) => {
  console.log(`My name is ,${Name}`) // We can not use this method in Arrow function
}
)("Bittu")