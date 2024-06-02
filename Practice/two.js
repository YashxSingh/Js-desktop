const heading = document.querySelector("h1");
const userInput = document.getElementById("userInput");
const userInput2 = document.getElementById("userInput2");
const submit = document.getElementById("submit");
const out = document.querySelector(".out");

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("userInput").value = ``;
  document.getElementById("userInput2").value = ``;
  document.querySelector(".out").innerHTML = ``;
});

// userInput.setAttribute("placeholder", "Enter text...");
// userInput2.style.display = "none";
// heading.innerHTML = `Copy Command`;

// 1.
// function matches(obj, source) {
//     return Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] == source[key])
// }

// let obj1 = {
//     name: "yash",
//     age: 24
// }
// let obj2 = {
//     name: "yash",
//     age: 24
// }

// console.log(matches(obj1, obj2));

// // 2.
// userInput.setAttribute("placeholder", "Enter text...");
// userInput2.style.display = "none";
// heading.innerHTML = `Copy Command`;

// submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     copyText();
// });

// async function copyText() {
//     try {
//         let text = userInput.value;
//         // userInput.select();
//         await navigator.clipboard.writeText(text);
//     out.innerHTML = `${await navigator.clipboard.readText()}`;
// } catch (error) {
//     out.innerHTML = `${error}`;
// }
// }

// 8.
userInput.setAttribute("placeholder", "Enter number...");
userInput2.setAttribute("placeholder", "Enter number to remove...");
heading.innerHTML = `Filter out the specified values from a specified array`;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let arr1 = userInput.value.split(" ");
  let arr2 = userInput2.value.split(" ");
  validate(arr1, arr2);
});

function validate(arr1, arr2) {
    arr1.replaceAll
}