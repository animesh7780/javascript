function sayMyName() {
    console.log("A");
    console.log("A");
    console.log("A");
    console.log("A");
}
sayMyName()

function add1(num1, num2){
    console.log(num1+num2);
    
}
add1(2,66)
function add2(num1, num2){
    let result = num1+num2;
    return result
}
const result = add2(2,3)
console.log(result)

function add3(num1, num2){
    return num1+num2
}
const result1 = add3(2,66)
console.log(result1)


function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please Enter User name"); 
        return
    }
    return `${username} just logged in`
}

const user = loginUserMessage("Animesh")
console.log(user);

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,323,656,235,4,32,1,12));


const User = {
    userName: "Animesh",
    Price: "1213"

}

function habdleObject(anyobject){
    console.log(`Username ${anyobject.userName} and price is ${anyobject.Price}`);
    
}

habdleObject({
    userName:"Animesh",
    Price:12123
});

const myNewArray = [200,3323,543546,46]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue ([323,43,5,6,45]));
 