const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = [];

// console.log(myNum.map((item) => item+10));

// myNum.forEach((num) => {
//     newNums.push(num+10)
// });
// console.log(newNums);


// Chaining of map.
const myNum2 = myNum
                    .map((num) => num*10)
                    .map((num) => num+1)
                    .filter((num) => num < 80);
myNum2.unshift("Yash");
let kappa = myNum2.toString();

// console.log(myNum);
console.log(myNum2);
console.log(...myNum2);


