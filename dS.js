var students = [
  "Bob",
  "Susy",
  "Ted",
  "Sarah",
  "Bill"
];

// console.log(students[4]);

var bob   = { name: "Bob", age: 17 };
var susy  = { name: "Susy", age: 18 };
var ted   = { name: "Ted", age: 18 };
var sarah = { name: "Sarah", age: 20 };
var bill  = { name: "Bill", age: 19 };

// console.log(bob.name);

var students = [
  { name: "Bob", age: 17 },
  { name: "Susy", age: 18 },
  { name: "Ted", age: 18 },
  { name: "Sarah", age: 20 },
  { name: "Bill", age: 19 }
];

students.push({ name: "Steve", age: 52 });

var beau = { name: "Beau", age: 21 };
students.push(beau);

console.log(students[3].age);
