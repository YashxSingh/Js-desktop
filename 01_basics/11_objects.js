// const tinder = {}
const tinderUser = new Object();

tinderUser.id = "80635";
tinderUser.fname = "Yash";
tinderUser.mname = "Vardhan";
tinderUser.lname = "Singh";

// console.log(`Hi everyone, my ID is ${tinderUser.id} and my name is ${tinderUser.fname} ${tinderUser.mname} ${tinderUser.lname}`);

const regularUser = {
    email: "yash@singh.com",
    fullName: {
        userFullName:{
            firstName: "Harsh",
            lastName: "Shukla"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

// Assign method in Object.

const obj1 = {a:1, b:2, c:3};
const obj2 = {d:4, e:5, f:6};
// const obj5 = [1,5,52,5,232];
const obj7 = {q:9, w:8, e:7, r:6};

// const obj3 = Object.assign({}, obj1, obj2);
const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj4);

// Spread operator for Objects.
const obj6 = {...obj1, ...obj2, ...obj7}

// console.log(obj6); // Only uniqe keys are accepted in an Object.

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

// When values come from Database.
const users = [
    {
        id: 1,
        email: "yash@singh.com"
    },
    {
        id:2,
        email: "kushal@shukla.com"
    }
]
// console.log(users[1].email)

// console.log(Object.keys(jsUser));
// console.log(Object.values(jsUser));

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("id"));
// console.log(tinderUser.hasOwnProperty("iduuu"));

// console.log(jsUser.toString());

const course = {
    courseName: "JavaScript",
    price: "5999",
    instructor: "Yash"
}

const {instructor} = course;
const {courseName: name} = course;
const {price: rs} = course;

console.log(name);
console.log(rs);