// document.write(`<table border="2px">
//                 <tr>`)

// for (let i = 0; i < 7; i++) {

//     document.write(`<td>${i + 1}</td>`)
// }
// document.write(`
//             </tr>
//             </table>
// `)


//======================================

// var usersCount = parseInt(prompt('Кількість користувачів'));
// document.write('<form>');
// for (var i = 1; i <= usersCount; i++) {
//     document.write('<div>');
//     document.write('<p>Ім\'я користувача ' + i + ' <input type=\'text\'> </p>');
//     document.write('<p>Пароль користувача ' + i + ' <input type=\'password\'> </p>');
//     document.write('<hr>');
//     document.write('</div>');
// }
// document.write('</form>');

//======================================

// document.write('<table border="2px">');
// document.write('<tr>');
// for (var i = 1; i <= 10; i += 3) {
//     document.write('<td>');
//     document.write(i);
//     document.write('</td>')
// }
// document.write('</tr>');
// document.write('</table>');

//======================================
// let sum = 0
// while (sum < 100) {
//     sum += parseInt(prompt('number=', 0))
// }
//======================================
// let i = 6
// while (i <= 28) {
//     document.write(i)
//     document.write('<br>')
//     i+=3    
// }
//======================================
// let i = 5
// while (i > 0) {
//     alert(i--)    
// }
// alert('BOOM!')
//======================================
// let usersCount = parseInt(prompt('Кількість користувачів'))
// document.write('<form>')
// let i = 1
// do {
//     document.write('<div>');
//     document.write('<p>Ім\'я користувача ' + i + ' <input type=\'text\'> </p>');
//     document.write('<p>Пароль користувача ' + i + ' <input type=\'password\'> </p>');
//     document.write('<hr>');
//     document.write('</div>');
//     i++
// } while (i <= usersCount)
// document.write('</form>');
//======================================
// do {
//     var a = Math.floor(Math.random()*100)
//     var b = parseInt((Math.random()*100).toFixed(0))
//     var res = parseInt(prompt(`${a}+${b}=`))
// } while (a + b != res);
// alert('ok')

//=================ПРИКЛАДИ=====================
// Задача 1. Вивести на екран рядок тексту
// а а. . . а с с . . . с
// У рядку 37 букв «а» і 10 букв «с»
// for (let i = 0; i < 37; i++) {
//     document.write('a')
// }
// for (let k = 0; k < 10; k++) {
//     document.write('c')
// }
// document.write('<br>')
//======================================
// Задача 1.1. Вивести на екран
// 000000000000000000000
// 000000000000000000000
// 000000000000000000000
// 000000000000000000000
// 000000000000000000000
// 000000000000000000000
// 000000000000000000000
// ================================
// for (let i = 0; i < 7; i++) {
//     for (let k = 0; k < 25; k++) {
//         document.write(`0`)
//     }
//     document.write(`<br>`)
// }
// for (let i = 0; i < 32; i++) {
//     document.write(`=`)
// }
//======================================
// Задача 2. Вивести на екран таблицю
// -------
// | | | |
// -------
// | | | |
// -------
// | | | |
// -------
//======================================
// for (let i = 0; i < 7; i++) {
//     document.write(`-`)
// }
// document.write(`<br>`)
// for (let k = 0; k < 1; k++) {
//     document.write(`|&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;|`)
//     document.write(`<br>`)
// }
// for (let i = 0; i < 7; i++) {
//     document.write(`-`)
// }
// document.write(`<br>`)
// for (let k = 0; k < 1; k++) {
//     document.write(`|&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;|`)
//     document.write(`<br>`)
// }
// for (let i = 0; i < 7; i++) {
//     document.write(`-`)
// }
// document.write(`<br>`)
// for (let k = 0; k < 1; k++) {
//     document.write(`|&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;|`)
//     document.write(`<br>`)
// }
// for (let i = 0; i < 7; i++) {
//     document.write(`-`)
// }
//======================================
// Задача 3. Вивести на екран
// 00 00 00 00 00 00 00
// -- -- -- -- -- -- --
// \/ \/ \/ \/ \/ \/ \/
// 00 00 00 00 00 00 00
// -- -- -- -- -- -- --
// \/ \/ \/ \/ \/ \/ \/
// 00 00 00 00 00 00 00
// -- -- -- -- -- -- --
// \/ \/ \/ \/ \/ \/ \/

// for (let i = 0; i < 3; i++) {
//     for (let k = 0; k < 7; k++) {
//         document.write(`00&nbsp;`)
//     }
//     document.write(`<br>`)
//     for (let r = 0; r < 7; r++) {
//         document.write(`---&nbsp;`)
//     }
//     document.write(`<br>`)
//     for (let r = 0; r < 7; r++) {
//         document.write(`\\/&nbsp;&nbsp;&nbsp;`)
//     }
//     document.write(`<br>`)
// }
//======================================
