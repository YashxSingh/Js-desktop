const myArray = [ 'js', 'cpp', 'rb', 'Swift', 'py' ];

// myArray.forEach(function (item) {
//     console.log(item);
// })

myArray.forEach( (item) => {
    // console.log(item);
})

function printMe(item) {
    // console.log(item );
}

myArray.forEach(printMe)

myArray.forEach((a, b, c) => {
    // console.log(a, b, c);
})

const myCoding = [
   {
    languageName: "javascript",
    fileName: 'js'
   }, 
   {
    languageName: "python",
    fileName: 'py'
   }, 
   {
    languageName: "typescript",
    fileName: 'ts'
   }, 
   {
    languageName: "java",
    fileName: 'java'
   }, 
]

myCoding.forEach((item) => {
    // console.log(item.fileName);
})

