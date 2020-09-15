class Calculator {
    constructor(num1, sym1, num2, symb) {
        this.num1 = num1
        this.sym1 = sym1
        this.num2 = num2
        this.symb = symb
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
        console.log(this.num1);
        // if (e.target.tagName === 'BUTTON') {
        //     console.log(e.target.innerText);
            
        // }
        
    }
}

// let calc
window.onload = function() {
    let calc = new Calculator(0, '', 0, ['+', '-', '*', '/'])
    calc.render('container')
    let body = document.querySelector('body')
    body.addEventListener('click', calc.listinerButtons)
}