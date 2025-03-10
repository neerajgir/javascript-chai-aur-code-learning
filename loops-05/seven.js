//maps

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNums = myNums.map((num) => num * 2);
console.log(doubledNums);


//for each does not return a new array
// it returns undefined
const forEachNums = myNums.forEach((num) => {
    num = num * 2;
});
console.log(forEachNums);

//chaining methods
const chainedNums = myNums
.map((num) => num * 10) //multiply array with 10
.filter((num) => num >= 50) //filter array with 50
.reduce((acc, num) => acc + num, 0); //reduce array with 0


console.log(newNums); //450