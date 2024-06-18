// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   console.log(element);

// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`outer element : ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + '*' + j + '=' + i * j);
//   }
// }

//Array in for loop
// let Superheroes = ["Shaktiman", "NinjaHAthouri", "Rahul Gandhi", "Nanapatekar"]
// console.log(Superheroes.length);
// for (let i = 0; i < Superheroes.length; i++) {
//   const element = Superheroes[i];
//   console.log(element);
  
// }

// USing break and Continue method in forloop
// for (let index = 0; index <=10; index++) {
//    const element = index;
//   if (index == 5) {
//     console.log('5 is detected');
//     break
//   }
//   console.log(element);
  
// }

for (let index = 0; index <=10; index++) {
  const element = index;
  if (index == 5) {
    console.log('5 is detucted');
    continue
  }
  console.log(element);
  
}
