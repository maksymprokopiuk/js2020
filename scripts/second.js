// =========================================
// З клавіатури вводиться кількість сторін багатокутника. Необхідно вивести
// назву фігури («трикутник», «чотирикутник», «п’ятикутинк», «шестикутник»).
// let polygon = parseInt(prompt('Введіть кількість сторін (від 3 до 6)', 4))
// switch (polygon) {
//     case 3: document.write('«трикутник»')
//         break;
//     case 4: document.write('«чотирикутник»')
//         break;
//     case 5: document.write('«п’ятикутинк»')
//         break;
//     case 6: document.write('«шестикутник»')
//         break;

//     default: document.write('Ви ввели не допустиме значення.<br>Спробуйте ще раз.')
//         break;
// }
// =========================================
// З клавіатури вводиться оцінка за екзамен n , як ціле число. Вивести на екран
// оцінку прописом (“відмінно”,“добре”,“задовільно”,“незадовільно”.
// let point = parseInt(prompt('Вкажіть оцінку', 3))
// switch (point) {
//     case 1:
//     case 2: document.write('“незадовільно”')
//         break;
//     case 3: document.write('“задовільно”')
//         break;
//     case 4: document.write('“добре”')
//         break;
//     case 5: document.write('“відмінно”')
//         break;

//     default: document.write('Ви ввели не допустиме значення.<br>Спробуйте ще раз.')
//         break;
// }
// =========================================
// З клавіатури вводиться номер місяця. Необхідно вивести кількість днів у
// цьому місяці.
// let numberOfMonth = parseInt(prompt('Введіть номер місяця'))
// switch (numberOfMonth) {
//     case 1:
//     case 3: 
//     case 5: 
//     case 7:
//     case 8: 
//     case 10:
//     case 12: document.write('31')
//         break;
//     case 2: document.write('28')
//         break;
//     case 4: 
//     case 6:
//     case 9:
//     case 11: document.write('30')
//         break;

//     default: document.write('Ви ввели не допустиме значення.<br>Спробуйте ще раз.')
//         break;
// }
// =========================================
// З клавіатури вводиться символ, що є літерою українського алфавіту.
// Визначити, якою є ця літера: голосною чи приголосною.
// let letter = prompt('Введіть літеру')
// switch (letter) {
//     case 'а':
//     case 'о':
//     case 'у':
//     case 'і':
//     case 'е':
//     case 'и': document.write('голосна')
        
//         break;

//     default: document.write('приголосна')
//         break;
// }
// =========================================
// З клавіатури вводитися символ. Визначити, чи є цей символ буквою, цифрою,
// розділовим знаком чи іншим символом.
// let symbol = prompt('Введіть символ')

// let newSymbol = symbol.charCodeAt(0)
// console.log(newSymbol);

// if (newSymbol) {
//     if (newSymbol >= 48 && newSymbol <= 57) {
//         document.write('number')
//     } else {
//         if (newSymbol >= 97 && newSymbol <= 122) {
//             document.write('letter')
//         } else {
//             switch (newSymbol) {
//                 case 32:
//                 case 33:
//                 case 34:
//                 case 39:
//                 case 40:
//                 case 41:
//                 case 44:
//                 case 45:
//                 case 46:
//                 case 47:
//                 case 58:
//                 case 59:
//                 case 63:
//                 case 182:
//                 case 8230: document.write('symbol')
//                     break;

//                 default: document.write('Ви ввели не допустиме значення.<br>Спробуйте ще раз.')
//                     break;
//             }
//         }
//     } 
// } else {
//     document.write('Ви ввели не допустиме значення.<br>Спробуйте ще раз.')
// }
// let newSymbol2 = String.fromCharCode(newSymbol)
// console.log(newSymbol2);
// =========================================
// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
// let week = parseInt(prompt('Введіть номер дня тижня', 2))
// switch (week) {
//     case 1: document.write('понеділок')
//         break;
//     case 2: document.write('вівторок')
//         break;
//     case 3: document.write('середа')
//         break;
//     case 4: document.write('четвер')
//         break;
//     case 5: document.write('п\'ятниця')
//         break;
//     case 6: document.write('субота')
//         break;
//     case 7: document.write('неділя')
//         break;

