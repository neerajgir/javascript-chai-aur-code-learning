//what is functions - functions are a block of code that can be called by name. The code inside a function is not executed when the function is defined. It is executed when the function is invoked (called).

// Function Declaration
function sayHello() {
    console.log('Namaste');
}

// Function Invocation
sayHello(); // Namaste

function addThreeNumbers(num, num2, num3) { // parameters
    console.log(num + num2 + num3);
}
addThreeNumbers(4, 5, 7); // arguments

// return statement
function addThreeNumbers(num, num2, num3) { // parameters
    // let result = num + num2 + num3; // logic
    // return result; // return statement
    return num + num2 + num3; // logic + return statement
}
const result = addThreeNumbers(4, 5, 7); // arguments
console.log('Result:', result); // 16

// another example
function loginUser(username) {
    // if (!username) // falsy values
    if (username === undefined) { // undefined
        console.log('Please provide a username');
        return;
    }

    // return `Welcome ${username}`; // Welcome Neeraj
}
console.log(loginUser('Neeraj'));

console.log(loginUser()); // Please provide a username

// rest parameter
function addCartPrice(...num1) { // rest parameter
    return num1;
}
console.log(addCartPrice(100, 200, 400)); // [100, 200, 400]

//function with object
const user = {
    name: 'Neeraj',
    buy: 100
}

function updateUser(anyobject) {
    console.log(`User ${anyobject.name} has bought ${anyobject.buy} worth of products`);
}
updateUser(user); // User Neeraj has bought 100 worth of products

// function with array
const users = ['Neeraj', 'Rahul', 'Rohit'];

function returnSecondValue(anyarray){
    return anyarray[1];
}
// console.log(returnSecondValue(users)); // Rahul
console.log(returnSecondValue(['Neeraj', 'Rahul', 'Rohit'])); // Rahul

