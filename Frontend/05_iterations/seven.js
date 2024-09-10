//reduce

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (accumulator, currentValue) {
    console.log(accumulator, currentValue);

    return accumulator + currentValue
}, 3)

const myTotal1 = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, 3)

console.log(myTotal);

const shoppingCart = [
    {
        name: 'laptop',
        price: 500
    },
    {
        name: 'shoes',
        price: 100
    },
    {
        name: 'bag',
        price: 30
    },
    {
        name: 'watch',
        price: 200
    }
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(`Total Price for all items coantaing ${shoppingCart.forEach(item => console.log(item.name, item.price)
)}: ${totalPrice}`);
