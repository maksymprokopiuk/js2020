class Range {
    constructor (defaultMin, defaultMax){
        this.min = defaultMin
        this.max = defaultMax
    }
    isInRange(value) {
        return value >= this.min && value <= this.max
    }
    getRandomValueFromRange() {
        return (this.min + Math.floor(Math.random() * this.max - 1))
    }
    checkValue() {
        const UserNum = parseInt(this.numberInput.value)
        if (this.isInRange(UserNum))
            this.messageDiv.innerText = `Число ${UserNum} належить діапазону`
        else this.messageDiv.innerText = `Число не ${UserNum} належить діапазону`
    }
    render (containerId) {
        const container = document.getElementById(containerId)
        let div = document.createElement('div')
        let label = document.createElement('label')
        label.innerText = 'Число'
        const input = document.createElement('input')
        input.setAttribute('type', 'number')
        label.appendChild(input)
        this.numberInput = input
        div.appendChild(label)
        container.appendChild(div)
        div = document.createElement('div')
        const btn = document.createElement('button')
        btn.innerText = 'перевірити'
        btn.onclick = this.checkValue.bind(this) //!!!!!!!!!!
        div.appendChild(btn)
        container.appendChild(div)
        this.messageDiv = document.createElement('div')
        container.appendChild(this.messageDiv)
    }
}
// window.onload = function () {
//     let r1 = new Range(1, 10)
//     r1.render('container')
// }
window.onload = function () {
    let r2 = new Range(10, 50)
    r2.render('cont2')
}