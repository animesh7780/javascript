const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI);

const ani = {
    name: "Ani",
    age: 23,
    isAvailable: true,

    orderChai: function () {
        console.log("Order Chai");
    }
}

console.log(ani)

Object.defineProperty(ani, "name", {
    writable: false,
    configurable: false,
    enumerable: false,
})

const descriptor1 = Object.getOwnPropertyDescriptor(ani, "name")

console.log(descriptor1)

for (let [key, value] of Object.entries(ani)) {
    if (!typeof value === "function") {
        continue
    }
    console.log(key, value);
}