// const tinderUser = new Object()

// tinderUser.id = "12424dsf"
// tinderUser.name = "Animesh"
// tinderUser.isLoggedIn = true

// console.log(tinderUser);

// const regularUser = {
//     email: "someone@google.com",
//     userFullName: {
//         f_name: "Animesh",
//         l_name:"Kumar"
//     }

// }

// console.log(regularUser.userFullName.f_name)

// const obj1 = {
//     1: "a",
//     2: "b"
// }
// const obj2 ={
//     3:"ds",
//     4: "asd"
// }

// const obj3 = Object.assign(obj1,obj2)
// const obj4 = Object.assign({},obj1,obj2)
// console.log(obj3);
// console.log(obj1);
// console.log(obj4);

// const obj5 = {...obj1,...obj2}
// console.log(obj5);


// const users = [
//     {

//     },
//     {
//     },
// ]

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course ={
    courseName: "Js Hindi",
    price: "Rs 999",
    courseInstructor: "Pagal" 
}

const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Animesh",
//     "courseName": "JS Hindi",
//     "price": "Free"

// }

[
    {},
    {},
    {}
]