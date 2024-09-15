const user = {
    name: "Animesh",
    loginCount: 32,
    signedIn: true,

    getUserDetails: function () {
        console.log(this.name, this.loginCount, this.signedIn);

    }
}

console.log(user.name);
console.log(user.getUserDetails());

function User(name, loginCount, signedIn) {
    this.name = name
    this.loginCount = loginCount
    this.signedIn = signedIn
    this.greetings = function () {
        console.log(`Hello ${this.name}`)
    }
    // return this
}

const userOne = new User("Animesh", 32, true)
const userTwo = new User("Pagal", 32, false)
console.log(userOne.constructor);   
