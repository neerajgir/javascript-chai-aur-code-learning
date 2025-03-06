//singleton
// const bumbleUser = new Object();

const bumbleUser = {}

bumbleUser.id = 123;
bumbleUser.name = 'John';
bumbleUser.age = 30;
bumbleUser.isLogged = false;

// console.log(bumbleUser);

const tinderUser = {
    email: 'some@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'Neeraj',
            lastname: 'Giri'
        }
    }
}
// console.log(tinderUser.fullname.userfullname.firstname + ' ' + tinderUser.fullname.userfullname.lastname);

//combine two objects

const user1 = {1: 'John', 2: 'Doe'};
const user2 = {3: 'Jane', 4: 'Doe'};
const users = {...user1, ...user2}; // this is the bestest the best way to combine two objects

// const users = Object.assign({}, user1, user2); //this is the best way to combine two objects
// console.log(users);

const users2 = [
    {
        id: 1,
        email: 'email@gmail.com'
    },
    {
        id: 2,
        email: 'some@gmail.com',
    }
]
// console.log(users2);

// console.log(bumbleUser); 

console.log(Object.keys(bumbleUser)); //this will return an array of keys
console.log(Object.values(bumbleUser)); //this will return an array of values
console.log(Object.entries(bumbleUser)); //this will return an array of arrays
console.log(Object.keys(bumbleUser).length); //this will return the length of the object

console.log(bumbleUser.hasOwnProperty('id')); //this will return true or false if the object has the property or not
console.log(bumbleUser.hasOwnProperty('email')); //this will return true or false if the object has the property or not