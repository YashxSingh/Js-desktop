const user = {
    username: "Yash",
    price: 789,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Maria";
// user.welcomeMessage();

// console.log(this);

function kami(){
    console.log(this);
}

// kami();

// **************************************** Arrow Function ***********************************************
const addNumbers = (num1, num2) => num1 + num2;
// console.log(addNumbers(8, 9));

const squareNumber = (number) => number**2;
// console.log(squareNumber(346748));

const add2nos = (num1, num2) =>({user: "Yash"})
console.log(add2nos(1, 2));