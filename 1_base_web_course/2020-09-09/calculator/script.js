function click(e) {
    let digitsBlock = true
    let symbolBlock = true
    let specialSymbolBlock = true
    
    if (e.target.tagName === 'BUTTON') {

        console.log(e.target.innerText);
        this.activeButton = e.target // <button>2</button>
        this.digits = document.getElementById('display') // зберігаємо місцезнаходження DISPLAY

        if (digits.innerText === '0') {// перевіряємо чи "ісходне положення", якщо 0 то перетираємо значення
            digits.innerText = activeButton.innerText

        }
        else 
        digits.innerText += activeButton.innerText // додаємо до існуючого
    }
    if (e.target.innerText === 'C') { // перевіряємо чи натиснута спец клавіша "С"
        this.digits.innerText = '0' // в "ісходне положення"
    }

    if (e.target.innerText === '=') { // перевіряємо чи натиснута спец клавіша "="
        // let sum = 
        // this.digits.innerText = sum
        console.log(this.digits.innerText);
    }

}

window.onload = function () {
    let container = document.getElementById('container')
    // let numbers = document.getElementById('numbers')
    // let symbols = document.getElementById('symbols')
    container.onclick = this.click.bind(this)
    // numbers.onclick = this.click.bind(this)
    // symbols.onclick = this.click.bind(this)
    // console.log(numbers);
    // console.log(symbols);
}