function calcResult() {
    let getInput1 = document.getElementById('number1')
    let number1 = parseFloat(getInput1.value)

    let getInput2 = document.getElementById('number2')
    let number2 = parseFloat(getInput2.value)

    let operation = document.getElementById('operation')
    let option = operation.value

    let result
    switch (option) {
        case '+': result = number1 + number2
            break;
        case '-': result = number1 - number2
            break;
        case '*': result = number1 * number2
            break;
        case '/': result = number1 / number2
            break;
        default: result = 'Wrong operation'
            break;
    }
    console.log(option);

    const resultImput = document.getElementById('res')
    resultImput.value = result
}

window.onload = function () {
    const btn = document.getElementById('sum')
    btn.onclick = calcResult
}