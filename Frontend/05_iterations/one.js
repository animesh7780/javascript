// for

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (index == 5) {
        console.log("5 is the best number");
    }
    console.log(element)
}

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop4: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`outer loop ${i} inner loop ${j}`);
        console.log(i + "*" + j + "= " + i * j);
    }
    const element = i;
}

let myArray = ["Batman", "Ironman", "Superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
}

//break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`5 detected`);
        break;
    }
    console.log(`value of i is ${i}`);

}
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`5 detected`);
        continue
    }
    console.log(`value of i is ${i}`);

}

