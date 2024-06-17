//Global Scope and Local Scope
let globalvar = " I am global scope"

function myFunction(){
  let localvar = "I am local scope"

  console.log(globalvar)
  console.log(localvar)

}
myFunction();
console.log(globalvar)//It is accessible from anywhere in code
  //console.log(localvar)//it shows error

