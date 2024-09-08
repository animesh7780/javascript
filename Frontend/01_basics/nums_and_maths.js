const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8749

console.log(otherNumber.toPrecision(2));

const hunderds = 1000000
console.log(hunderds.toLocaleString('en-IN'))

//++++++++++++++++++Maths++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(6.4));
console.log(Math.ceil(6.4));
console.log(Math.floor(6.9));
console.log(Math.min(6,9));
console.log(Math.max(6,9));
console.log((Math.random()*10) + 1);

const min = 10
const max = 10

console.log(Math.floor((Math.random() * (max-min) + 1)))
