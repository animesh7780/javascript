let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toTimeString());

//let mycreatedate = new Date(2024, 0, 23, 5 , 3)
let mycreatedate = new Date("2024-01-12")
console.log(mycreatedate.toLocaleString());


let myTimestamp = Date.now()
console.log(myTimestamp);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
})

