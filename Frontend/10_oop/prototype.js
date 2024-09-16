let myName = "Animesh            "
let myChannelName = "boom          "

console.log(myName.trim().length);


let myHeroes = ["Superman", "Batman", "Ironman"]

let heroPower = {
    "Superman": 100,
    "Batman": 200,
    "Ironman": 300,

    getSupermanPower: function () {
        console.log(`Superman power is ${this.Superman}`);
    }
}

Object.prototype.animesh = function () {
    console.log("animesh");
}

Array.prototype.heyanimesh = function () {
    console.log("animesh hai");
}

heroPower.animesh()
//heroPower.heyanimesh()

myHeroes.animesh()
myHeroes.heyanimesh()

//inheritance

const user = {
    email: "animesh@ex.com",
}

const teacher = {
    makeVideos: true
}

const teachingSupport = {
    isAvailable: true
}

const taSupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

//modern Syntax

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "animesh            "
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"animes".trueLength()
