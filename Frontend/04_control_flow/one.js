//if

const isUserLoggedIn = true
const temperature = 30

if (isUserLoggedIn) {

}

if (2 === 2) {
    console.log("Yes ");
}

if (temperature > 30) {
    console.log("Yes it is");
} else {
    console.log("No it is not");
}


//<, >, <=, >=, ==, ===, !=, !==

const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User Power: ${power}`);
}
//console.log(`User Power: ${power}`);

const balance = 1000

if (balance > 500) console.log("User has high balance");

if (balance < 500) {
    console.log("User has low balance");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("greater than or equal to 900");
}

const isUserLoggedInn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedInn && debitCard) {
    console.log("User is logged in and has a debit card");
}
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User is logged in from email or google");

}