// while and do-while loops
let i = 0; //initialize i
while (i <= 10) { //condition
    console.log(`While loop: ${i}`);
    i = i + 2; //change the value of i
}

//array in while loop
let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

let j = 0;
while (j < arr.length) {
    console.log(`Array in while loop: ${arr[j]}`);
    j++;
    
}

//do-while loop
let balance = 1; //initialize 
do {
    console.log(`Do-while loop: ${balance}`);
    balance++ // change value
}while(balance <= 10); //condition