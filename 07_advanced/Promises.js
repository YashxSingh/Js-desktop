// const promiseOne = new Promise(function(resolve, reject) {
//     // Do an async task.
//     // DB calls.
//     // Cryptography related tasks.
//     setTimeout(function () {
//         console.log("Async Task 1");
//         resolve();
//         reject();
//     }, 1000)
// });

// promiseOne
// .then(function () {
//     console.log('Async Task 1 resolved');
// })
// .catch(function () {
//     console.log("Async Task 1 failed.");
// })


// new Promise(function(resolve, reject){
//     setTimeout(function () {
//         console.log("Async Task 2");
//         reject();
//         resolve();
//     }, 2000)
// }).then(function () {
//     console.log("Async Task 2 resolved.");
// }).catch(function () {
//     console.log("Async Task 2 failed.");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function () {
//         resolve({username: "Yash", email: "yash@singh.com"});
//     }, 1000)
// });

// promiseThree.then(function (user) {
//     console.log(user.username+"\n"+ user.email);
// })

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true;
//         if (!error){
//             resolve({username: "Yash", empid: 2000080635});
//         }
//         reject("Error in processing.")
//     }, 1000);
// })

// promiseFour.then(function (user) {
//     // console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("The promise is closed.");
// })

// // ***************************************** Using Async await **********************************************

// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ username: "Yash", empid: 2000080635 });
//         }
//         reject("ERROR: Something went wrong in Promise 5.");
//     }, 1000);
// });

// async function consumeP5() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log("Error occured");
//     }
// }

// consumeP5();

// async function getALLUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error occured ", error);
//     }
// }
// getALLUsers();

console.clear();
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    console.log("Response received.");
    return response.json();
})
.then((data)=>{
    console.log("JSON Received.");
    console.log(data[0].address);
})
.catch(()=>{
    console.log("Some error occured, please check.");
})
.finally(()=>{
    console.log("fetch successful.");
})