//for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);

}

const greetings = "Anim esh"

for (const char of greetings) {
    if (char == ' ') {
        continue
    }
    console.log(char);
}

//maps

const myMap = new Map()
myMap.set("IN", "India")
myMap.set("USA", "America")
myMap.set("FR", "France")

console.log(myMap);

for (const [key, value] of myMap) {
    console.log(key + "=>" + value);

}

const myObject = {
    'game1': "cricket",
    'game2': "football"
}

for (const key of Object.entries(myObject)) {
    console.log(key);
}
for (const [key, value] of Object.entries(myObject)) {
    console.log(key + "=>" + value);
}

//for in

let secondObject = {
    js: "JavaScript",
    cpp: "C++",
    java: "Java",
    py: "Python"
}

for (const key in secondObject) {
    console.log(key, ':', secondObject[key]);
}

const programming = ["js", "cpp", "java", "py"]

for (const key in programming) {
    console.log(programming[key]);
}

const myMap1 = new Map()
myMap.set("IN", "India")
myMap.set("USA", "America")
myMap.set("FR", "France")

for (const key in myMap1) {
    console.log(key);

}

