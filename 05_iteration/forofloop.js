//forof Loop of Array

// let arr = [1,2,3,4,5]
// for (const num of arr) {
//   console.log(num)
  
// }


//forOf loop of String

// let Greeting = "Hello World"
// for (const Greet of Greeting) {
//   console.log(Greet);
  
// }


//Forof in Map
const map = new Map()
map.set('In' , 'India')
map.set('US' , 'United States')
map.set('NZ' , 'New-Zeland')

for (const [Key, Value] of map) {
  console.log(Key + '='+ Value);
  
}
//We can't iterate object by forof
