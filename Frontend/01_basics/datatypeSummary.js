// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 612476873
console.log(bigNumber);
console.log(typeof bigNumber);


// Reference (Non primitive)

// Array, objects, Functions

const heroes = ["Shaktimaan", "Arjun", "Krishna"];
console.log(heroes)

let myObj = {
    name: "Animesh",
    age: 21
}

const myFuntion = function(){
    console.log("First Function")
}
console.log(typeof outSideTemp);


// stack(primitive), Heap Memry(non primitive)

let name = "Animesh"
let anothername = name
anothername = "chaiaurcode"

console.log(name)
console.log(anothername);

let user = {
    email: "pagal@ex.com",
    upiId: "u@ibl"
}

let userOne = user;

console.log(user.email)
console.log(userOne.email)