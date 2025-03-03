// Primitive data types, these datatypes are call by value and stored in stack memory.

// 1. Number
// 2. String    
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

const number = 10;
const number2 = 10.5;

const string2 = "Hello World";

const boolean = true;
const boolean2 = false;

let undefinedVar;
let nullVar = null;

const symbol = Symbol('symbol');
const symbol2 = Symbol('symbol');

// console.log(symbol === symbol2); // false

const bigInt = 1234567890123456789012345678901234567890n;


//non-primitive data types, these datatypes are call by reference and stored in heap memory.
// 1. Array
// 2. Object
// 3. Function

// Array
const heroes = ['Batman', 'Superman', 'Wonder'];

// Object
{
    name: 'John',
    age: 30,
    profession: 'Hero'
}

// Function
const simpleFunction = function(){
    console.log('Hello World');
}


//link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null