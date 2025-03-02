// Data Types in ECMAScript
// This file will explore different data types available in ECMAScript.

"use strict"; //treat all js code as new version of js

// alert("Data Types in ECMAScript"); //it will show a pop-up message in browser, but it is not recommended to use it in node.js

// console.log(3
//     +
//     4); //code readability is important, so we can not write code like this
// );


// Data Types in ECMAScript
// 1. Primitive Data Types

let name = "Neeraj"; //string
let age = 30; //number
let isApproved = true; //boolean (true/false)
let firstName = undefined; //undefined (variable declared but not assigned any value)
let lastName = null; //null (intentional absence of any value)
let largeNumber = BigInt(1234567890123456789012345678901234567890n); //bigint (large number)
let symbol = Symbol("symbol"); //symbol (unique identifier) example: const id = Symbol("id");

// 2. Reference Data Types

// Object

console.log(typeof null); //object (null is a primitive data type, but it is a bug in js)
console.log(typeof undefined); //undefined


//typeof operator is used to find the data type of a variable
console.log(typeof "Neeraj"); //string
console.log(typeof 30); //number
console.log(typeof true); //boolean

