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

//Task 4 : Write a recursive function to find the maximum element in array .Log the result for console.
function findMax(arr) {

  if (arr.length === 1) {
    return arr[0];
  }

  let restMax = findMax(arr.slice(1));

  return arr[0] > restMax ? arr[0] : restMax;
}


console.log(findMax([1, 2, 3, 4, 5]));
console.log(findMax([10, 20, 30]));
console.log(findMax([-10, -20, -30, -5]));
console.log(findMax([7, 3, 5, 9, 6]));
console.log(findMax([100, 200, 300, 50])); 

//Activity 3 String Manipulation with recursion
//Task 5:Write a recursive function to reverse a string .Log the result for few test cases.
function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("hello")); 
console.log(reverseString("world")); 
console.log(reverseString("JavaScript")); 
console.log(reverseString("")); 
console.log(reverseString("a")); 

//Task 6:Write a recursive function to check if string is palindrome .Log the result for few cases.
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("madam")); 
console.log(isPalindrome("a")); 
console.log(isPalindrome("")); 
console.log(isPalindrome("abccba")); 
console.log(isPalindrome("abcd")); 

//Activity 4 Recursive search
//Task 7 : Write a recursive function to perform a binary search on a sorted array .log the index of a target elements for a few test.
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  // Base case: if the range is invalid, the target is not present
  if (left > right) {
    return -1;
  }

  // Find the middle index
  const mid = Math.floor((left + right) / 2);

  // Check if the middle element is the target
  if (arr[mid] === target) {
    return mid;
  }

  // If the target is less than the middle element, search in the left half
  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  }

  // If the target is greater than the middle element, search in the right half
  return binarySearch(arr, target, mid + 1, right);
}


console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)); // 6
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // 9
console.log(binarySearch([], 1)); // -1

//Task 8:Write a recursive function to count the occurence of a target element in an array.Log the result for few test cases.
function countOccurrences(arr, target) {
  // Base case: if the array is empty, return 0
  if (arr.length === 0) {
    return 0;
  }
  
  // Check if the first element is the target and add the result of the rest of the array
  let count = arr[0] === target ? 1 : 0;
  
  // Recursive case: count occurrences in the rest of the array
  return count + countOccurrences(arr.slice(1), target);
}

// Test cases
console.log(countOccurrences([1, 2, 3, 4, 5], 3)); // 1
console.log(countOccurrences([1, 2, 2, 4, 5], 2)); // 2
console.log(countOccurrences([1, 1, 1, 1, 1], 1)); // 5
console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // 0
console.log(countOccurrences([], 1)); // 0
console.log(countOccurrences([1, 2, 3, 4, 5, 2, 2, 2], 2)); // 4
console.log(countOccurrences([7, 7, 7, 7, 7], 7)); // 5

//Activity 5: Tree Traversal
//Task 9: Write a recursive function to perform in-order traversal of a binary tree .Log the nodes as they are visited.

// class TreeNode {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

// function inOrderTraversal(root) {
//   // Base case: if the node is null, return
//   if (root === null) {
//     return;
//   }
  
//   // Traverse the left subtree
//   inOrderTraversal(root.left);
  
//   // Visit the root node
//   console.log(root.value);
  
//   // Traverse the right subtree
//   inOrderTraversal(root.right);
// }



// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);

// // Perform in-order traversal and log the nodes
// inOrderTraversal(root); // Output: 4 2 5 1 3


//Task 10:Write a recursive function to calculate the depth of a binary tree .Log the result for few test cases.
  class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  function calculateDepth(root) {
    
    if (root === null) {
      return 0;
    }
    
  
    const leftDepth = calculateDepth(root.left);
    const rightDepth = calculateDepth(root.right);
    
    
    return 1 + Math.max(leftDepth, rightDepth);
  }
  
  
  
  const tree1 = new TreeNode(1);
  tree1.left = new TreeNode(2);
  tree1.right = new TreeNode(3);
  tree1.left.left = new TreeNode(4);
  tree1.left.right = new TreeNode(5);
  
 
  
  const tree2 = new TreeNode(1);
  tree2.left = new TreeNode(2);
  tree2.left.left = new TreeNode(3);
  

  
  const tree3 = new TreeNode(1);
  tree3.left = new TreeNode(2);
  tree3.right = new TreeNode(3);
  tree3.right.right = new TreeNode(4);
  
  // Perform depth calculations and log the results
  console.log(calculateDepth(tree1)); // Output: 3
  console.log(calculateDepth(tree2)); // Output: 3
  console.log(calculateDepth(tree3)); // Output: 3
  console.log(calculateDepth(null)); // Output: 0 (empty tree)
    