//Activity 1 Class defination
//Task 1: Define a class person with properties name and age, and a method return to greeting message .Create an instance of class and log the greeting message
//Task 2: Add a method to the Person class that updates the age property and logs the updated age.
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   returnGreeting() {
//     return `Hello My name is ${this.name} and my age is ${this.age}`
//   }
//   updateAge(newAge) {
//     this.age = newAge;
//     console.log(`Update age is: ${this.age}`);
//   }

// }
// const Personinstance = new Person('Bittu', 23);
// console.log(Personinstance.returnGreeting());
// Personinstance.updateAge(24);

//Activity 2: Class Inheritance
//Task 3: Define a class student that extends the person class.And a property studentId and a method return the studentID.create an instance of the student class and log the student ID.
//Task 4 Overide the greeting method in the student class to include the studentID in the message .Log the overriden greeting message.
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   returnGreeting() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }

//   updateAge(newAge) {
//     this.age = newAge;
//     console.log(`Updated age: ${this.age}`);
//   }
// } class Student extends Person {
//   constructor(name, age, studentID) {
//     super(name, age);
//     this.studentID = studentID;
//   }
//   returnGreeting() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and my student id is ${this.studentID}`;
//   }
//   returnStudentID() {
//     return `student id:${this.studentID}`
//   }

// }

// class PendingFees extends Person {
//   constructor(name, age, studentID, pendingFees) {
//     super(name, age, studentID)
//     this.pendingFees = pendingFees
//   }
//   returnPendingfeesamount() {
//     return `Student ${this.name} pending fees amount is: ${this.pendingFees}`
//   }
// }
// const personInstance = new Person('Bittu', 23);
// console.log(personInstance.returnGreeting());
// personInstance.updateAge(24);

// const studentInstance = new Student('Bittu', 21, 'S1231');
// console.log(studentInstance.returnGreeting());

// const pendingFeesInstance = new PendingFees('Bittu', 23, 'S1231', '$500');
// console.log(pendingFeesInstance.returnPendingfeesamount());

//Activity 3: Static Methods and properties
//Task 5:Add a static method to the person that returns generic greeting message .Call this static method without creating an instance of the class and log the message.
//Task 6 Add a static property to the student class to keep track of the number of student created .Increment the property in the constructor and log the total number of students.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   returnGreeting() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
//   static genericGreeting() {
//     return 'Hello this is a generic greeting message.'
//   }

//   updateAge(newAge) {
//     this.age = newAge;
//     console.log(`Updated age: ${this.age}`);
//   }
// } class Student extends Person {
//   static studentCount = 0;
//   constructor(name, age, studentID) {
//     super(name, age);
//     this.studentID = studentID;
//    Student.studentCount++;
//   }
//   returnGreeting() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and my student id is ${this.studentID}`;
//   }
//   returnStudentID() {
//     return `student id:${this.studentID}`
//   }
//   static getStudentCount() {
//     return `Total number of students: ${Student.studentCount}`;
//   }

// }

// class PendingFees extends Person {
//   constructor(name, age, studentID, pendingFees) {
//     super(name, age, studentID)
//     this.pendingFees = pendingFees
//   }
//   returnPendingfeesamount() {
//     return `Student ${this.name} pending fees amount is: ${this.pendingFees}`
//   }
// }
// console.log(Person.genericGreeting());
// const personInstance = new Person('Bittu', 23);
// console.log(personInstance.returnGreeting());
// personInstance.updateAge(24);

// const studentInstance = new Student('Bittu', 21, 'S1231');
// console.log(studentInstance.returnGreeting());
// const student2 = new Student('Ajay', 22, 'S1232');
// console.log(student2.returnGreeting());

// const student3 = new Student('Dinesh', 23, 'S1233');
// console.log(student3.returnGreeting());

// // Log the total number of students created
// console.log(Student.getStudentCount());
// const pendingFeesInstance = new PendingFees('Bittu', 23, 'S1231', '$500');
// console.log(pendingFeesInstance.returnPendingfeesamount());

//Activity 4 Getter and Setters
//Task 7:Add a getter method to the person class to the return the full name(assume a firstname and lastname property).Create an instance and log the full name using getter and setters
//Task 8 : Add a setter method to the person class to update the name properties (first name and lastname).Update the name using the setter and log the updated full name.
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }

  returnGreeting() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }

  static genericGreeting() {
    return 'Hello! This is a generic greeting message.';
  }
}

class Student extends Person {
  static studentCount = 0;

  constructor(firstName, lastName, age, studentID) {
    super(firstName, lastName, age);
    this.studentID = studentID;
    Student.studentCount++;
  }

  returnGreeting() {
    return `Hello, my name is ${this.fullName}, I am ${this.age} years old, and my student ID is ${this.studentID}.`;
  }

  returnStudentID() {
    return `Student ID: ${this.studentID}`;
  }

  static getStudentCount() {
    return `Total number of students: ${Student.studentCount}`;
  }
}

class PendingFees extends Student {
  constructor(firstName, lastName, age, studentID, pendingFees) {
    super(firstName, lastName, age, studentID);
    this.pendingFees = pendingFees;
  }

  returnPendingFeesAmount() {
    return `Student ${this.fullName} has pending fees amount of: ${this.pendingFees}`;
  }
}

const personInstance = new Person('Bittu', 'Singh', 23);
console.log(personInstance.fullName);
personInstance.fullName = 'Alice Johnson';
console.log(personInstance.fullName);
console.log(personInstance.returnGreeting());

//Activity 5:Private Fields:
//Task 9 Define a accounts with private fields for balance and method to deposit and withdraw money .Ensure that the balance can only be updated through these methods
//Task 10: Create an instance of account class and test the deposit and withdraw methods,logging the balance after each operations.
class Account {
  #balance; // Private field

  constructor(initialBalance) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this.#balance = initialBalance;
  }


  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.#balance += amount;
    console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
  }

 
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
    console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
  }

 
  getBalance() {
    return this.#balance;
  }
}


const myAccount = new Account(100);

console.log(`Initial balance: $${myAccount.getBalance()}`); 

myAccount.deposit(50); 
console.log(`Balance after deposit: $${myAccount.getBalance()}`); 
myAccount.withdraw(30); 
console.log(`Balance after withdrawal: $${myAccount.getBalance()}`); 
try {
  myAccount.deposit(-10); 
} catch (error) {
  console.log(error.message); 
}

try {
  myAccount.withdraw(200); 
} catch (error) {
  console.log(error.message); 
}

try {
  myAccount.withdraw(-10); 
} catch (error) {
  console.log(error.message); 
}
