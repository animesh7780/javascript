const myarr = [0,1,23,4,5,567,88,9]
const myHeros = ["Shaktiman", "Nagraaj"]

const myarr2 = new Array(1,23,4,345,4)
console.log(myarr2[2])

//methods

// myarr.push(6)
// myarr.pop();
// myarr.unshift(9)
// myarr.shift()

console.log(myarr.includes(7));
console.log(myarr.indexOf(4));

const newArr = myarr.join()
console.log(newArr)

console.log(myarr);

//slice

const myn1 = myarr.slice(1,4)
console.log(myn1);
console.log(myarr);

const myn2 = myarr.splice(1,4)
console.log(myn2);
console.log(myarr);