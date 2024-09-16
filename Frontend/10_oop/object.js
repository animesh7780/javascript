function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increaseScore = function () {
    this.score++
}
createUser.prototype.printME = function () {
    console.log(`price is ${this.score}`);

}
const ani = new createUser("Ani", 23)
const ani1 = new createUser("An1i", 231)

ani.printME()
ani.increaseScore()
