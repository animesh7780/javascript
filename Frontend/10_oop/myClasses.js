// ES 6

class user {
    constructor(name, email, password) {
        this.name = name
        this.email = email
        this.password = password
    }
    encryptPassword() {
        return `encrypted ${this.password}`
    }
    username() {
        return `${this.name.toUpperCase()}`
    }
}

const ani = new user("Ani", "animesh@ex.com", "123456")

console.log(ani.encryptPassword());
console.log(ani.username());

//bts

function User(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `encrypted ${this.password}`
}

User.prototype.username = function () {
    return `${this.name.toUpperCase()}`
}

const bts = new user("BTS", "bts@ex.com", "123456")
console.log(bts.username());
