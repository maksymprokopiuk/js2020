class Calculator {
    constructor(symb) {
        this.symb = symb
        this.num1 = 0
    }
    render(containerId) {
        let container = document.getElementById(containerId)
        // span
        let span = document.createElement('span')
        span.setAttribute('id', 'display')
        span.innerText = '0'
        container.appendChild(span)
        // numbers block
        let div = document.createElement('div')
        // div.setAttribute('id', 'numbers')
        for (let i = 0; i < 10; i++) {
            let button = document.createElement('button')
            // button.setAttribute('class', 'activeNunber')
            button.innerText = i
            div.appendChild(button)
        }
        container.appendChild(div)
        // symbols block
        div = document.createElement('div')
        // div.setAttribute('id', 'symbols')
        // let symb = ['+', '-', '*', '/']
        for (let j = 0; j < this.symb.length; j++) {
            let button = document.createElement('button')
            button.setAttribute('class', 'symbol')
            button.innerText = this.symb[j]
            div.appendChild(button)
        }
        container.appendChild(div)
        // special symbols block
        div = document.createElement('div')
        // div.setAttribute('id', 'specialSymbols')
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
        
    }
}

let calc
window.onload = function() {
    calc = new Calculator(['+', '-', '*', '/'])
    calc.render('container')
    let body = document.querySelector('body')
    body.addEventListener('click', calc.listinerButtons)
}