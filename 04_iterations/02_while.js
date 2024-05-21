// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index += 2;
// }

let myArray = ["Flash", "Batman", "Superman"];
// let arr = 0;
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr++;
// }

// ***************************** Do While ***********************************
let score =1;

// do {
//     console.log(`Score is ${score}`);
//     score++;
// } while (score <= 10);

for (const val of myArray) {
    // console.log(val);
}

const greetings = "Hello World"
for (const greet of greetings) {
    if (greet == ' ') {
        break;
    }
    // console.log(`Each character is ${greet}`);
}

// ********************************* Maps ****************************************


// They are iterable, Objects are not.
const map = new Map();
map.set("IN", "India");
map.set("JP", "Japan");
map.set("CN", "China");

// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} : ${value}`);
}

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    Swift: "Swift by Apple",
    py: "Python"
}

let arr = new Array;

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    arr.push(key);
}
// console.log(arr);

