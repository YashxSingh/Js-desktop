const myNums = [10, 20, 30, 40];

// const myTotal = myNums.reduce(function (acc, curr) {
//     console.log(`Acc : ${acc}, Curr : ${curr}`);
//     return acc+curr;
// }, 6)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {   
        itemName: "Python Course",
        itemPrice: 899,
        itemValidity: 36
    },
    {
        itemName: "Java Course",
        itemPrice: 799,
        itemValidity: 12
    },
    {
        itemName: "ABAP Course",
        itemPrice: 3899,
        itemValidity: 6
    },
    {
        itemName: "Fiori Course",
        itemPrice: 899,
        itemValidity: 36
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.itemPrice, 0);
console.log(priceToPay);