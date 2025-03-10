//these loops are array loops
//for of loop

let arr = [1, 2, 3, 4, 5];
for (const val of arr) {
    // console.log(`Value: ${val}`);
}

//string

let greet = 'Namaste';
for (const message of greet) {
    // console.log(`each letter: ${message}`);
}

//maps
let map = new Map();
map.set('IND', 'India');
map.set('USA', 'United States of America');
map.set('UK', 'United Kingdom');
map.set('AUS', 'Australia');

for (const [key, value] of map) {
    console.log(`Code: ${key}, Country Name: ${value}`);
}

//not possible with objects as they are not iterable
let myObj = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (const element of myObj) {
    console.log(element);
}
