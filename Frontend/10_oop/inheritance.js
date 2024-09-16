class user {
    constructor(name) {
        this.name = name
    }
    logME() {
        console.log(`Username: ${this.name}`);

    }
}

class teacher extends user {
    constructor(name, email, password) {
        super(name)
        this.email = email
        this.password = password
    }
    addCourse() {
        console.log(`A new course added by ${this.name} `);
    }
}

const teacher1 = new teacher("Ani", "animesh@ex.com", "123456")
teacher1.addCourse()
teacher1.logME()

const user2 = new user("Animesh")
user2.logME()

console.log(teacher1 instanceof user);

