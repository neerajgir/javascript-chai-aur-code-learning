//for loop - 1
//declare, initialize, condition, increment
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 7) {
        console.log("Lucky 7");
    }
    console.log(element);
}

//nested loop
for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value ${i}`); //outer loop
    for(let j = 0; j <= 10; j++){
        console.log(`inner loop ${j} outer loop ${i}`); //inner loop
        console.log(`i + '*` + j + ' = ' + i*j); //multiplication table
        
    }
    
}

//array loop
let myArray = ['Dholida', 'Rangila', 'Kanura', 'Moraliyo'];
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


//break
for (let i = 1; i <= 20; i++) {
    if (i == 5){
        console.log("I am 5");
        break; //break the loop
    }
    const element = i;
    console.log(`value of i is ${element}`);
    
}

//continue

for (let i = 1; i <= 20; i++) {
    if (i == 5){
        console.log("I am 5");
        continue; //continue the loop
    }
    const element = i;
    console.log(`value of i is ${element}`);
    
}