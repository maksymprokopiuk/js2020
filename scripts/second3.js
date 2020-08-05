// =======ДЗ_Функції.docx==START=====
// Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей
// місяць.
// ==COMPLETED==
// let numOfMonth = parseInt(prompt('Ввести номер місяця', 8))

// function season(a) {
//     switch (a) {
//         case 12:
//         case 1:
//         case 2: (document.write('Зима'))
//             break;
//         case 3:
//         case 4:
//         case 5: (document.write('Весна'))
//             break;
//         case 6:
//         case 7:
//         case 8: (document.write('Літо'))
//             break;
//         case 9:
//         case 10:
//         case 11: (document.write('Осінь'))
//             break;
//         default: (document.write('Не вірно введено значення'))
//             break;
//     }
// }
// season(numOfMonth)

// Задача 1. Створити функцію, яка за номером місяця повертає його назву.
// ==COMPLETED==
// let numOfMonth = parseInt(prompt('Ввести номер місяця', 8))
// function month(a) {
//     switch (a) {
//         case 1: (document.write('Січень'))
//             break;
//         case 2: (document.write('Лютий'))
//             break;
//         case 3: (document.write('Березень'))
//             break;
//         case 4: (document.write('Квітень'))
//             break;
//         case 5: (document.write('Травень'))
//             break;
//         case 6: (document.write('Червень'))
//             break;
//         case 7: (document.write('Липень'))
//             break;
//         case 8: (document.write('Серпень'))
//             break;
//         case 9: (document.write('Вересень'))
//             break;
//         case 10: (document.write('Жовтень'))
//             break;
//         case 11: (document.write('Листопад'))
//             break;
//         case 12: (document.write('Грудень'))
//             break;
//         default: (document.write('Не вірно введено значення'))
//             break;
//     }
// }
// month(numOfMonth)

// Задача 2. Створити функцію, яка за номером тижня повертає кількість уроків(так, як у вас було у
// школі).

// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.
// ==COMPLETED==
// let first = 1, second = 2, third = 3, fourth = 4
// let sumOfNumber = 0
// let dobutokOfNumber = 0
// let serZnachOfNumber = 0
// let minZnachOfNumber = 0

// function sum(a, b, c, d) {
//     return sumOfNumber = a + b + c + d
// }
// function dobutok(a, b, c, d) {
//     return dobutokOfNumber = a * b * c * d
// }
// function serZnach(a, b, c, d) {
//     return serZnachOfNumber = (a + b + c + d) / 4
// }
// function minZnach(a, b, c, d) {
//     return minZnachOfNumber = Math.min(a, b, c, d)
// }

// document.write(`сума - ${sum(first, second, third, fourth)}<br>`)
// document.write(`добуток - ${dobutok(first, second, third, fourth)}<br>`)
// document.write(`середнє значення - ${serZnach(first, second, third, fourth)}<br>`)
// document.write(`мінімальне значення - ${minZnach(first, second, third, fourth)}<br>`)

// Задача 4. Створити функцію, яка для 3 заданих чисел знаходить кількість парних.

// Задача 5. Створити функції, які переводять:
// ==COMPLETED==
// 1) Сантиметри у дюйми;
// 2) Кілограми у фунти;
// 3) Кілометри у милі.
// function santimetersInches(a) {
//     return a * 0.39370078740157
// }
// function kilogramsInPounds(a) {
//     return a * 2.2046223302272
// }
// function kilometersInMiles(a) {
//     return a * 0.62137119223733
// }
// let santimeters = parseFloat(prompt('Сантиметр в дюйм'))
// document.write(`${santimeters} сантиметрів = ${santimetersInches(santimeters).toFixed(2)} дюймів<br>`)
// let kilograms = parseFloat(prompt('Кілограми в фунти'))
// document.write(`${kilograms} кілограм = ${kilogramsInPounds(kilograms).toFixed(2)} фунтів<br>`)
// let kilometers = parseFloat(prompt('Кілометри в милі'))
// document.write(`${kilometers} кілометрів = ${kilometersInMiles(kilometers).toFixed(2)} милі`)

// ==COMPLETED==
// Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців
// let rows = parseInt(prompt('Скільки рядків?', 4))
// let columns = parseInt(prompt('Скільки стовбців?', 4))

// function table(a, b) {
//     document.write(`<table border="2px">`)
//     for (let i = 0; i < rows; i++) {
//         document.write(`<tr>`)
//         for (let j = 0; j < columns; j++) {
//             document.write(`<td>${j + 1}</td>`)
//         }
//         document.write(`</tr>`)
//     }
//     document.write(`</table>`)
// }
// table(rows, columns)

// Задача 7. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи
// до зображень передаються у функцію)
// ==COMPLETED==
// let pic
// function randomImage() {
//     pic = parseInt(Math.random()*(5-1)+1)
//     switch (pic) {
//         case 1: document.write(`<img src="https://img.icons8.com/ios-glyphs/240/000000/lol.png" alt="">`)
//             break;
//         case 2: document.write(`<img src="https://img.icons8.com/ios-glyphs/240/000000/sad.png"/>`)
//             break;
//         case 3: document.write(`<img src="https://img.icons8.com/ios-glyphs/240/000000/evil.png"/>`)
//             break;
//         case 4: document.write(`<img src="https://img.icons8.com/ios-filled/240/000000/sad-ghost.png"/>`)
//             break;
//     }
// }
// randomImage()

// Задача 8. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок 
// та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега 
// a: <a> <img src=”шлях”> </a>
// =======ДЗ_Функції.docx====END=====