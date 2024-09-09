// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log('Inner', a);

}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }

console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const usename = "Animesh"

    function two() {
        const website = "Youtube"
        console.log(usename);

    }
    //console.log(website);
    two()
}
one()

if (true) {
    const username = "Animesh"
    if (username == "Animesh") {
        const website = "Youtube"
        console.log(username + website);
    }
    //console.log(website);

}

//console.log(username);

// ++++++++++++++++++++++++++++ Intresting ++++++++++++++++++++++++++++++

console.log(addone(5));

function addone(num) {
    return num + 1
}

//cannot declare before initilization while assigning it to a variable

const addTwo = function (num) {
    return num + 2
}


console.log(addTwo(5));



