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
        itemList: ['Hi-Potion', 'Tent', 'Antidote', 'Eye Drops',
            'Elixir', 'X-Potion', 'Megalixir', 'Remedy'],
        counter: 0,
        itemName: '',
        itemAmount: '',
        rowData: []
    },
    methods: {
        items() {
            if (this.itemDisplay === false) {
                this.itemDisplay = true
                if (this.counter === 0) {
                    this.addItem()
                    this.addItem()
                    this.addItem()
                    this.counter++
                }
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

        },
        addItem() {
            console.log('test')
            let testObj = {
                itemName: this.randomItem(),
                itemAmount: this.randomQuantity()
            }
            this.rowData.push(testObj)
        },
        randomItem() {
            let bup = this.itemList[Math.floor(Math.random() * this.itemList.length)]
            return bup
        },
        randomQuantity() {
            return Math.floor(Math.random() * 14)+1
        }
    }
})