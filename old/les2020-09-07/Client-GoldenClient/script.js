/*
Приклад. Створити клас Client
Властивості:
    ID
    ПІБ
    Кількість грошей на рахунку
Методи:
    Додавання грошей
    Зняття грошей
    ToString
*/

class Client {
    constructor(id, pib, money){
        this.id = id
        this.pib = pib
        this.money = money
    }
    addMoney(sum) {
        if (sum>0)
        this.money+=sum
    }
    getMoney(sum) {
        if (sum<=this.money)
        this.money-=sum
    }
    getString() {
        return `id-${this.id}, ПІБ-${this.pib}, money-${this.money}`
    }
    onClickGet() {
        let getSum = parseFloat(this.input.value)
        this.getMoney(getSum)
        this.render('clientInfo')
        // console.log(getSum);
    }
    onClickAdd() {
        let getSum = parseFloat(this.input.value)
        this.addMoney(getSum)
        this.render('clientInfo')
        // console.log(getSum);
    }
    render(container) {
        // create table
        this.containerID = document.getElementById(container)
        this.containerID.innerHTML = ''
        this.table = document.createElement('table')
        this.table.setAttribute('border', '1px')
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerText = 'ID'
        tr.appendChild(td)
        td = document.createElement('td')
        td.innerText = this.id
        tr.appendChild(td)
        this.table.appendChild(tr)
        this.containerID.appendChild(this.table)
        tr = document.createElement('tr')
        td = document.createElement('td')
        td.innerText = 'ПІБ'
        tr.appendChild(td)
        td = document.createElement('td')
        td.innerText = this.pib
        tr.appendChild(td)
        this.table.appendChild(tr)
        this.containerID.appendChild(this.table)
        tr = document.createElement('tr')
        td = document.createElement('td')
        td.innerText = 'Кошти'
        tr.appendChild(td)
        td = document.createElement('td')
        td.innerText = this.money
        tr.appendChild(td)
        this.table.appendChild(tr)
        this.containerID.appendChild(this.table)
        // br
        let br = document.createElement('br')
        this.containerID.appendChild(br)
        // create input
        this.input = document.createElement('input')
        this.input.setAttribute('type', 'number')
        this.input.setAttribute('placeholder', this.money)
        this.containerID.appendChild(this.input)
        // create button get
        let btn = document.createElement('button')
        btn.innerText = 'get'
        btn.setAttribute('id', 'getMoney')
        btn.onclick = this.onClickGet.bind(this)
        this.containerID.appendChild(btn)
        // create button add
        btn = document.createElement('button')
        btn.innerText = 'add'
        btn.setAttribute('id', 'addMoney')
        btn.onclick = this.onClickAdd.bind(this)
        this.containerID.appendChild(btn)
    }
}
/*
На основі цього класу створити клас GoldenClient
Властивості:
    ID
    ПІБ
    Кількість грошей на рахунку
    Ліміт кредитних коштів
    Відсоток за використання кредитних коштів
Методи:
    Додавання грошей
    Зняття грошей
    Визначення пені за використання кредитних коштів
    ToString
*/
class GoldenClient extends Client {
    constructor(id, pib, money, limitMoney, percentUse){
        super (id, pib, money)
        this.limitMoney = limitMoney
        this.percentUse = percentUse
    }
    getString() {
        return `id-${this.id}, ПІБ-${this.pib}, money-${this.money}, limit-${this.limitMoney}, %-${this.percentUse}`
    }
    render(container) {
        super.render(container)
        // Ліміт кредитних коштів
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerText = 'Кредитний ліміт'
        tr.appendChild(td)
        td = document.createElement('td')
        td.innerText = this.limitMoney
        tr.appendChild(td)
        this.table.appendChild(tr)
        // Відсоток за використання кредитних коштів
        tr = document.createElement('tr')
        td = document.createElement('td')
        td.innerText = 'Відсоток за використання кредитних коштів'
        tr.appendChild(td)
        td = document.createElement('td')
        td.innerText = this.percentUse
        tr.appendChild(td)
        this.table.appendChild(tr)
        if (this.renderLimit) {
            // Витрачено кредитних коштів
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            td.innerText = 'Витрачено кредитних коштів'
            tr.appendChild(td)
            td = document.createElement('td')
            td.innerText = this.useLimit
            tr.appendChild(td)
            this.table.appendChild(tr)
            // Нараховано за користування кредитом
            tr = document.createElement('tr')
            td = document.createElement('td')
            td.innerText = 'Пеня'
            tr.appendChild(td)
            td = document.createElement('td')
            td.innerText = this.moneyForPercent
            tr.appendChild(td)
            this.table.appendChild(tr)
        }
    }
    getMoney(sum) {
        // super.getMoney(sum)
        if (sum <= this.money) {
            this.money-=sum
        } else if (sum > this.money && sum <= (this.money+this.limitMoney)) {
            this.useLimit = this.limitMoney - ((this.money+this.limitMoney)-sum)
            this.limitMoney-=this.useLimit
            this.money = 0
            
            this.moneyForPercent = this.useLimit * this.percentUse / 100

            this.renderLimit = true
        }
    }
}
window.onload = function() {
    // let client = new Client(idClient, pibClient, moneyClient)
    // client.render('clientInfo')
    let goldClient = new GoldenClient(idClient, pibClient, moneyClient, limitMoney, percentUse)
    goldClient.render('clientInfo')
}

let idClient = 304798
let pibClient = 'Іванов Василь Петрович'
let moneyClient = 1_640

let limitMoney = 10_000
let percentUse = 5