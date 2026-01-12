//1️⃣ for Loop Answers

/*//Q1. Print numbers from 1 to 10

let i = 1;

for (let i = 1 ; i <= 10; i++){
    console.log(i);
}

//Q2. Print even numbers from 1 to 20

for (let i = 2; i <=20; i+= 2){
    console.log(i);

}

2️⃣ while Loop Answers
//Q3. Find sum of numbers from 1 to 5 */

/*let sum = 0;

for (let i = 1; i <= 5; i++){
    sum = sum + i;

}
console.log(sum);*/


//Q4. Print multiplication table of 2
/*for (let i = 1; i <= 10 ; i++){
    console.log("2x" + i + "=" +(2*1));

}
2️⃣ while Loop Answers
//Q1. Print numbers from 5 to 1 (reverse)

let i=5;

while(i>=1){
    console.log(i);
    i--;

}*/

//Q2. Print numbers until they become 0

/*let i = 5;
while (i >= 0){
    console.log(i)
    i--;
}*/

//Q3. Keep subtracting 2 from 20 until it becomes 0

/*let num = 20;
while (num > 0){
    console.log(num);

    num = num -2;
}*/
//3️⃣ for...of Loop Answers (Arrays)
//Q1. Print each number
let nun =[10,20,30,40,50];

for (let n of nun)
{
    console.log(n);
}
//Q2. Find total of all numbers
let total = 0;

for (let n of nums) {
  total = total + n;
}

console.log(total);
//Q3. Print only numbers greater than 20
for (let n of nums) {
  if (n > 20) {
    console.log(n);
  }
}
//4️⃣ for...in Loop Answers (Objects)
let marks = {
  math: 80,
  english: 70,
  science: 90
};
//Q1. Print all subjects
for (let subject in marks) {
  console.log(subject);
}
//Q2. Print all marks
for (let subject in marks) {
  console.log(marks[subject]);
}
//Q3. Find total marks
let total = 0;

for (let subject in marks) {
  total = total + marks[subject];
}

console.log(total);
