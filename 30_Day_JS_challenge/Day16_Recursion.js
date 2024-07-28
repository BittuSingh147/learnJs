//Activity 1 Basic Recursion
//Task 1:Write a recursive function to calculate the factorial of a number .Log the result for a few test cases.
function findFactorial(num) {
  if (num <= 1) {
    return 1;
  }

  return num * findFactorial(num - 1);
}


console.log(findFactorial(5));
console.log(findFactorial(3));
console.log(findFactorial(0));
console.log(findFactorial(7));

