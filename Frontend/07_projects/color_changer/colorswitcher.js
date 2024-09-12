const allButtons = document.querySelectorAll(".button")
const body = document.querySelector("body")

// allButtons.forEach(function (btn) {
//     console.log(btn);
//     btn.addEventListener('click', function (e) {
//         console.log(e);
//         console.log(e.target);

//         switch (e.target.id) {
//             case "aqua":
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             case "white":
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             case "blue":
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             case "yellow":
//                 body.style.backgroundColor = e.target.id;
//                 break;

//             default:
//                 break;
//         }
//     })
// })

allButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        body.style.backgroundColor = btn.id
    })
})