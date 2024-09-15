const promise1 = new Promise(function (resolve, reject) {
    //do async task
    //Db Calls, crypto calls
    setTimeout(function () {
        console.log("Promise 1 resolved");
        resolve();
    }, 1000)
})

promise1.then(function () {
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promise 2 resolved");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Promise 2 consumed");

})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            name: "Animesh",
            age: 21,
            emai: "animesh@gmail"
        })
    }, 1000)
})

promiseThree.then(function (data) {
    console.log(data);

})

const promiseFouer = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({
                name: "Animesh",
                age: 21,
                emai: "animesh@gmail"
            })
        }
        else {
            reject("Something went wrong")
        }
    }, 1000)
})

promiseFouer
    .then((user) => {
        console.log(user);
        return user.name
    })
    .then((name) => {
        console.log(name);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("finally");
    })

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({
                name: "DMS",
                age: 41,
                emai: "dms@dms.com"
            })
        }
        else {
            reject("Something went wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const respone = await promiseFive
        console.log(respone);
    }
    catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => {
        console.log("finally");
    })