//arrays second part

const bollywood_heroes = ['Shahrukh', 'Salman', 'Aamir', 'Akshay', 'Ajay', 'Hrithik']
const hollywood_heroes = ['Tom Cruise', 'Brad Pitt', 'Leonardo DiCaprio', 'Will Smith', 'Johnny Depp']

// bollywood_heroes.push(hollywood_heroes) //push hollywood_heroes array as a single element but its not valid as we want to push all elements of hollywood_heroes array
// console.log(bollywood_heroes)

//concat method is used to merge two arrays
// const all_heroes = bollywood_heroes.concat(hollywood_heroes);  //concat method is used to merge two arrays
// console.log(all_heroes);

//spread operator is used to merge two arrays - it is a new feature in ES6 and is more readable
const all_heroes_new = [...bollywood_heroes, ...hollywood_heroes];  //spread operator is used to merge two arrays
// console.log(all_heroes_new);

//flat method is used to convert multi-dimensional array to single dimensional array
const simpleArray = [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, 11, 12, [13, 14, 15]]];
const usableArray = simpleArray.flat(Infinity); //flat method is used to convert multi-dimensional array to single dimensional array
// console.log(usableArray); // Output the flattened array

// intweview point of view
console.log(Array.isArray('Hello')); // false
console.log(Array.from('Hello')); // ['H', 'e', 'l', 'l', 'o'] - converts string to array
console.log(Array.from({'Hello': 'World'})); // [] - converts object to array - but it will be empty array

// of method is used to convert variables to array
let marks1 = 10;
let marks2 = 20;
let marks3 = 30;

console.log(Array.of(marks1, marks2, marks3)); // [10, 20, 30] - converts variables to array


