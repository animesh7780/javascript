function setUsername(username) {
    //complex DB calls
    this.username = username
}

function createUser(username, email, password) {
    setUsername.call(this, username)
    this.email = email
    this.password = password

}

const chai = new createUser("animesh", "animesh@ex.com", "123456")
console.log(chai);
