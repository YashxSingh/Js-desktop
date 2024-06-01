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
// // 1.
// const myDate = new Date();
// const myDay = myDate.toLocaleString('default', {weekday: "long"});
// const myMinutes = myDate.getMinutes();
// const Time = `${myDate.getHours()}:${(myMinutes<10?'0'+myMinutes:myMinutes)}`;
// console.log(`Today is ${myDay} \nCurrent time is ${Time}`);

// // 2.
// let dd = myDate.getDate();
// let mm = myDate.getMonth();
// let yyyy = myDate.getFullYear();
// dd = dd<10?'0' + dd:dd;
// mm = mm<10?'0' + (mm+1):mm+1;
// console.log(dd+'/'+mm+'/'+yyyy);

// // 3.
// let side1 = 8;
// let side2 = 9;
// let side3 = 4;
// let s = (side1+side2+side3)/2;

// let area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
// console.log(area);

// // 4.
// const animate = document.querySelector(".animate");
// let nam = new String(" Welcome to the club ");
// let nam2;
// setInterval(() => {
//         nam2 = nam.split("");
//         nam2.push(nam2.shift());
//         // nam2.unshift(nam2.pop());
//         nam = nam2.join("");
//         animate.innerHTML = `${nam}`;
//     }, 100);
// setInterval(() => {
//     nam = nam[nam.length-1] + nam.substring(0, nam.length-1);
//     animate.innerHTML = `${nam}`;
// }, 0);

//     // 5.

// userInput.setAttribute("placeholder", "Enter a year in long form...");

// submit.addEventListener('click', (e)=>{
//     e.preventDefault();
//     year = parseInt(userInput.value);
//     validate(year);
// })

// function validate(year) {
//     if((year < 0 ) || year === NaN || year === undefined){
//         alert("Enter a valid year.")
//     }
//     else{
//         checkYear(year);
//     }
// };

// function checkYear(year) {
//     let bool = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
//     if(bool) out.innerHTML = `Year is leap year.`
//     else out.innerHTML = `Year is not leap year.`
// }

// // 6.
// userInput.setAttribute("placeholder", "Enter first year...");
// userInput2.setAttribute("placeholder", "Enter second year...");
// heading.innerHTML = `Check if 1st January is Sunday between 2 years`;

// function checkSunday(year1, year2) {
//     for (; year1 <= year2; year1++) {
//         const myDate = new Date(year1, 0, 1);
//         if (myDate.getDay() === 0) {
//             out.innerHTML = `There will be a Sunday on 1st between these years.`;
//             console.log(year1);
//             break;
//         } else {
//             out.innerHTML = `There will not be a Sunday on 1st between these years.`;
//         }
//     }
// }

// submit.addEventListener('click', (e)=>{
//     e.preventDefault();
//     let year1 = parseInt(userInput.value);
//     let year2 = parseInt(userInput2.value);
//     console.log(year1, year2);
//     checkSunday(year1, year2);
// })

// // 7.
// console.log(document.URL);

// // 22.

// userInput.setAttribute("placeholder", "Enter string...");
// userInput2.setAttribute("placeholder", "Enter letter to remove  ...");
// heading.innerHTML = `Remove a character at the specified position in a given string`;
// let str1, str2;

// function removeLetter() {
//   out.innerHTML = `${str1.replaceAll(str2, "")}`;
// }

// function validate() {
//   if (str2.length == 1) {
//     removeLetter();
//   } else {
//     out.innerHTML = `Enter only a single character`;
//   }
// }

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   str1 = userInput.value;
//   str2 = userInput2.value;
//   validate();
// });

// // 26.
// userInput.setAttribute("placeholder", "Enter string...");
// userInput2.style.display = "none";
// heading.innerHTML = `Taking the last 3 characters and adding them at both the front and back.`;
// let str1;

// submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     str1 = userInput.value;
//     validate();
// });

// function validate() {
//     if (str1.length > 2) {
//         addString();
//     } else {
//         out.innerHTML = "Enter a longer string."
//     }
// }

// function addString() {
//     let addition = str1.substring(str1.length - 3);
//     out.innerHTML = `${addition}${str1}${addition}`;
// }

// // 30.
// userInput.setAttribute("placeholder", "Enter string...");
// userInput2.style.display = "none";
// heading.innerHTML = `Check whether a string "Script" appears at the 5th position in a given string.`;
// let str1;

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   str1 = userInput.value;
//   validate();
// });

