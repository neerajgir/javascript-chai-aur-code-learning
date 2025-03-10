//for in loop
let obj = {
    SI: 'Sindhi',
    UR: 'Urdu',
    EN: 'English',
    MA: 'Mathematics',
}

for (const key in obj) {
    // console.log(`Key: ${key}, Value: ${obj[key]}`);
}

let arr = ['Sindhi', 'Urdu', 'English', 'Mathematics'];

for (const key in arr) {
    // console.log(key); // index of array
    
    // console.log(`Key: ${key}, Value: ${arr[key]}`);
    
}

let map = new Map
map.set('SI', 'Sindhi');
map.set('UR', 'Urdu');
map.set('EN', 'English');
map.set('MA', 'Mathematics');

for (const [key, value] of map) {
    // console.log(key, value);
    
    // console.log(`Key: ${key}, Value: ${value}`);
}