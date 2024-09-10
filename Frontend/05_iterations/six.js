const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map((num) => { return num + 10 })
console.log(newNums);

myNums.forEach((num) => {
    console.log(num + 10);

})

const newNums2 = myNums
    .map((num) => num * 10)
    .map((num) => num + 10)
    .filter((num) => num > 40)
console.log(newNums2);

