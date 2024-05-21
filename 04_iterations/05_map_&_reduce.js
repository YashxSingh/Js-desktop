const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = [];

// console.log(myNum.map((item) => item+10));

myNum.forEach((num) => {
    newNums.push(num+10)
});
console.log(newNums);

