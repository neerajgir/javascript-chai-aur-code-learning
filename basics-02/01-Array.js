//Array - a list of items in a specific order (0-indexed)
//Array is a data structure that can store multiple values in a single variable.
//Array is a collection of items. It can store any type of items, such as numbers, strings, objects, etc.
//Array is a reference type in JavaScript.

//Creating an Array
const arr = [1, 2, 3, 4, 5]; //Array of numbers, 0-indexed
const myHeroes = ['Superman','Batman','Wonder Woman']; //Array of strings, 0-indexed

const myArray = [1, 'Hello', true, {name: 'John'}, [1, 2, 3]]; //Array of mixed types

const myArr2 = new Array(1, 2, 3, 4, 5); //Array of numbers, 0-indexed
console.log(arr[1]); //2

console.log(myHeroes); //['Superman','Batman','Wonder Woman']  

console.log(myArr2); //[1, 2, 3, 4, 5]

//Array Methods
//Array has many methods that allow you to manipulate the array.
//Some of the most commonly used methods are:

arr.push(6); //Add an item to the end of the array
arr.push(7);
arr.pop(); //Remove the last item from the array
arr.unshift(1); //Add an item to the beginning of the array
arr.shift(); //Remove the first item from the array

console.log(arr.includes(3)); //Check if an item is in the array
console.log(arr.indexOf(2)); //Find the index of an item in the array

const newArr = arr.join(); //Convert the array to a string
console.log(newArr);
console.log(arr);

//slice() method - returns a new array containing a portion of the original array
console.log("A", myArr2); //[1, 2, 3, 4, 5]

const myn1 = myArr2.slice(1, 3); //2, 3
console.log(myn1);

console.log("B", myArr2); //[1, 2, 3, 4, 5]


//splice() method - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
const myn2 = myArr2.splice(1, 3);
console.log("C", myArr2); //[1, 5]
console.log(myn2); // [2, 3, 4]

