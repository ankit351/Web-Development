// used in 50

let today = new Date();
// console.log(today);
let otherDate = new Date('12-08-2000 02:20:32');
otherDate = new Date('Dec 08 2000 02:20:45:21');
// otherDate = new Date('12/08/2000');
let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getHours();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
console.log(a);
otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1900);
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);