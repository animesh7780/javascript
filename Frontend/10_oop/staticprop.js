class user {
    constructor(name) {
        this.name = name
    }
    logMe() {
        console.log(`Username: ${this.name}`);
    }

    static createId() {
        return `123`
    }
}

const ani = new user("Animesh")
//console.log(ani.createId());

class teacher extends user {

    constructor(name, email) {
        super(name)
        this.email = email
    }
}

const iPhone = new teacher("Ani", "animesh@ex.com")
iPhone.logMe()


