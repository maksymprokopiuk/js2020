class Calculator {
    constructor(symb) {
        this.symb = symb
        // this.num1 = 0
    }
    listinerButtons(e) {
        let span = document.getElementById('display')
        let num
        let sym





        if (e.target.tagName === 'BUTTON') { //перехоплюємо всі кнопки
            
                if (span.innerText === '0' && e.target.innerText >= 0 && e.target.innerText <= 9) {
                    span.innerText = e.target.innerText
                } 
                
                
                else {
                    if (e.target.innerText >= 0 && e.target.innerText <= 9 && typeof(parseInt(e.target.innerText))) {
                        span.innerText += e.target.innerText
                        console.log('більше 0 і номер');
                    }
                    
                    if (span.innerText > 0 && e.target.innerText === '+' || e.target.innerText === '-' || e.target.innerText === '*' || e.target.innerText === '/') {
                        num = span.innerText
                        sym = e.target.innerText
                        span.innerText = '0'
                        console.log('більше 0 і символ');
                    }
                    if (num && sym && e.target.innerText === '+' || e.target.innerText === '-' || e.target.innerText === '*' || e.target.innerText === '/') {
                        console.log(num);
                        console.log(sym);
                        console.log(e.target.innerText);
                        console.log(this.symb)
                    }
                }
            


























            // e.target.innerText >= 0 && e.target.innerText <= 9 ? temp = e.target.innerText : s = e.target.innerText





















            // if (temp) {
            //     if (span.innerText === '0' || span.innerText === '+' || span.innerText === '-' || span.innerText === '*' || span.innerText === '/') {
            //         span.innerText = temp
                    
            //     } else {
            //         span.innerText += temp
            //     }
            //     // console.log(temp);
            // } 
            // if (s) {
                // console.log(s);
                // n1 = parseFloat(span.innerText)
                // span.innerText += s
                // console.log(n1);
            // }
        // console.log(s);
            // if (e.target.id === 'total') {
            // if () {
            //     let total
            //     switch (s) {
            //         case '+': total = n1 + n2
            //             break;
            //         case '-': total = n1 - n2
            //             break;
            //         case '*': total = n1 * n2
            //             break;
            //         case '/': total = n1 / n2
            //             break;
            //     }
            //     span.innerText = total
            // }
            // if (e.target.id === 'cancel') {
                // все треба обнулити
                // дописати
                // I need to describe here
                // span.innerText = '0'
            // }
        }
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
            button.setAttribute('class', 'number')
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
}

let calc
window.onload = function () {
    calc = new Calculator(['+', '-', '*', '/'])
    calc.render('container')
    let body = document.querySelector('body')
    body.addEventListener('click', calc.listinerButtons)
}