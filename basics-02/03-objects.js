//objects - collection of key value pairs (properties), created using curly braces, can store any type of data, can store functions as well, and mutable

//object literal
const user ={
    name: 'Neeraj',
    "full name": 'Neeraj Giri',
    email: 'neeraj@google.com',
    age: 25,
    isAdmin: true,
    track: ['JS', 'React', 'Node'],
}
console.log(user.age);
console.log(user.isAdmin);
console.log(user["full name"]);

//changing the value of a property
user.isAdmin = false;
console.log(user.isAdmin);

//freezing the object
Object.freeze(user); //makes the object immutable there is no property can be added, deleted or modified
user.age = 30;

//add function in objects
user.greeting = function(){
    console.log('Namaste user');
}
console.log(user.greeting());

user.greetingTwo = function(){
    console.log(`Namaste my name is, ${this.name}`); //$-this keyword refers to the object itself
}
console.log(user.greetingTwo());
