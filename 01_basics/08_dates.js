const myDate = new Date(55)

console.log(myDate.toLocaleString());
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());

// Custom dates.
// let myCustomDate = new Date(2024, 6, 8, 5, 59, 48, 88);
// let myCustomDate = new Date("2024-5-8");
let myCustomDate = new Date("01-11-1999");
// console.log(myCustomDate.toLocaleString());
// console.log(myCustomDate.toLocaleTimeString());

let myTimestamp = Date.now()

// console.log(myTimestamp);
// console.log(Math.floor(Date.now()/1000));

// console.log(myDate.toLocaleString('default', {
//     // era: "long",
//     weekday: "short",
//     year:"numeric"
// }));

const ddt = new Date;
console.log(ddt.toLocaleString());