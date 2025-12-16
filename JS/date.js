//* JavaScript Date Objects let us work with dates:
//example
const d = new Date();
console.log(d) //output the current time
const a = new Date("2022-03-25");
console.log(a); //output 2022-03-25T00:00:00.000Z

/*
  * Date objects are static. The "clock" is not "running".
  * The computer clock is ticking, date objects are not. 
  * Date objects are created with the new Date() constructor.
  * There are 9 ways to create a new date object:
  - new Date()
  - new Date(date string)
  - new Date(year,month)
  - new Date(year,month,day)
  - new Date(year,month,day,hours)
  - new Date(year,month,day,hours,minutes)
  - new Date(year,month,day,hours,minutes,seconds)
  - new Date(year,month,day,hours,minutes,seconds,ms)
  - new Date(milliseconds)
*/

//* When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
console.log(d.toString()); //output Tue Dec 16 2025 18:38:17 GMT+0800 (Philippine Standard Time)

//* The toDateString() method converts a date to a more readable format:
console.log(d.toDateString()); //output Tue Dec 16 2025

//* The toUTCString() method converts a date to a string using the UTC standard:
console.log(d.toUTCString()); //output Tue, 16 Dec 2025 10:40:51 GMT

//* The toISOString() method converts a date to a string using the ISO standard:
console.log(d.toISOString()); //output 2025-12-16T10:41:24.273Z

//* Bonus
console.log(d.toTimeString()); //output 18:41:57 GMT+0800 (Philippine Standard Time)