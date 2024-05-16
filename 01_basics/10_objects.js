// Singleton

//  Object Literals.

// Object.create
const jsUser = {
    name: "yash",
    age: 18,
    location: "Jaipur",
    email: "yash@singh.com",
    isLoggedIn: true,
    lastLoginDays: ["M", "Tu", "Th", "Sa"],
    "full name": "Yash Vardhan Singh",
    bye: function(){
        console.log("Goodbye Dear !");
        return `Hope you had a nice time, ${this.name}. See you again !!`
    }
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

//  Symbol

const mySym = Symbol("Key1");
const mySym2 = Symbol("Key2");

const exam = {
    name: "Yash Vardhan Singh",
    "exam name": "llb",
    "exam date": "24/05/2024",
    mySym: "paper1",
    [mySym2]: 'paper2'
};

// console.log(typeof exam.mySym);
// console.log(exam);

// Object.freeze(jsUser);
jsUser.email = "singh@yash.com";

// console.log(jsUser.email);

jsUser.greeting = function greeting() {
    console.log("Hello Harsh");
    return `Hello ${this["full name"]} and my email is ${this.email}`
}

// console.log(jsUser.greeting());
// console.log(jsUser.bye());

// console.log(jsUser);