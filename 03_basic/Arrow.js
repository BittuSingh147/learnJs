const User = {
  UserName: "Bittu",
  Password: 1234,
  WelcomeMessage: function () {
    console.log(`${this.UserName},Welcome to my Login Page`);

  }

}
User.WelcomeMessage()
User.UserName = "Rahul"
User.WelcomeMessage()


// const chai = function () {
//   let username = "Bittuu"
//   console.log(`${this.username}`)

// }
// chai()

const addnum = (num1, num2)=> (num1 + num2)
console.log(addnum(3, 4))