//     default: document.write('Ви ввели не допустиме значення.<br>Спробуйте ще раз.')
//         break;
// }
// =========================================
// З клавіатури вводиться номер місяця. Вивести на екран номер місяця.
// let month = parseInt(prompt('Введіть номер місяця'))
// switch (month) {
//     case 1: document.write('1 - січень')
//         break;
//     case 2: document.write('2 - лютий')
//         break;
//     case 3: document.write('3 - березень')
//         break;
//     case 4: document.write('4 - квітень')
//         break;
//     case 5: document.write('5 - травень')
//         break;
//     case 6: document.write('6 - червень')
//         break;
//     case 7: document.write('7 - липень')
//         break;
//     case 8: document.write('8 - серпень')
//         break;
//     case 9: document.write('9 - вересень')
//         break;
//     case 10: document.write('10 - жовтень')
//         break;
//     case 11: document.write('11 - листопад')
//         break;
//     case 12: document.write('12 - грудень')
//         break;

//     default: document.write('Ви ввели не допустиме значення.<br>Спробуйте ще раз.')
//         break;
// }
// =========================================
// З клавіатури вводиться номер місяця. Необхідно вивести на екран до якої пори
// року відноситься місяць
// let month = parseInt(prompt('Введіть номер місяця'))
// switch (month) {
//     case 12:
//     case 1:
//     case 2: document.write('зима')
//         break;
//     case 3:
//     case 4:
//     case 5: document.write('весна')
//         break;
//     case 6:
//     case 7:
//     case 8: document.write('літо')
//         break;
//     case 9:
//     case 10:
//     case 11: document.write('зима')
//         break;
//     default: document.write('Ви ввели не допустиме значення.<br>Спробуйте ще раз.')
//         break;
// }
// =========================================
// З клавіатури вводиться номер дня тижня. Вивести на екран є цей день робочим
// чи вихідним.
// let day = parseInt(prompt('Введіть номер дня тижня'))
// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5: document.write('робочий день')
//         break;
//     case 6:
//     case 7: document.write('вихідний день')

//     default: document.write('Ви ввели не допустиме значення.<br>Спробуйте ще раз.')
//         break;
// }
// =========================================
// З клавіатури вводиться позначення категорії («А», «В», «С») , яку вказано у
// водійському посвідченні. Вивести на екран транспортний засіб, яким може
// керувати водій.
// let vehicle = prompt('Введіть категорію («А», «В», «С»)')
// switch (vehicle) {
//     case 'C': document.write('Можете керувати - вантажним автомобілем<br>')
//     case 'B': document.write('Можете керувати - легковим автомобілем')
//         break;
//     case 'A': document.write('Можете керувати - мотоциклом')
//         break;
//     default: document.write('Ви ввели не допустиме значення.<br>Спробуйте ще раз.')
//         break;
// }
// =========================================
// З клавіатури вводиться перша літера розширення файлу («html», «doc», «jpeg»,
// «mp3», «xls»). Вивести на екран назву програми, яка може відкрити цей тип
// файлу.
// let symbol = prompt('Введіть першу літеру розширення файлу')
// switch (symbol) {
//     case 'h': document.write('Chrome')
//         break;
//     case 'd': document.write('Microsoft Word')
//         break;
//     case 'j': document.write('Photoshop')
//         break;
//     case 'm': document.write('Winamp')
//         break;
//     case 'x': document.write('Microsoft Excel')
//         break;

//     default: document.write('Ви ввели не допустиме значення.<br>Спробуйте ще раз.')
//         break;
// }
// =========================================
