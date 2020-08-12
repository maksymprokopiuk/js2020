// arrays

// 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії
// він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і
// відмінно), трійочник(є хоча би одна трійка)).

// const numberOfEstimates = parseInt(prompt('Ввести кількість оцінок'))
// // random min - max
// function getRandomMinMax(min, max) {
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random()*(max - min +1)) + min
// }
// // створюємо масив
// const points = []
// function createArrRandom() {
//     for (let i = 0; i < numberOfEstimates; i++) {
//         points.push(getRandomMinMax(4, 5))
//     }
// }
// createArrRandom()
// document.write(`Список оцінок - ${points}`)
// document.write('<br>')

// // знайти середній бал
// function suma(result, x) {
//     result += x;
//     return result;
// }

// let q = points.reduce(suma)
// document.write(`Середнє значення - ${q/numberOfEstimates}<br>`)

// знайти категорію 1 варіант
// if (points.some(mark=>mark===1) || points.some(mark=>mark===2))document.write ('двійочник')
// else if (points.some(mark=>mark===3))document.write ('трійочник')
// else if (points.some(mark=>mark===4))document.write ('хорошист')
// else document.write('відмінник')

// 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// - номери днів, протягом яких кількість відвідувачів була меншою за 20;
// - номери днів, коли кількість відвідувачів була мінімальною;
// - номери днів, коли кількість відвідувачів була мінімальною;
// - загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.


// // random min - max
// function getRandomMinMax(min, max) {
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random()*(max - min +1)) + min
// }

// // створюємо масив
// const visitors = []
// const week = 7

// function createArrRandom() {
//     for (let i = 0; i < week; i++) {
//         visitors.push(getRandomMinMax(10, 50))
//     }
// }
// createArrRandom()
// document.write(`${visitors} масив, який містить кількість відвідувачів магазину протягом тижня`)
// document.write('<br>')

// // - номери днів, протягом яких кількість відвідувачів була меншою за 20;
// function lessThan20(x, i, arr) {
//     if (x < 20)
//       document.write(`номери днів, протягом яких кількість відвідувачів була меншою за 20: ${i+1} - ${x}<br>`);
// }
// visitors.forEach(lessThan20);

// // - номери днів, коли кількість відвідувачів була мінімальною;
// // вивести середнє значення і все що менше то і є мінімальне
// // Знайти суму елементів масиву
// function suma(result, x, i, arr) {
//     result += x;
//     return result;
// }
// let sumVisitors = visitors.reduce(suma)
// const averageValue = Math.round(sumVisitors/week)
// document.write(`Середнє значення - ${averageValue}`)

// document.write('<br>')
// // вивести все що менше за середнє значення

// function lessThanAverageValue(x, i, arr) {
//     if (x < averageValue)
//       document.write(`Менше за середнє значення ${i+1} - ${x}<br>`);
// }
// visitors.forEach(lessThanAverageValue);
// document.write('<br>')
// // вивести все що більше за середнє значення

// function moreThanAverageValue(x, i, arr) {
//     if (x > averageValue)
//       document.write(`Більше за середнє значення ${i+1} - ${x}<br>`);
// }
// visitors.forEach(moreThanAverageValue);

// // - загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

// // створюємо новий масив для робочих днів
// let workDaysArray = visitors.slice(0, 5)
// // загальна кількість для робочих
// function suma(result, x, i, arr) {
//     result += x;
//     return result;
// }
// document.write('<br>')
// document.write(`загальну кількість клієнтів у робочі дні - ${workDaysArray.reduce(suma)}`);  
// document.write('<br>')
// // створюємо новий масив для вихідних днів
// let offDaysArray = visitors.slice(5, 7)
// // загальна кількість для вихідних
// document.write(`загальну кількість клієнтів у вихідні дні - ${offDaysArray.reduce(suma)}`);

// 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
// const namesArray = ['Sasha', 'Ivan', 'Roma', 'Kate', 'Ira', 'Ivan', 'Mak', 'Ivan', 'Ivanna', 'Oleh']
/*{function rule(x, i, arr) {
    return x === 'Ivan';
}
var newArr = namesArray.filter(rule);
let countIvan = newArr.length
document.write(countIvan)}*/

// second variant
// function kilk(result, x, i, arr) {
//     if (x === 'Ivan') { result++ };
//     return result;
// }

// alert(namesArray.reduce(kilk, 0))

// *************************************************
// 4. Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються
// випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати
// номери елементів (поки він не відмовиться). Знаходити сумарний виграш.

// // random min - max
// function getRandomMinMax(min, max) {
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random()*(max - min +1)) + min
// }
// // створюємо масив
// const randomNum = []
// const cell = 10
// function createArrRandom() {
//     for (let i = 0; i < cell; i++) {
//         randomNum.push(getRandomMinMax(-500, 500))
//     }
// }
// createArrRandom()
// document.write(`${randomNum}<br>`)

const randomNum = [10,20,30,40,50,60,70,80,90,100]

let answer = true
let score = 0
let tries = 10
let numberAnswer = []
let checkAnswerUser

document.write(`Random numbers - ${randomNum.join(' ')}`)


answer = parseInt(prompt(`Введіть від 1 до 10`))
if (answer > 0 && answer <= 10) {
    numberAnswer.push(answer)
}



// перевірка введеного числа
checkAnswerUser = numberAnswer.some(mark=>mark===numberAnswer)