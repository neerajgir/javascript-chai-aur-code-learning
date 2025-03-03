// Numbers and Math Operations
const markMass = 78;
console.log(markMass); // 78

const markBalance = new Number(5000);
console.log(markBalance);

console.log(markBalance.toString().length);
console.log(typeof markBalance.toString()); // string

console.log(markBalance.toFixed(2)); // 5000.00

const otherNumber = 143.555;
console.log(otherNumber.toPrecision(4)); // 143.6

const newBalance = 5000000;
console.log(newBalance.toLocaleString("en-IN")); // 5,000,000

// Math Operations

 console.log(Math);

// console.log(Math.abs(-5)); // 5, absolute value
// console.log(Math.round(5.5)); // 6, round to nearest integer
// console.log(Math.ceil(5.1)); // 6, round up
// console.log(Math.floor(5.9)); // 5, round down
// console.log(Math.sqrt(25)); // 5, square root
// console.log(Math.pow(2, 3)); // 8, 2^3
// console.log(Math.min(2, 3, 4, 5)); // 2, minimum value
// console.log(Math.max(2, 3, 4, 5)); // 5, maximum value

console.log(Math.random()); // random number between 0 and 1
console.log(Math.random()*10); // random number between 0 and 10
console.log(Math.random()*10 + 1); // random number between 1 and 11
console.log((Math.random()*10) + 1); // random number between 1 and 11
console.log(Math.floor(Math.random()*10) + 1); // random number between 1 and 10

const min = 20;
const max = 50;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between 20 and 50





 
 