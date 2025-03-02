//const, var, let
//const is a constant variable, it cannot be changed
//var is a global variable, it can be changed
//let is a local variable, it can be changed

const Name = "Neeraj Gir";
let email = "ng@google.com";
var password = "54321";
candidateCity = "lahore"; //u can also declare without var, let or const but it is not recommended

let candidateState; //undefined

// name = "neeraj goswami"; // not allowed

email = "ng@google.com";
password = "54321";
candidateCity = "lahore";

/*prefer to not use var, use let instead of var
because of issues in block scope and functional scope
*/

// console.log(Name);

console.table([Name, email, password, candidateCity, candidateState]);

