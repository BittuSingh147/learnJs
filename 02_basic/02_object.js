const tinderuser = {}
tinderuser.name = "Bittu"
tinderuser.Age = 21
console.log(tinderuser)


const newUser = {
  Name:"Prahlad",
  fullName:{

    FirstName :"Bittu",
    LastNAme : "Singh"


  }
}
console.log(newUser.fullName.FirstName)

const obj1={a:1,b:2}
const obj2 ={c:3,d:4}
const obj4 = {e:5,f:6}

//const obj3=(Object.assign({},obj1,obj2,obj4))This is called object assign for merging two or more object
const obj3={...obj1,...obj2,...obj4}//object spread
console.log(obj3)
const users = [
  {
      id: 1,
      email: "h@gmail.com"
  },
  {
      id: 1,
      email: "h@gmail.com"
  },
  {
      id: 1,
      email: "h@gmail.com"
  },
]

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
//console.log(Object.entries(tinderUser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Bittu"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Bittu",
//     "coursename": "js in hindi",
//     "price": "free"
// }

