// =======ДЗ_Функції.docx==START=====
// Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей
// місяць.

// Задача 1. Створити функцію, яка за номером місяця повертає його назву.

// Задача 2. Створити функцію, яка за номером тижня повертає кількість уроків(так, як у вас було у
// школі).

// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.

// Задача 4. Створити функцію, яка для 3 заданих чисел знаходить кількість парних.

// ==COMPLETED==
// Задача 5. Створити функції, які переводять:
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

// Задача 8. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок 
// та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега 
// a: <a> <img src=”шлях”> </a>
// =======ДЗ_Функції.docx====END=====