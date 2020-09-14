// let numbersBlock = true
// let symbolsBlock = true
// let specialSymbolsBlock = true

class Calculator {
    render(containerId) {
        let container = document.getElementById(containerId)
        // span
        this.span = document.createElement('span')
        this.span.setAttribute('id', 'display')
        this.span.innerText = '0'
        container.appendChild(this.span)
        // numbers block
        let div = document.createElement('div')
        div.setAttribute('id', 'numbers')
        for (let i = 0; i < 10; i++) {
            let button = document.createElement('button')
            button.setAttribute('class', 'activeNunber')
            button.innerText = i
            div.appendChild(button)
        }
        container.appendChild(div)
        // symbols block
        div = document.createElement('div')
        div.setAttribute('id', 'symbols')
        let symb = ['+', '-', '*', '/']
        for (let j = 0; j < symb.length; j++) {
            let button = document.createElement('button')
            button.setAttribute('class', 'activeSymbol')
            button.innerText = symb[j]
            div.appendChild(button)
        }
        container.appendChild(div)
        // special symbols block
        div = document.createElement('div')
        div.setAttribute('id', 'specialSymbols')
        let specSymb = ['=', 'C']
        let idspecSymb = ['total', 'cancel']
        for (let k = 0; k < specSymb.length; k++) {
            let button = document.createElement('button')
            button.setAttribute('id', idspecSymb[k])
            button.innerText = specSymb[k]
            div.appendChild(button)
        }
        container.appendChild(div)
    }
    listinerButtons(e) {
        let n1 = 0
        let display = document.getElementById('display')

        // numbers
        if (e.target.tagName === 'BUTTON') {
            // console.log(e.target.innerText);
            if (n1 === 0 || n1 === 'sum') {
                n1 = parseFloat(e.target.innerText)
                
                
            }
            else {
                n1 += parseFloat(e.target.innerText)
            }
            // n1 = display.innerText
            console.log(n1);
        }
        // symbols
        // sum
        if (e.target.innerText === '=') {
            console.log(display.innerText);
            display.innerText = 'sum'
        }
        // cancel
        if (e.target.innerText === 'C') {
            display.innerText = '0'
        }
    }
}

let calc
window.onload = function() {
    calc = new Calculator
    calc.render('container')
    let body = document.querySelector('body')
    body.addEventListener('click', calc.listinerButtons)
}