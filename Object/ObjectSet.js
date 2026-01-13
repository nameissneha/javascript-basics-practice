// =======================
// OBJECT PRACTICE (BASIC)
// =======================

// 1. Create an object
let user = {
  name: "Sneha",
  age: 25,
  city: "Brno"
};

console.log("User:", user);

// 2. Access object values
console.log("Name:", user.name);
console.log("Age:", user.age);
console.log("City:", user.city);

// Another way to access
console.log("Name:", user["name"]);

// 3. Change a value
user.age = 26;
console.log("Updated age:", user.age);

// 4. Add new property
user.email = "sneha@gmail.com";
console.log("After adding email:", user);

// 5. Delete a property
delete user.city;
console.log("After deleting city:", user);

// 6. Loop through object
console.log("Looping through object:");
for (let key in user) {
  console.log(key + ":", user[key]);
}

// =======================
// REAL LIFE EXAMPLE
// =======================

let product = {
  name: "Shoes",
  price: 2000,
  inStock: true
};

console.log("\nProduct name:", product.name);
console.log("Product price:", product.price);

// =======================
// ARRAY OF OBJECTS (VERY IMPORTANT)
// =======================

let students = [
  { name: "Amit", marks: 80 },
  { name: "Riya", marks: 90 },
  { name: "John", marks: 70 }
];

// Loop array of objects
console.log("\nStudent list:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name + " - " + students[i].marks);
}
