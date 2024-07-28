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

//Task 2 Write a recursive function to find nth fibonacci number.Log into the result.
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));

//Activity 2 Recursion with arrays
//Task 3:Write a recursive function to find the sum of all elements in an array.Log the result for a few test cases.
function sumofarray(arr) {
  if (arr.length === 0) {
    return 0;

  }
  return arr[0] + sumofarray(arr.slice(1));
}
console.log(sumofarray([1, 2, 3, 4, 5]));
console.log(sumofarray([10, 20, 30]));
console.log(sumofarray([]));
console.log(sumofarray([7, -2, 5, 3]));
console.log(sumofarray([100, 200, 300, 400]));

