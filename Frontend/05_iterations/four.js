const coding = ["HTML", "CSS", "JS", "React", "Node", "MongoDB"];

//callbaqck function has no name
coding.forEach(function (index) {
    console.log(index);
})
coding.forEach((index) => {
    console.log(index);

})

function printMe(index) {
    console.log(index);
}

coding.forEach(printMe)

coding.forEach((index, item, arr) => {
    console.log(index, item, arr);

})

const myCoding = [
    {
        name: "Animesh",
        age: 21
    },
    {
        name: "Chaitanya",
        age: 22
    },
    {
        name: "Bhikmangya",
        age: 23
    }
]

myCoding.forEach((index, item, arr) => {
    console.log(index.age, item, arr);
})