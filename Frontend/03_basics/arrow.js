const user = {
    username: "Animesh",
    price: 12123,

    welcomeMessage: function () {
        console.log(`Welcome to the website ${this.username}`);
        // console.log(this);

    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

function chai() {
    console.log(this.username);
}

chai()

const chai1 = function () {
    console.log(this.username);
}
chai1()

const chai2 = () => {
    let username = "Animesh"
    console.log(username);
    console.log(this.username);
    console.log(this);
}
chai2()

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(5, 5));

const addTwo1 = (num1, num2) => num1 + num2
console.log(addTwo1(5, 5));

const addTwo2 = (num1, num2) => ({ username: "Animesh" })
console.log(addTwo2(5, 5));

// const myArray = [2, 3, 5, 6, 77]

// myArray.forEach(( ) => ( ))