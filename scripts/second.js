// document.write('Hello0 ');
// document.write('Hello1 ');
// document.write('Hello2 ');
// document.write('Hello3 ');
// document.write('Hello4 ');
// document.write('Hello5 ');
// document.write('Hello6 ');

// {
//     let a = 12;
//     const b = 99;
//     document.write(a);
//     console.log(a);
//     console.log(b);
    
// }

// var a = 10;

// document.write(a);

// console.log(b);

// let a = 5;
// let b = 7;
// let c = a + b;
// let g = c;

// document.write('gdfhgdfgh ' + g);

// let s = prompt('How old are you?','21');

// document.write(`Years ${s}`);

// let a = parseInt(prompt('hoay', 21));
// let b = parseInt(prompt('hoay', 5));
// let c = a + b;
// document.write(c)
// parseFloat

// 1 виводимо необхідні дані (вводимо кількість пачок) (вводимо кількість пачок)
// let packegeCount = parseInt(prompt('скільки пачок'));
// let packagePrice = parseFloat(prompt('вартість пачок', '32ytyty'));
// 2 обчислюємо результат
// let totalPrice = packagePrice * packegeCount;
// 3 виводимо результат
// document.write(`Загальна вартість ${totalPrice} грн`);




// let userName = prompt('Як вас звати?', 'Ivan')

// let dateOfBirth = parseInt(prompt('Якого ви року народження?', 1980))

// const USERAGE = new Date().getFullYear() - dateOfBirth

// document.write(`Шановний ${userName} Вам ${USERAGE}`)


//---=-------------------------------

// PIZZA

// let userName = prompt('Як вас звати?', 'Ivan')
// let dateOfBirth = parseInt(prompt('Якого ви року народження?', 1980))
// const USERAGE = new Date().getFullYear() - dateOfBirth
// let countPizza = parseInt(prompt('Скільки піц ви хочете замовити?', 3))
// let priceOfPizza = 135


// document.write(`

// <table border="2px">
//     <tr>
//         <td>Шановний</td>
//         <td>${userName}</td>
//     </tr>
//     <tr>
//         <td>Років</td>
//         <td>${USERAGE}</td>
//     </tr>
//     <tr>
//         <td>Кількість піц</td>
//         <td>${countPizza}</td>
//     </tr>
//     <tr>
//         <td>Вартість 1 піци</td>
//         <td>${priceOfPizza}</td>
//     </tr>
//     <tr>
//         <td>Загальна кількість</td>
//         <td>${priceOfPizza*countPizza}</td>
//     </tr>
// </table>

// `)

//-------------------------------------

// let a = 12.0000001

// let r1 = Math.round(a)
// let r2 = Math.floor(a)
// let r3 = Math.ceil(a)

// document.write(`
// r1=${r1}
// <br>
// r2=${r2}
// <br>
// r3=${r3}
// `)


//========= 13 task

// let dayNum = parseInt(prompt('Day number = '))
// let N = parseInt(prompt('Скільки пройшло днів = '))
// let resDay = (dayNum - 1 + N) % 7 + 1

// document.write(`Res day = ${resDay}`)

//========== CEZAR

// // let s = 'ABBA'
// // let code = s.charCodeAt(0)
// // document.write(`${s.charAt(0)} - ${code}`)
// // document.write('<br>')
// // document.write(`${s.charAt(1)} - ${s.charCodeAt(1)}`)

// let s = prompt('Symbol')
// let shift = parseInt(prompt('Shift = '))
// let code = s.charCodeAt(0)
// let resCode = (code-65+shift)%26+65
// let resSymbol = String.fromCharCode(resCode)
// document.write(` Res = ${resSymbol}`)