// singleton

// object literals

const sym = Symbol("Key1")

const JsUser ={
    full_name: "Animesh",
    age:21,
    [sym]: "mysum1",
    location: "Ranchi",
    email: "animesh@gmail.com",
    isLoggedIn: true,
    lastLoginDay: ["Monday", "Staurday"]
}

console.log(JsUser.name)
console.log(JsUser["full_name"])
console.log(JsUser[sym])

JsUser.email = "animesh@chatGPT.com"
console.log(JsUser.email);
//Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS use")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS use, ${this["full_name"]}, ${this.email}`)
}
JsUser.greetingThree = function(){
    console.log(`Hello JS use, ${this.full_name}, ${this.email}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser.greetingThree());
