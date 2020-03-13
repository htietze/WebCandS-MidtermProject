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

let app = new Vue({
    el:'#app',
    data: {
        itemDisplay: false,
        equipDisplay: false,
    },
    methods: {
        items() {
            if (this.itemDisplay === false) {
                this.itemDisplay = true
            } else {
                this.itemDisplay = false
            }
            this.equipDisplay = false
        },
        equip() {
            if (this.equipDisplay === false) {
                this.equipDisplay = true
            } else {
                this.equipDisplay = false
            }
            this.itemDisplay = false
        },
        order() {

        }
    }
})