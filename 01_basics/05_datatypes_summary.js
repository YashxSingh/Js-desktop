// ********************************** Primitive ***************************
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt.

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId)
// console.log(typeof id)

const bigNum = 7894561236598746789798789n
// console.log(bigNum)
// console.log(typeof bigNum)


// ******************** Reference(Non-Primitive) *********************
// Array, Objects, Functions.


// Arrays
const cars = ["meredes", "BMW", "Suzuki"];
// console.log(cars);

// Objects
let myObj = {
    Name: "Yash",
    Age: 24,
    City: "Prayagraj"
};
// console.log(myObj);

// Functions
const fn = function(){
    // console.log("Hello World");
};
// Calling a function
fn();


// ******************* Stack and Heap *******************
let myEmail = "yash@singh.com";
let anotherEmail = myEmail;
console.log(anotherEmail);
anotherEmail = "singh@yash.com"
console.log(myEmail);
// As this was a primitive type, vales are stored in stack
//  and not getting changed upon modification of the reference variable.

let userOne = {
    name: "Yash",
    age: 24,
    city: "Chennai"
};

let userTwo = userOne;
userTwo.age = 48;
console.log(userOne);
console.log(userTwo);
// Both objects were changed because they are stored as memory addresses in the heap.

