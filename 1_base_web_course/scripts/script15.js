// створюємо object конструктор
class InputTable {
    // для 'статичних ключів/значень'
    constructor(nameTitle, valueTitle, elementsCount) {
        this.nameTitle = nameTitle //this.nameTitle
        this.valueTitle = valueTitle //this.valueTitle
        this.elementsCount = elementsCount //this.elementsCount
    }
    // функції створюються після конструктора і без слова function!
    
    // що ця функція робить (створює масив із значеннями 'Товар')
    // цією функцією додаємо до масива введені значення з таблиці після кліка по кнопці "??????????????"
    getPricesArrey() {
        return this.addresses.map(row => parseFloat(row.inpValueAddr.value))
    }
    //доробити
    getTitlesArray() {       
    }
    getObjectsArray() {
    }
    // створення та вставлення таблиці
    render(containerId) {
        // зберігаємо id діва в який треба втавити таблицю
        const container = document.getElementById(containerId)
        // створюємо таблицю
        const table = document.createElement('table')
        // додаємо таблицю в контейнер
        container.appendChild(table)
        // створюємо tr (контейнер для створення строки)
        let tr = document.createElement('tr')
        // створюємо th (створення ячейки)
        let th = document.createElement('th')
        // додаємо текст в заголовок
        th.innerText = this.nameTitle // береться 1 значення з об'єкта
        // th -> tr
        tr.appendChild(th)

        // створюємо нуву ячейку
        th = document.createElement('th')
        th.innerText = this.valueTitle // береться 2 значення з об'єкта
        tr.appendChild(th)

        // додаємо 2 створенні tr-ки в table
        table.appendChild(tr)

        // створюємо масив для значень із таблиці ??????????????
        this.addresses = []

        // циклом додамо до таблиці рядки
        // this.elementsCount - береться 3 значення з об'єкта
        for (let i = 0; i < this.elementsCount; i++) {
            tr = document.createElement('tr')
            // створюємо td (створення ячейки)
            let td = document.createElement('td')
            let inpTitle = document.createElement('input')
            td.appendChild(inpTitle)
            tr.appendChild(td)

            td = document.createElement('td')
            let inpValue = document.createElement('input')
            td.appendChild(inpValue)
            tr.appendChild(td)
            table.appendChild(tr)

            // додаємо до масива значення, які введені користувачем в таблицю
            this.addresses.push(
                {
                    inpTitleAddr: inpTitle,
                    inpValueAddr: inpValue
                }
            )
        }
    }
}
// це object створений нашим конструктором
let tb1

function onButtonClick() {
    alert(tb1.getPricesArrey()) // виводимо алертом виводимо список значень для 'Ціна'
}
//
window.onload = function () {
    // створюємо object зза допомогою виклику конструктора для об'єктів
    tb1 = new InputTable('Назва', 'Ціна', 5)
    // викликаємо функцію, яка створює таблицю
    tb1.render('container')
    // отримуємо кнопку
    let btn = document.getElementById('btn')
    // при кліку по кнопці запускаємо функцію onButtonClick, яка алертом виводимо список значень для 'Ціна'
    btn.onclick = onButtonClick
}