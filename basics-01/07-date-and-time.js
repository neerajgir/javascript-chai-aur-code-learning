//Date and Time in JavaScript

let myDay = new Date();
console.log(myDay.toString()); //Thu Mar 06 2025 02:25:38 GMT+0500 (Pakistan Standard Time)
console.log(myDay.toDateString()); // Thu Mar 06 2025
console.log(myDay.toTimeString()); // 02:25:38 GMT+0500 (Pakistan Standard Time)
console.log(myDay.toLocaleString()); // 06/03/2025, 2:25:38 PM
console.log(myDay.toLocaleDateString()); // 06/03/2025
console.log(myDay.toLocaleTimeString()); // 2:25:38 PM
console.log(myDay.toISOString()); // 2025-03-06T09:25:38.000Z
console.log(myDay.toJSON()); // "2025-03-06T09:25:38.000Z"

console.log(typeof myDay); // object

let myBirthday = new Date('2000-11-25'); // declare own date in DD-MM-YYYY format
console.log(myBirthday.toDateString()); // Sun Nov 25 2000 | in js months start always 0 not 1

let myBirthday2 = new Date(2000, 10, 25, 10,  30); // declare own date and time
console.log(myBirthday2.toLocaleString()); // 25/11/2000, 10:30:00 AM

let myTimestamp = Date.now(); // get timestamp

console.log(myTimestamp); // timestamp value
console.log(Math.floor(myTimestamp / 1000)); // seconds since epoch
console.log(myBirthday.getTime()); // milliseconds since epoch for myBirthday
console.log(myBirthday.getTime()); // 975523200000

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); // 2
console.log(newDate.getDate()); // 6
console.log(newDate.getFullYear()); // 2025
console.log(newDate.getHours()); // 2
console.log(newDate.getMinutes()); // 25
console.log(newDate.getSeconds()); // 38
console.log(newDate.getMilliseconds()); // 0
console.log(newDate.getDay()); // 4
console.log(newDate.getMonth()); // 2

//string interpolation
console.log(`${(newDate.getDay())} and the time is ${(newDate.getHours())}:${(newDate.getMinutes())}:${(newDate.getSeconds())}`); // 4 and the time is 2:25:38
  
newDate.toLocaleString('default',{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }); // Thursday, March 6, 2025, 2:25:38 PM

