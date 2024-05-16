let a = 10;
const b = 20;
var c = 30;
let d = 200;

// console.log(a, b, c);

if(true){
    let d = 10;
    const e = 20;
    var f = 30;
    g = 40
}

// console.log(d);
// // console.log(e);
// console.log(f);
// console.log(g);

function one() {
    const user = "Uday";
    function two() {
        const website = "reddit.com";
        console.log(user);
    }
    // console.log(website); // Error
    two();
}

one();
one.two;
let two_2 = new one();
// two_2.two;



// Function called before declaring
console.log(addOne(89))

function addOne(num) {
    return num + 1;
}

// Gives error if we declare the function as a variable.
console.log(addTwo(32));
const addTwo = function(num){
    return num + 2;
}