// function validate() {
//   if (!str1 || str1 == NaN || str1 == undefined) {
//     out.innerHTML = "Enter a valid string.";
//   } else {
//     checkString();
//   }
// }

// function checkString() {
//   if (str1.substring(4, 10) === "Script") {
//     out.innerHTML = `${str1.replace("Script", "")}`;
//   } else {
//     out.innerHTML = `${str1}`
//   }
// }

// // 150.
// let finalNum;
// userInput.setAttribute("placeholder", "Enter number...");
// userInput2.style.display = "none";
// heading.innerHTML = `Swap adjacent digits of an even digit number.`;

// submit.addEventListener("click", (e)=>{
//     e.preventDefault();
//     let number = parseInt(userInput.value);
//     finalNum = 0;
//     validate(number);
// })

// function validate(number) {
//     if(!number || String(number).length % 2 != 0 || number<0 || number == NaN || number == undefined){
//         out.innerHTML = `Enter a valid number.`
//     } else {
//         swapPairs(number);
//     }
// }

// function swapPairs(number) {
//     let x= 1;
//     for (; number != 0; number = Math.floor(number/100)) {
//         let pair = reverse(number%100);
//         finalNum = finalNum + x*pair;
//         x *= 100;
//     }
//     out.innerHTML = `${finalNum}`;
// }

// function reverse(pair) {
//     return (pair%10)*10 + Math.floor(pair/10);
// }

// 149.
// userInput.setAttribute("placeholder", "Enter String...");
// userInput2.style.display = "none";
// heading.innerHTML = `Swap case of letters.`;
// submit.addEventListener('click', (e)=>{
//     let str = userInput.value;
//     validate(str);
// })

// function validate(str) {
//     if(!str || str == undefined){
//         out.innerHTML = `Please check the input.`
//     }
//     else {
//         reverseCase(str);
//     }
// }

// function reverseCase(str) {
//     let finalStr = new String();
//     for (let index = 0; index < str.length; index++) {
//         let myChar = str[index];
//         finalStr += /[A-Z]/.test(myChar)? myChar.toLowerCase():myChar.toUpperCase();
//     }
//     out.innerHTML = `${finalStr}`;
// }

// // 148.
// userInput.setAttribute("placeholder", "Enter elements with Space...");
// userInput2.style.display = "none";
// heading.innerHTML = `Swap array halves.`;

// submit.addEventListener('click', (e) => {
//     let str = userInput.value;
//     let myArr = str.split(" ");
//     validate(myArr);
// })

// function validate(myArr) {
//     if (myArr.length % 2 != 0 || myArr == null || myArr == undefined) {
//         out.innerHTML = `Give an array of even length`;
//     }
//     else {
//         swapArr(myArr)
//     }
// }

// function swapArr(myArr) {
//     let len = myArr.length;
//     out.innerHTML = `${Array.of(myArr.slice(len / 2, len), myArr.slice(0, len / 2))}`;
// }

// // 136.

// userInput.setAttribute("placeholder", "Enter String...");
// userInput2.setAttribute("placeholder", "Enter the character to replace with..")
// heading.innerHTML = `Replace the first digit in a string.`;

// submit.addEventListener('click', (e)=>{
//     e.preventDefault();
//     let str1 = userInput.value;
//     let str2 = userInput2.value;
//     validate(str1.trim(), str2.trim());
// })

// function validate(str1, str2) {
//     if (!str2 || str2 == null || str1 == null || str2 == undefined || str1 == undefined || !str1) {
//         out.innerHTML = `Please enter correct input.`;
//     } else {
//         stringReplace(str1, str2);
//     }
// }

// function stringReplace(str1, str2) {
//     let strArray = str1.split("");
//     strArray[0] = str2;
//     str1 = strArray.join("");
//     out.innerHTML = `${str1}`;
// }

// // 131.
// userInput.setAttribute("placeholder", "Enter number...");
// userInput2.style.display = "none";
// heading.innerHTML = `Prefix sums.`;

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   let num = parseInt(userInput.value.trim());
//   validate(num);
// });

// function validate(num) {
//   if (!num || num == null || num == undefined) {
//     out.innerHTML = `Please enter correct input.`;
//   } else {
//     prefixSum(num);
//   }
// }
// // 1234
// function prefixSum(num) {
//   let arr = new Array();
//   let sum = 0;
//   let len = num.toString().length;
//   while (len) {
//     sum += num % 10;
//     arr.push(sum);
//     len--;
//     num = Math.floor(num / 10);
//   }
//   out.innerHTML = `${arr}`;
// }
