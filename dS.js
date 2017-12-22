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

// console.log(students[3].age);

var twoD = [
  ["Bob", "Susy", "Ted"],
  ["Lilly", "Sarah", "Bill"],
  ["Thomas", "Barry", "Alex"]
];

// console.log(twoD[1][0]);

var classes = [
  [
    { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
    { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
    { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
    { firstName: 'Lulu', lastName: 'Considine', age: 20 },
    { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
  ],
  [
    { firstName: 'Charlie', lastName: 'Rolfson', age: 23 },
    { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
    { firstName: 'Emie', lastName: 'Franecki', age: 29 },
    { firstName: 'Okey', lastName: 'Runte', age: 18 },
    { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
  ],
  [
    { firstName: 'Antwan', lastName: 'Marquardt', age: 22 },
    { firstName: 'Eugenia', lastName: 'Nienow', age: 23 },
    { firstName: 'Keely', lastName: 'Hagenes', age: 29 },
    { firstName: 'Jazmin', lastName: 'Aufderhar', age: 29 },
    { firstName: 'Stanley', lastName: 'Hand', age: 22 }
  ],
  [
    { firstName: 'Vincent', lastName: 'Langworth', age: 20 },
    { firstName: 'Mervin', lastName: 'Blick', age: 28 },
    { firstName: 'Damien', lastName: 'Rohan', age: 28 },
    { firstName: 'Fabian', lastName: 'Kautzer', age: 22 },
    { firstName: 'Lilliana', lastName: 'Lesch', age: 26 }
  ],
  [
    { firstName: 'Antonette', lastName: 'Stokes', age: 25 },
    { firstName: 'Alexandrine', lastName: 'DuBuque', age: 22 },
    { firstName: 'Braeden', lastName: 'Walker', age: 26 },
    { firstName: 'Derick', lastName: 'Weber', age: 22 },
    { firstName: 'Robert', lastName: 'Beatty', age: 30 }
  ]
];

console.log(classes[1][3].age);
