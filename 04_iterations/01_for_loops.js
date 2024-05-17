// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (element == 5) console.log("5 is the best number.");
//     console.log(element);    
// }

// for (let i = 1; i <= 10; i++) {
//     // console.log("Outer", i);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop values are Inner ${j}. Outer ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }

let myArray = ["yash", "vardhan", "singh", "jane"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

//  Break and Continue.
// for (let index = 0; index < 200 ; index++) {
//     console.log(index);
//     if (index == 5) break;
// }

for (let index = 0; index < 6 ; index++) {
    if (index == 5) continue;
    console.log(index);
}