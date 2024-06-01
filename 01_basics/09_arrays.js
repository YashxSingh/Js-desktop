// arrays

const myarr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] ;

// console.log(myarr[3]);

const myHeroes = ['yash', 'harsh', 'jatin', 'mohit'];
// const myarr2 = new Array('1', '2', '3', '4', '5');
// console.log(myHeroes);

myHeroes.push("avdhesh");
myHeroes.push("kartik");
// console.log(myHeroes);

// myHeroes.pop();
// // myHeroes.pop();
// // myHeroes.pop();
// myHeroes.pop();
// myHeroes.pop();
// console.log(myHeroes);

// myHeroes.unshift("kallu");
// console.log(myHeroes);

console.log(myHeroes);
myHeroes.shift();
console.log(myHeroes);

// console.log(myarr.includes(5));
// console.log(myarr.includes(89));

// console.log(myarr.indexOf(5));

const newArr = myHeroes.join();

// console.log(newArr); // Converts to a string.

// console.log("A", myHeroes);

// const hero1 = myHeroes.slice(1, 3);

// console.log(hero1);
// console.log("B", myHeroes);

// const hero2 = myHeroes.splice(1, 3);

// console.log(hero2);
// console.log("C", myHeroes);

const marvel = ["thor", "loki", "ironman"];
const dc = ["flash", "superman", "batman"];

marvel.push(dc);
// console.log(marvel);

marvel.pop();

const all = marvel.concat(dc);
// console.log(all);


// Spread operator.
const all_heroes = [...marvel, ...dc, ...myHeroes];
// console.log(all_heroes);
// console.table(all_heroes);

const two_array = [7, 8, 9, [1, 2, 3, [77, 88, 99]], 456, 79798, 2124, [876, 87, 768]];
// console.log(two_array);
// console.table(two_array.flat(Infinity));

// console.log(Array.isArray("Yash"));
// console.log(Array.from("Yash"));
// console.log(Array.from({name: "Yash", city: "Chennai"}));

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1, score2, score3));