// //Global Scope and Local Scope
// let globalvar = " I am global scope"

// function myFunction(){
//   let localvar = "I am local scope"

//   console.log(globalvar)
//   console.log(localvar)

// }
// myFunction();
// console.log(globalvar)//It is accessible from anywhere in code
//   //console.log(localvar)//it shows error



//Nested Scope

function one() {
  let username = "Bittu"

  function two() {
    let websitename = " Github"
    console.log(username)

    if (username === "Bittu") {
      if (websitename === " Github") {
        console.log(username + websitename)


      }

    }
  }
  two();
}
one();

console.log(addnum1(5))//it is called hositing
function addnum1(num) {
  return num + 1
}


const addnum2 = function (num2) {
  return num2 + 2

}
console.log(addnum2(5));
