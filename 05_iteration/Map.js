const nums = [1, 2, 3, 4, 5]
const newnum = nums.map((num) => num + 10)
  .map((num) => num + 1)
  .filter((num) => num >= 12)
console.log(newnum);


