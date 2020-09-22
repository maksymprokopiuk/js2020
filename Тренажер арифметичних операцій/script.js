class TrainMath {
    randomNum() {
    }
    randomOper() {
    }
    getResult() {
    }
    render(containerId) {
        const container = document.getElementById(containerId)
        let span = document.createElement('span')
        span.innerText = 'First number '
        container.appendChild(span)
        this.firstInput = document.createElement('input')
        this.firstInput.setAttribute('disabled', 'true')
        // this.firstInput.value = this.firstNum
        container.appendChild(this.firstInput)
        container.appendChild(document.createElement('br'))
        span = document.createElement('span')
        span.innerText = 'Operation: '
        container.appendChild(span)
        this.operationInput = document.createElement('input')
        this.operationInput.setAttribute('disabled', 'true')
        // this.operationInput.value = this.operator[this.operator2]
        container.appendChild(this.operationInput)
        container.appendChild(document.createElement('br'))
        span = document.createElement('span')
        span.innerText = 'Second number '
        container.appendChild(span)
        this.secondInput = document.createElement('input')
        this.secondInput.setAttribute('disabled', 'true')
        // this.secondInput.value = this.secondNum
        container.appendChild(this.secondInput)
        // ------------------------------------
        container.appendChild(document.createElement('br'))
        span = document.createElement('span')
        span.innerText = 'Your answer: '
        container.appendChild(span)
        this.answerInput = document.createElement('input')
        container.appendChild(this.answerInput)
        container.appendChild(document.createElement('br'))
        let btn = document.createElement('button')
        btn.innerText = 'Check'
        btn.onclick = this.getResult.bind(this)
        container.appendChild(btn)
        container.appendChild(document.createElement('br'))
        this.span = document.createElement('span')
        container.appendChild(this.span)
    }
}
let trainMath
window.onload = function() {
    trainMath = new TrainMath(['+', '-'])
    trainMath.render('container')
    trainMath.getResult()
}
// ['+', '-', '*', '/']