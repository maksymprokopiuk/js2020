// Задача 1. Дано оцінки учня за 5 предметів у 12 бальній шкалі.
// Вивести номери предметів, з яких у учня трійки?

// function createArrWithRandomScore(countScores, minScore, maxScore) {
//     let arr = []
//     getRndmMinMax = ((min, max)=> Math.floor(Math.random() * (max - min + 1)) + min)
//     for (let i = 0; i < countScores; i++) {
//         arr.push(getRndmMinMax(minScore, maxScore))
//     }
//     return arr
// }

// let scoresPupil = createArrWithRandomScore(5, 4, 12)
// console.log(scoresPupil);

// for (let i = 0; i < scoresPupil.length; i++) {
//     if (scoresPupil[i] >=4 && scoresPupil[i] <=6) {
//         console.log(`${i+1} предмет, оцінка - ${scoresPupil[i]}`);
//     }
// }

// Задача 2. Користувач вводить 10 слів.
// Підрахувати кількість слів, у яких перша літера і остання літера однакові.

// let words = []
// let countWords = 10
// countSameWords = 0

// while (words.length < 10) {
//     let word = prompt(`Введіть одно слово з ${countWords}`, 'qwertyq')
//     if (word != null && word != '') {
//         words.push(word)
//         countWords--
//         if (word[0] === word[word.length-1]) {
//             countSameWords ++
//         }
//     }
// }
// console.log(words);
// console.log(`Кількість слів, у яких перша літера і остання літера однакові - ${countSameWords}`);

// Задача 3. Дано послідовність чисел, які згенеровано випадковим чином.
// Сформувати новий масив, у якому елементи є більшими за перший елемент.

// function createArrWithRandomScore(countNumbers, minScore, maxScore) {
//     let arr = []
//     getRndmMinMax = ((min, max)=> Math.floor(Math.random() * (max - min + 1)) + min)
//     for (let i = 0; i < countNumbers; i++) {
//         arr.push(getRndmMinMax(minScore, maxScore))
//     }
//     return arr
// }

// let randomNumbers = createArrWithRandomScore(10, 1, 100)
// let numbers = []

// for (let i = 0; i < randomNumbers.length; i++) {
//     if (randomNumbers[i] > randomNumbers[0]) {
//         numbers.push(randomNumbers[i])
//     }
// }
// console.log(randomNumbers);
// console.log(numbers);

// Задача 4. Усі елементи введеного масиву помножити на 17.

// let numbers = [10, 5, 11, 8, 12, 3, 10, 78, 2, 1, 90]
// numbers.forEach((x, i, arr) => arr[i] *=17)
// console.log(numbers);

// Задача 5. Знайти суму елементів, які знаходяться після елемента зі значенням 78.

// let numbers = [10, 5, 11, 78, 12, 3, 10, 78, 2, 1, 90]

// let elem78 = numbers.indexOf(78)
// let numbers2 = numbers.slice(elem78+1)
// let sum= numbers2.reduce((prevSum,number)=>prevSum+number, 0)

// console.log(sum);

// Задача.
// Форма авторизації з автозаповненням пароля. При створенні об”єкта у конструктор передаємо набори логінів і відповідних паролів.
// Користувач вводить логін. Якщо у об”єкті зберігається логін, то автоматично вставити пароль у друге поле вводу

// let userCreds = [
//     {
//         id : 1,
//         login: '12',
//         pass: '12345',
//     },
//     {
//         id : 2,
//         login: 'name2',
//         pass: '56789',
//     },
//     {
//         id : 3,
//         login: 'name3',
//         pass: 'fgdhs',
//     },
// ]

// class LoginBlock {
    
//     render(containerId) {
//         const container = document.getElementById(containerId)
//         let span = document.createElement('span')
//         span.innerText = 'Login'
//         container.appendChild(span)
//         let input = document.createElement('input')
//         input.setAttribute('type', 'text')
//         input.setAttribute('id', 'inputLogin')
//         input.onkeyup = this.fun.bind(this)
//         container.appendChild(input)
//         span = document.createElement('span')
//         span.innerText = 'Password'
//         container.appendChild(span)
//         input = document.createElement('input')
//         input.setAttribute('type', 'password')
//         input.setAttribute('id', 'passLogin')
//         container.appendChild(input)
//         let btn = document.createElement('button')
//         btn.innerText = 'OK'
//         btn.onclick = this.showCredsInConsole.bind(this)
//         container.appendChild(btn)
//     }
//     fun() {
//         let enteredValue = document.getElementById('inputLogin').value
//         let inputPass = document.getElementById('passLogin')
//         for (let i = 0; i < userCreds.length; i++) {
//             if (enteredValue === userCreds[i].login) {
//                 inputPass.value = userCreds[i].pass
//                 break
//             }
//             else {
//                 inputPass.value = ''
//             }
//         }
//     }
//     showCredsInConsole() {
//         const inputLogin = document.getElementById('inputLogin')
//         const login = inputLogin.value
//         const inputPass = document.getElementById('passLogin')
//         const password = inputPass.value
//         console.log(`login - ${login}, password - ${password}`);
//     }
// }
// window.onload = function() {
//     const login = new LoginBlock
//     login.render('container')
// }

