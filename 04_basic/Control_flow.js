//Control flow in javascript(Logic control)
//Boolean Statement 
// const IsLoggedIn = true
// if (IsLoggedIn == 0) {
//   console.log("User is Logged in successfully");
// }
// console.log("user is not loggedin");


// const Temperature = 41
// if (Temperature == 40) {
//   console.log("Temperature is High");

// } else {
//   console.log("temperature is not high");

// }


// const Score = 200
// if (Score > 100) {
//   const power = "fly"
//   console.log(`User power : ${power}`);

// }

// const balance = 1000;
// if (balance == 500) {
//   console.log("you have enough moneey");

// } else if (balance != 900) {
//   console.log("you have enough moneey");

// } else {
//   console.log("you have  not enough moneey");
// }

const UserLoggedIn = true;
const debitcard = true;
const LoggedInFromGmail = false;
if (LoggedInFromGmail) {
  console.log("User Logged In");

}
if (LoggedInFromGmail == UserLoggedIn && debitcard) {
  console.log("Allow to Shopping");
}else{
  console.log("Sorry you can't Shop");
}
