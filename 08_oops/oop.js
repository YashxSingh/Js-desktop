const user = {
    username: "Yash",
    isLoggedIn: true,
    city: "Chennai",
    getUserDetails: function(){
        console.log(`Username is ${this.username}`);
        console.log(this);
        return 
    }
};

// console.log(user.getUserDetails());
// console.log("changelog");
// console.log(this);

// **************Constructor********************

function User(username, isLoggedIn, loginCount) {
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;
    // return this;
}

// const userOne = User("yash", true, 10);
// const userTwo = User("Harsh", false, 16);
// console.log(userOne);
// console.log(userTwo);


const userOne = new User("yash", true, 10);
const userTwo = new User("Harsh", false, 16);
console.log(userOne);
console.log(userTwo);