//iife - immediately invoked function expression
//IIFE is a function that is executed right after it is created
//IIFE is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:
//The first is the anonymous function with lexical scope enclosed within the Grouping Operator ()
//This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
//The second part creates the immediately executing function expression ()
//This is the function expression that is immediately executed
//The IIFE is used to avoid variable hoisting from within blocks, protect against polluting the global environment and simultaneously allow public access to methods while retaining privacy for variables defined within the IIFE.

(function message() { //named iife
    console.log('Hello World from named IIFE');
})(); //semi colon is required to prevent errors

((name) => {
    console.log(`Hello ${name}, welcome to IIFE with an arrow function`);
})('Neeraj'); //arrow function