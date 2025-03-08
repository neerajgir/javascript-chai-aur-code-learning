//this
const person = {
    name: 'Neeraj',

    sayHi: function() {
        console.log(`Hi ${this.name}`);
    }
};
person.sayHi(); // Hi Neeraj

// this in function not working
function sayHi() {
    console.log(`Hi ${this.name}`);
}
sayHi(); // Hi undefined

//this in arrow function
const chai = () => {
    let name = 'Neeraj';
    console.log(this); // {}
    console.log(`Hi ${this.name}`); // Hi undefined
    console.log(`Hi ${name}`); // Hi Neeraj
}
chai();

// arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

//implicit return
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2); // with parenthesis also it will work and most time use in react

//object return
const addTwo = (num1, num2) => ({ sum: num1 + num2 });
const result = addTwo(4, 6);
console.log(result); // { sum: 10 }

//arrow function with loop
const numbers = [1, 2, 3, 4, 5];
const square = numbers.map(num => num * num);
console.log(square); // [1, 4, 9, 16, 25]
