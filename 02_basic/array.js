const Myarr = [0, 1, 2, 3, 4, 5]
//const myHeroes = ["Shaktiman", "Mighty-RAju", "Power-Ranger", "chota-Bheem"]

//console.log(Myarr)
//console.log(myHeroes)
// Myarr.push(6)
// console.log(Myarr)
//It is used for add element in array
// Myarr.pop()
// console.log(Myarr)
//It is used for delete last element in array

// Myarr.unshift(9)
// console.log(Myarr)//for shifting element in front

// Myarr.shift()
// console.log(Myarr)



// console.log(Myarr.includes(9)); // Outputs: false
// console.log(Myarr); // Outputs: [1, 2, 3, 4, 5]

// console.log(Myarr.indexOf(3))
// console.log(Myarr)

let slicedarray = Myarr.slice(1, 3)
console.log(slicedarray)
console.log(Myarr); 


let splicedArray = Myarr.splice(1, 3);
console.log(splicedArray); // Outputs: [2, 3, 4]
console.log(Myarr); // Outputs: [1, 5]
