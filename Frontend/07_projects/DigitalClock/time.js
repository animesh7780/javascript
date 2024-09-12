const time = document.getElementById('clock')
//time.innerHTML = "12:12:12 AM"

setInterval(function () {
    let date = new Date()
    time.innerHTML = date.toLocaleTimeString()
}, 1000)
