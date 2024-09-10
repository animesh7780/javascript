const email = ''

if (email) {
    console.log("Email is valid");
} else {
    console.log("Email is not valid");
}

//Falsy values
//0 , '', undefined, null, NaN, false, -0, bigint 0n

//Truthy values
//"0", " ", [], {}, true, function(){}

if (email.length === 0) {
    console.log("Array is empty");

}

const myObj = {}

if (Object.keys(myObj).length === 0) {
    console.log("Object is empty");
}

//Nullish coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10 //null nahi aayega 
val1 = undefined ?? 10 // undefined pe bhi
val1 = null ?? 10 ?? 20
console.log(val1);

// Ternary Operator

// condition ? true : flase

const price = 100
price <= 80 ? console.log("more than 80") : console.log("less than 80");
