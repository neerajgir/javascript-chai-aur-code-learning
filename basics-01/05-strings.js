//strings


const name = "Neeraj"
const repoCount = 2;

// console.log(name + repoCount + " name + repoCount"); not a good way to do this

console.log(`${name} has ${repoCount} repositories`); // this is the best way to do this, and this is called string interpolation

const newName = new String('Neeraj');
console.log(newName);

console.log(newName[0]); // this will give us the first character of the string
console.log(newName.__proto__); // this will give us the prototype of the string


console.log(newName.length); // this will give us the length of the string
console.log(newName.toUpperCase()); // this will convert the string to uppercase
console.log(newName.charAt(4)); // this will give us the character at the 4th index
console.log(newName.indexOf("a")); // this will give us the index of the character a
console.log(newName.substring(1, 4)); // this will give us the substring from index 1 to 4
console.log(newName.split("")); // this will split the string into an array of characters
console.log(newName.split("e")); // this will split the string into an array of characters at the character e
console.log(newName.replace("Neeraj", "Neeraj Kumar")); // this will replace the first string with the second string
console.log(newName.includes("Neeraj")); // this will check if the string includes the given string
console.log(newName.includes("Neeraj", 1)); // this will check if the string includes the given string from the index 1
console.log(newName.slice(1, 4)); // this will give us the substring from index 1 to 4
console.log(newName.slice(-1)); // this will give us the last character of the string

const newName2 = "  Neeraj Kumar  ";
console.log(newName2);
console.log(newName2.trim()); // this will remove the extra spaces from the string

const email = "example@example.com";
console.log(email.replace("@", "-")); // this will replace the @ with -