// Задача.
// Користувач вводить номер автомобіля.
// У наступному полі вводу автоматично з”являється назва області, де цей автомобіль зареєстровано та номер обласного ДАІ.

// let uaRegionsDai = [
//     {
//         id : 1,
//         region : 'АО',
//         name : 'Закарпатська область',
//         tel : '+380111111111',
//     },
//     {
//         id : 2,
//         region : 'ВО',
//         name : 'Тернопільська область',
//         tel : '+380222222222',
//     },
//     {
//         id : 3,
//         region : 'ВС',
//         name : 'Львівська область',
//         tel : '+380333333333',
//     },
// ]
// class CheckNumberAuto {
//     render(containerId) {
//         const container = document.getElementById(containerId)
//         let input = document.createElement('input')
//         input.setAttribute('type', 'text')
//         input.setAttribute('id', 'inputNumber')
//         input.setAttribute('placeholder', 'Номер автомобіля')
//         input.setAttribute('maxlength', '8')
//         input.onblur = this.fun.bind(this)
//         container.appendChild(input)
        
//         container.appendChild(document.createElement('br'))
        
//         input = document.createElement('input')
//         input.setAttribute('type', 'text')
//         input.setAttribute('id', 'inputArea')
//         input.setAttribute('placeholder', 'Область')
//         container.appendChild(input)
        
//         container.appendChild(document.createElement('br'))
        
//         input = document.createElement('input')
//         input.setAttribute('type', 'text')
//         input.setAttribute('id', 'inputPhone')
//         input.setAttribute('placeholder', 'Номер обласного ДАЇ')
//         container.appendChild(input)
        
//         container.appendChild(document.createElement('br'))
        
//         let btn = document.createElement('button')
//         btn.setAttribute('id', 'btnOk')
//         btn.innerText = 'OK'
//         container.appendChild(btn)
//     }
//     fun() {
//         let inputNumberValue = ((document.getElementById('inputNumber').value).toUpperCase()).slice(0,2)
//         let inputArea = document.getElementById('inputArea')
//         let inputPhone = document.getElementById('inputPhone')
//         console.log(inputNumberValue);
//         for (let i = 0; i < uaRegionsDai.length; i++) {
//             if (inputNumberValue === uaRegionsDai[i].region) {
//                 inputArea.value = uaRegionsDai[i].name
//                 inputPhone.value = uaRegionsDai[i].tel
//                 break
//             } else {
//                 inputArea.value = ''
//                 inputPhone.value = ''
                
//             }
//         }
//     }
// }
// window.onload = function() {
//     let checkNum = new CheckNumberAuto()
//     checkNum.render('container')
// }

// Задача.
// У поле вводу вводимо назву предмета і натискаємо на кнопку. Після цього з”являється зображення цього предмета.

/*
<input type="text">
<button>OK</button>
<div id="thing">
<img src="https://" width="200px" height="auto">
</div>
*/

// let things = [
//     {
//         id : 1,
//         name : 'rectangle',
//         url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rectangle_example.svg/800px-Rectangle_example.svg.png',
//     },
//     {
//         id : 2,
//         name : 'circle',
//         url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Circle_frame.svg/200px-Circle_frame.svg.png',
//     },
//     {
//         id : 3,
//         name : 'square',
//         url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Screw_Head_-_Square_External.svg/40px-Screw_Head_-_Square_External.svg.png',
//     },
// ]

// class Thing {
//     picture() {
//         let thingInput = (this.input.value).toLowerCase()
        
//         for (let i = 0; i < things.length; i++) {
//             if (thingInput === things[i].name) {
//                 // додати блок і внього картинку
//                 let img = document.createElement('img')
//                 img.setAttribute('width', '200px')
//                 img.setAttribute('src', things[i].url)
//                 this.div.appendChild(img)
//                 this.container.appendChild(div)
//                 break
//         } else {
//             this.div.innerText = ''
//         }

//         }
//     }
//     render(containerId) {
//         this.container = document.getElementById(containerId)
//         let span = document.createElement('span')
//         span.innerText = 'Rectangle circle square'
//         this.container.appendChild(span)

//         this.container.appendChild(document.createElement('br'))
        
//         this.input = document.createElement('input')
//         this.input.setAttribute('type', 'text')
//         this.input.setAttribute('id', 'inputThing')
//         this.input.setAttribute('placeholder', 'Назва предмета')
//         this.container.appendChild(this.input)

