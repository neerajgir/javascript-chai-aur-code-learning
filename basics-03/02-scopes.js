// scope - where a variable is available in your code
// global scope - variables available everywhere
// function scope - variables available only inside the function where they are defined
// block scope - variables available only inside the block where they are defined
// lexical scope - a function inside another function has access to the outer function's variables
// var, let, const - how you declare variables affects their scope

let a = 1;
var b = 2;
const c = 3;

console.log(a, b, c); // 1 2 3

//global scope
function test() {
  let a = 4;
  var b = 5;
  const c = 6;
  console.log(a, b, c); // 4 5 6
}
test();
console.log(a, b, c); // 1 2 3

//block scope
if (true) {
  let a = 7;
  var b = 8;
  const c = 9;
  console.log(a, b, c); // 7 8 9
}
console.log(a, b, c); // 1 8 3

for (let a = 0; a < 10; a++) {
  console.log(a); // 0 1 2 3 4 5 6 7 8 9
}
console.log(a); // 10

//local scope
function test2() {
  let a = 10;
  var b = 11;
  const c = 12;
  console.log(a, b, c); // 10 11 12
}
test2();
console.log(a, b, c); // 1 8 3

//lexical scope
function test3() {
  let a = 13;
  var b = 14;
  const c = 15;
  console.log(a, b, c); // 13 1
  function test4() {
    console.log(a, b, c); // 13 14 15
  }
  test4();
}
test3(); // 13 14 15
console.log(a, b, c); // 1 8 3

// nested scope
function one() {
  const a = 16;
  
  function two () {
    const b = 12;
    console.log(a);
  }
    console.log(b);
    
    two();
}
one();

// End of scope demonstration

//{ } - block of code or block statement
// if, for, while, switch, function - blocks of code
// let, const - block scope
// var - function scope
    