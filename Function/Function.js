// This file is for practicing JavaScript functions
// Simple and beginner-friendly

// 1. Normal function
function sayHello() {
  console.log("Hello!");
}

sayHello();

// 2. Function with parameter
function greet(name) {
  console.log("Hello " + name);
}

greet("Sneha");

// 3. Function with return value
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log("Sum is:", result);

// 4. Arrow function
const multiply = (a, b) => {
  return a * b;
};

console.log("Multiply:", multiply(4, 5));

// 5. ATM example
function withdraw(balance, amount) {
  if (amount > balance) {
    return "Insufficient balance";
  } else {
    return balance - amount;
  }
}

let myBalance = 5000;
let newBalance = withdraw(myBalance, 2000);
console.log("New Balance:", newBalance);

// 6. Shopping discount example
function calculateDiscount(price, discount) {
  let discountAmount = (price * discount) / 100;
  let finalPrice = price - discountAmount;
  return finalPrice;
}

let final = calculateDiscount(4000, 10);
console.log("Final price:", final);

// 7. Function with loop
function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5);
