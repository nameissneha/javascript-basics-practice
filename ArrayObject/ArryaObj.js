
// ARRAY PRACTICE (BASIC)


// 1. Create an array
let fruits = ["apple", "banana", "mango"];
console.log("Original array:", fruits);

// 2. Access values (index starts from 0)
console.log("First fruit:", fruits[0]);  // apple
console.log("Second fruit:", fruits[1]); // banana

// 3. Change a value
fruits[1] = "orange";
console.log("After changing value:", fruits);

// 4. Add value at end
fruits.push("grapes");
console.log("After push:", fruits);

// 5. Remove last value
fruits.pop();
console.log("After pop:", fruits);

// 6. Add value at start
fruits.unshift("kiwi");
console.log("After unshift:", fruits);

// 7. Remove first value
fruits.shift();
console.log("After shift:", fruits);

// 8. Length of array
console.log("Array length:", fruits.length);

// 9. Loop through array (VERY IMPORTANT)
console.log("Looping through array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// REAL LIFE EXAMPLE


// Marks list
let marks = [50, 60, 70, 80];

// Add new mark
marks.push(90);

// Print all marks
console.log("Marks:");
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}