//         this.container.appendChild(document.createElement('br'))

//         let btn = document.createElement('button')
//         btn.innerText = 'OK'
//         btn.onclick = this.picture.bind(this)
//         this.container.appendChild(btn)
//         this.div = document.createElement('div')
//         this.container.appendChild(this.div)
//         this.container.appendChild(document.createElement('br'))
//     }
// }
// window.onload = function() {
//     let guessThing = new Thing ()
//     guessThing.render('container')
// }

// Задача.
// Форма офромлення доставки. З клавіатури вводиться вартість товару, спосіб доставки (поштою - 5% вартості,
// новою поштою  - 7% вартості, кур”єром — 10% вартсті), та термін доставки (термінова +5%, звичайна).
// Визначити загальну вартість доставки.

// class Delivery {
//     calculate(val) {
//         if (val) {
            
//             let deliveryPrice
//             let fastPrice
//             let radioDeliveries = document.getElementsByName('deliveryPost')
//             for (let i = 0; i < radioDeliveries.length; i++) {
//                 // console.log(radioDeliveries[i].id);
//                 if (radioDeliveries[i].checked) {
//                     switch (radioDeliveries[i].id) {
//                         case 'chkBxUposhta': deliveryPrice = val * 5 / 100
//                         break;
//                         case 'chkBxNposhta': deliveryPrice = val * 7 / 100
//                         break;
//                         case 'chkBxCurer': deliveryPrice = val * 10 / 100
//                         break;
//                     }
//                 }
//             }
            
//             let fastDelivery = document.getElementsByName('faster')
//             fastPrice = fastDelivery[0].checked ? val * 5 / 100 : 0
//             // console.log(fastPrice);
//             let totalDeliveryPrice = deliveryPrice + fastPrice
//             this.input2.value = totalDeliveryPrice
//         }

//     }
//     onclick(e) {
//         if (e.target.tagName === 'INPUT') {
//             let userValue = parseFloat(this.input.value)
//             this.calculate(userValue)
//         }
//     }
//     render(containerId) {
//         const container = document.getElementById(containerId)
//         container.onclick = this.onclick.bind(this)
//         this.input = document.createElement('input')
//         this.input.setAttribute('placeholder', 'Вартість товару')
//         container.appendChild(this.input)

//         container.appendChild(document.createElement('br'))
        
//         let span = document.createElement('span')
//         span.innerText = 'оберіть спосіб доставки:'
//         container.appendChild(span)
        
//         container.appendChild(document.createElement('br'))

//         let input = document.createElement('input')
//         input.setAttribute('type', 'radio')
//         input.setAttribute('id', 'chkBxUposhta')
//         input.setAttribute('name', 'deliveryPost')
//         input.setAttribute('checked', 'true')
//         container.appendChild(input)
//         span = document.createElement('span')
//         span.innerText = 'Укрпошта +5%'
//         container.appendChild(span)

//         container.appendChild(document.createElement('br'))

//         input = document.createElement('input')
//         input.setAttribute('type', 'radio')
//         input.setAttribute('id', 'chkBxNposhta')
//         input.setAttribute('name', 'deliveryPost')
//         container.appendChild(input)
//         span = document.createElement('span')
//         span.innerText = 'Нова пошта +7%'
//         container.appendChild(span)
//         container.appendChild(document.createElement('br'))
        
//         input = document.createElement('input')
//         input.setAttribute('type', 'radio')
//         input.setAttribute('id', 'chkBxCurer')
//         input.setAttribute('name', 'deliveryPost')
//         container.appendChild(input)
//         span = document.createElement('span')
//         span.innerText = 'Кур\'єр +10%'
//         container.appendChild(span)
//         container.appendChild(document.createElement('br'))
        
//         span = document.createElement('span')
//         span.innerText = 'додатково:'
//         container.appendChild(span)
//         container.appendChild(document.createElement('br'))

//         input = document.createElement('input')
//         input.setAttribute('type', 'radio')
//         input.setAttribute('id', 'fast')
//         input.setAttribute('name', 'faster')
//         container.appendChild(input)
//         span = document.createElement('span')
//         span.innerText = 'Термінова +5%'
//         container.appendChild(span)
//         input = document.createElement('input')
//         input.setAttribute('type', 'radio')
//         input.setAttribute('name', 'faster')
//         input.setAttribute('checked', 'true')
//         container.appendChild(input)
//         span = document.createElement('span')
//         span.innerText = 'Звичайна'
//         container.appendChild(span)
//         container.appendChild(document.createElement('br'))

//         this.input2 = document.createElement('input')
//         this.input2.setAttribute('disabled', 'true')
//         container.appendChild(this.input2)
//     }
// }
// window.onload = function() {
//     const delivery1 = new Delivery()
//     delivery1.render('container')
// }

