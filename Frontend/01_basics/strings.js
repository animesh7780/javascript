const name = "Animesh"
const repoCount = 5

console.log(name+repoCount);

console.log(`Hello my name is ${name} nd my repo count is ${repoCount}`);

console.log(name[1]);
console.log(name.__proto__);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(5));
console.log(name.indexOf('n'));

const newString = name.substring(0,4)
console.log(newString);


const anotherString = name.slice(-8,1)
console.log(anotherString);

const string = "helloo ambani ss-sss "
console.log(string);
console.log(string.trim())

const url = "https://animesh.com/animesh%20kumar"
console.log(url.replace("%20", "y"));

console.log(url.includes('animesh'))

console.log(string.split(' '));
