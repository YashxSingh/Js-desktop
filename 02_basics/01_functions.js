function callMe(name, age, city) {
    console.log(`Hi everyone, my name is ${name}. I'm ${age} years old. I live in ${city}.`);
}

// callMe("Yash", 33, "Chennai")

function add2nos(num1, num2) {
    console.log("Goku");
    return num1 + num2;
    console.log("Yash");
}

// const result = add2nos(324, 2353)
// console.log(result);

function loginMessage(username = "Yash") {
    return `${username} just logged in.`
}

// console.log(loginMessage("lata"));


function loginMessage(username) {

    if (!username) {
        return `Enter a valid username.`
    }
    return `${username} just logged in.`
}

// console.log(loginMessage());


function calculateCartPrice(var1, var2, ...item1) {
    return item1, var1, var2;
}
// console.log(calculateCartPrice(456,789,123,8,54,654,45678));

const user = {
    username: "yash",
    age: 24
}

function handleObject(anyObject){
    return `Username is ${anyObject.username} and age is ${anyObject.age}.`
}

// console.log(handleObject(user));
console.log(handleObject({
    username: "kamal",
    age: Math.floor(Math.random()*100)
}))

const myArr = new Array;
myArr.push(12);
myArr.push(43);
myArr.push(34);
myArr.push(167);
myArr.push(1224);
console.log(myArr);
myArr.unshift(6969);
console.log(myArr);

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myArr))