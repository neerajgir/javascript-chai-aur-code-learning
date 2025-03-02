// Conversion of data types

let marks = "90ab"; 
let marks = null; // 0
let marks = undefined; // NaN 
let marks = true; // 1
let marks = false; // 0

console.log(typeof marks); // string

let marksInNumber = Number(marks);
console.log(typeof marksInNumber); // number

console.log(marksInNumber);

//"90ab" -> NaN, but we check the type of NaN, it is number
//null -> 0
//undefined -> NaN
//true -> 1
//false -> 0

let isLogIn = 1;

let isLogInInBoolean = Boolean(isLogIn);
console.log(isLogInInBoolean); // true

// 0, null, undefined, NaN, false, -> false
// anything else -> true
// "" -> false

let someNumber = 5;
let someNumberInString = String(someNumber);
console.log(someNumberInString); // "5" it looks like a number but it is a string
console.log(typeof someNumberInString); // string
 