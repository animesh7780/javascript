const user = {
    _email: "animesh@ex.com",
    _password: "abc",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value.toUpperCase()
    },

    get password() {
        return this._password
    },
    set password(value) {
        this._password = value
    }
}

const tea = Object.create(user)
console.log(user);
