console.log(2<1);

console.log("2"<5)

console.log(null > 0)
console.log(null <= 0)
console.log(null ==0)

console.log(undefined >0)
console.log(undefined <=0)
console.log(undefined ==0)

/*undefined > 0 evaluates to false because undefined is converted to NaN, and NaN is not greater than 0.
undefined <= 0 evaluates to false because undefined is converted to NaN, and NaN is not less than or equal to 0.
undefined == 0 evaluates to false because undefined is not loosely equal to 0.*/