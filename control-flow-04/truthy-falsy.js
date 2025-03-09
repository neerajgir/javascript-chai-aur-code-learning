//truthy and falsy - values that are not exactly true or false
// falsy values: undefined, null, 0, '', NaN, false, bigint, symbol, etc.
// truthy values: NOT falsy values, e.g. '0', 'false', [], {}, function(){}, etc.
// use cases: conditional statements, logical operators, loops, etc.

// truthy values
const userEmail = 'neeraj@io.com'

if(userEmail){
    console.log('You are logged in');
}else{
    console.log('Please log in');
}

// Additional check for a different falsy value (example)
const userPassword = '';

if(userPassword){
    console.log('User password is set');
}else{
    console.log('No password set, please log in');
}

//nullish coalescing operator (??) - checks for null or undefined values
let val2 = 10;
val2 = val2 ?? 5;
console.log(val2); //10


let val3;
val3 = null ?? 5;
console.log(val3); //5

let val4 = undefined;
val4 = undefined ?? 15;
console.log(val4); //15

//ternary operator
let val5 = 10;
let val6 = 20;
let result = val5 > val6 ? 'greater' : 'lesser';
console.log(result); //lesser