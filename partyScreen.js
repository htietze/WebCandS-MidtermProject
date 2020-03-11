let time = document.querySelector('#time')
time.innerHTML = getDate()

setInterval( () => {
    time.innerHTML = getDate()
}, 1000)

let money = document.querySelector('#money')
money.innerHTML = Math.floor(Math.random() * 100000)

function getDate() {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    return `${hour} : ${minute} : ${second}`
}