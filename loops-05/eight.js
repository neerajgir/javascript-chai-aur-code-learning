//reduce

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce(function (acc, curr) {
    console.log(`acc: ${acc} and curr: ${curr}`);
    
    return acc + curr;
}, 0)

//arrow function
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


const shopping = [
    { name: 'banana', price: 10 },
    { name: 'apple',  price: 20 },
    { name: 'banana', price: 30 }
]

const price = shopping.reduce((acc, curr) => acc + curr.price, 0);
console.log(price);