//operations in javascript are similar to other programming languages
//operations are performed on variables or values
// + - * / % ** 

let value = 3;
let negValue = -3; //negative value

// console.log(negValue); // -3

// console.log(2+2); //4 //addition
// console.log(2-2); //0 //subtraction
// console.log(2*2); //4 //multiplication
// console.log(2/2); //1 //division
// console.log(2%2); //0 //modulus
// console.log(2**2); //4 //exponentiation

//strings
let str1 = "Hello";
let str2 = "Neeraj";

let str3 = str1 + " " + str2; //concatenation
console.log(str3); //Hello Neeraj

//only string concatenation is possible

console.log(2 + "2"); //22
console.log("1" + 2 + 3); //123
console.log("1" + 2 + 3); //123 //in this case 1 is string so it will concatenate with 2
console.log(1 + 2 + "3"); //33 //in this case 1+2=3 and then 3 will concatenate with 3

// console.log(+true); //1 //true is converted to 1
// console.log(+false); //0 //false is converted to 0

//prefix and postfix 
let x = 1;
let y = 1;

let a = ++x; //prefix increment, increment first then assign
let b = y++; //postfix increment, assign first then increment

console.log(a); //2
console.log(b); //1

//decrement
let c = --x; //prefix decrement, decrement first then assign
console.log(c); //1
let d = y--; //postfix decrement, assign first then decrement
console.log(d); //1

//link to study: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

//comparison operators
// == === != !== > < >= <=
// == compares only values
// === compares values and types
// != not equal to
// !== not equal to and type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

console.log(2 == 2); //true
console.log(2 === 2); //true
console.log(2 != 2); //false
console.log(2 !== 2); //false
console.log(2 > 1); //true
console.log(2 < 3); //true
console.log(2 >= 2); //true
console.log(2 <= 2); //true

//don't compare different types
//like this string and number
// console.log(2 == "2"); 

