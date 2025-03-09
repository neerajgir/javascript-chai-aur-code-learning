//if
//comparison
//<, >, <=, >=, ==, ===, !=, !==, &&, ||, !, truthy, falsy
//Falsy values: undefined, null, 0, false, '', NaN
//Truthy values: '0', 'false', [], {}

let temperature = 40;
if (temperature < 30) {
    console.log("It's a hot day!");
} else {
    console.log("It's not a hot day!");
}

//score
const score = 70;
if (score > 60) {
    let message = "You passed!";
    console.log(`Your score is ${score}. ${message}`);
}
console.log(`Your score is ${score}. ${message}`); //ReferenceError: message is not defined

// short hand if statement not recommended
let balance = 1000;
if (balance > 0) console.log("You have money!"),
else console.log("You have no money!");

//if else if else
//always use curly braces
if (balance < 500){
    console.log("You have less money!");
}else if (balance < 650){
    console.log("You have some money!");
}else if (balance < 800){
    console.log("You have good money!");
}else{
    console.log("You have a lot of money!");
}


//real world example
//&& and || or - operators are short-circuit operators in JavaScript
const userLoggedIn = true;
const debitCard = true;

const loggedInFromGoogle = false;
const loggedInFromFacebook = true;

if (userLoggedIn && debitCard) {
    console.log("You can purchase the item!");
} 

if (loggedInFromFacebook || loggedInFromGoogle) {
    console.log("You can login!");
} else {
    console.log("You cannot login!");
}
    