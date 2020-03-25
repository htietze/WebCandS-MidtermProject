let time = document.querySelector('#time')
time.innerHTML = getDate()

setInterval( () => {
    time.innerHTML = getDate()
}, 1000)

function getDate() {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    return `${hour} : ${minute} : ${second}`
}

let money = document.querySelector('#money')
money.innerHTML = Math.floor(Math.random() * 100000)

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
        potionCount: '',
        duplicateCheck: [],
        rowData: []
    },
    methods: {
        items() {
            if (this.itemDisplay === false) {
                this.itemDisplay = true
                while (this.counter < 3) {
                    this.addItem()
                    this.counter++
                    if (this.counter === 2) {
                        this.potionCount = this.randomQuantity()
                    }
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
            alert("Whoops. Haven't added it.")
        },
        quit() {
            alert("Er.. can't do that either!")
        },
        addItem() {
            // https://stackoverflow.com/questions/52211682/add-rows-to-the-table-dynamically-with-the-use-of-vue-js
            let itemObj = {
                itemName: this.randomItem(),
                itemAmount: this.randomQuantity()
            }
            this.duplicateCheck.push(itemObj.itemName)
            this.rowData.push(itemObj)
        },
        randomItem() {
            let bup = this.itemList[Math.floor(Math.random() * this.itemList.length)]
            while (this.duplicateCheck.includes(bup)) {
            bup = this.itemList[Math.floor(Math.random() * this.itemList.length)]
            }
            return bup
        },
        randomQuantity() {
            return Math.floor(Math.random() * 14)+1
        }
    }
})

fillHPBars('firstHP')
fillHPBars('secondHP')
fillHPBars('thirdHP')
fillMPBars('firstMP')
fillMPBars('secondMP')
fillMPBars('thirdMP')

function fillHPBars(elementID) {
    let canvas = document.getElementById(elementID)
    let context = canvas.getContext('2d')
    context.fillStyle = '#00A416'
    context.fillRect(0,0,200,30)
    context.fillStyle = '#FFFFFF'
    context.font = '15px Arial'
    context.fillText('HP', 3, 15)
}

function fillMPBars(elementID) {
    let canvas = document.getElementById(elementID)
    let context = canvas.getContext('2d')
    context.fillStyle = '#0064DD'
    context.fillRect(0,0,200,30)
    context.fillStyle = '#FFFFFF'
    context.font = '15px Arial'
    context.fillText('MP', 3, 15)
}