//==========================ПРИКЛАДИ===========================
// 1.1. Найбільше серед двох різних замінити на 0.
// option 1
// let biggerFirst = parseInt(prompt('Введіть ціле число для First', 1))
// let biggerSecond = parseInt(prompt('Введіть ціле число для Second', 2))
// {
//     if (biggerFirst > biggerSecond)
//         document.write(`Число First було більше, а зараз дорівнює - ${biggerFirst = 0}`)
//     else
//         document.write(`Число Second було більше, а зараз дорівнює - ${biggerSecond = 0}`)
// }
// option 2
// let biggerFirst = parseInt(prompt('Введіть ціле число для First', 1))
// let biggerSecond = parseInt(prompt('Введіть ціле число для Second', 2))
// {
//     let max = biggerFirst > biggerSecond ? biggerFirst : biggerSecond
//     document.write(`Більший мав - ${max} і йому присвоюється - ${max=0}`)
// }

// 1.1.1. Найбільше серед двох замінити на 0. Якщо однакові, то замінити обидва на 1.
// let first = parseInt(prompt('First value', 2))
// let second = parseInt(prompt('Second value', 2))
// {
//     if (first > second)
//         document.write(`First was - ${first} and now is ${first = 0}`)
//     else if (first < second)
//         document.write(`Second was - ${second} and now is ${second = 0}`)
//     else
//         document.write(`First was - ${first} and Second was - ${second} but now both are ${first = 1, second = 1}`)
// }
// 1.2. З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то
// відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4
// грн.

// let price = parseFloat(prompt('Ціна товару?', 985.50))
// let money = parseFloat(prompt('Скільки грошей?', 1000))
// {
//     if (price > money)
//         document.write(`Доплатіть - ${price - money}`)
//     else if ((money - price) >= 4)
//         document.write(`Спробуйте вдачі і придбайте лотерею`)
//     else
//         document.write(`Дякуємо за покупку!`)
// }

// 1.3. Формування накладної. Вводиться назва товару, кількість, ціна і рік. Значення року вводиться
// користувачем або ж дорівнює 2017 (у випадку, якщо користувач не ввів значення). Перевірити
// коректність введених даних . У випадку некоректності вивести відповідне повідомлення.
// {
//     var product = prompt('Product title') || 'Product';
//     var year = parseInt(prompt('Year')) || 2017;
//     var count = parseInt(prompt('Count'));
//     if (count)
//         document.write(`${product} - ${year} - ${count}`);
//     else
//         document.write('Error');
// }

// Задача 2. З клавіатури вводиться назва категорії водія. Вивести на екран назву транспортного
// засобу, яким він може керувати
// {
//     let category = prompt('Введіть категорію (A B C D E)')

//     switch (category) {
//         case 'A':
//             document.write(`Можете керувати мотоциклом`)
//             break;
//         case 'B':
//             document.write(`Можете керувати автомобілем`)
//             break;
//         case 'C':
//             document.write(`Можете керувати вантажівкою`)
//             break;
//         case 'D':
//             document.write(`Можете керувати автобусом`)
//             break;
//         case 'E':
//             document.write(`Можете керувати вантажівкою з причепом`)
//             break;
//         default:
//             document.write(`Ви ввели некоректне значення`)
//             break;
//     }
// }

// Задача 2. З клавіатури вводяться два числа. Вибравши номер операції обчислити результат.
// {
//     let a = parseInt(prompt('Введіть перше число', 8))
//     let b = parseInt(prompt('Введіть друге число', 6))
//     let numberOfOperation = parseInt(prompt('Введіть номер операції\n1) додати\n2) відняти\n3) множити\n4) ділити', 1))

//     if (numberOfOperation <= 4 && numberOfOperation >= 1) {
//         if (numberOfOperation === 1)
//             document.write(`${a} + ${b} = ${a + b}`)
//         else if (numberOfOperation === 2)
//             document.write(`${a} - ${b} = ${a - b}`)
//         else if (numberOfOperation === 3)
//             document.write(`${a} * ${b} = ${a * b}`)
//         else
//             document.write(`${a} / ${b} = ${a / b}`)
//     }
//     else
//         document.write(`Ви ввели не вірне значення`)
// }

// Задача 3. Модифікувати попереднє завдання ввівши не номер операції, а саму операцію.

// {
//     let a = parseInt(prompt('Введіть перше число', 8))
//     let b = parseInt(prompt('Введіть друге число', 6))
//     let operator = prompt('Введіть операцію', '+')
    
//     switch (operator) {
//         case '+':
//             document.write(`${a + b}`)
//             break;
//         case '-':
//             document.write(`${a - b}`)
//             break;
//         case '*':
//             document.write(`${a * b}`)
//             break;
//         case '/':
//             document.write(`${a / b}`)
//             break;
//         default:
//             document.write(`Ви ввели не вірне значення`)
//             break;
//     }
// }

// 1. На роботу компаніє приймає працівників від 32 до 45 років. З клавіатури вводиться вік
// претендента. З’ясувати, чи може він бути прийнятим на роботу.
// {
//     let age = parseInt(prompt('Введіть свій вік', 40))

//     if (age >= 32 && age <= 45)
//         document.write(`work`)
//     else
//         document.write(`don't work`)
// }

// 2. З клавіатури вводиться кількість балів. Вивести на екран оцінку (задовільно, добре чи
//     відмінно).
// {
//     let points = parseInt(prompt('Введіть кількість балів від 3 до 5', 3))

//     switch (points) {
//         case 3:
//             document.write(`Задовільно`)
//             break;
//         case 4:
//             document.write(`Добре`)
//             break;
//         case 5:
//             document.write(`Відмінно`)
//             break;

//         default:
//             document.write(`Ви ввели не вірне значення`)
//             break;
//     }
// }

// 3.1. Комп’ютер випадковим чином генерує число. Вгадати, чи наступне число буде більшим чи
// меншим.
// ДОРОБИТИ!!!
    //3.1.Комп’ютер випадковим чином генерує число.
    //Вгадати, чи наступне число буде більшим чи меншим.
// {
//     let firstNumber = (Math.random() * 100)
//     let secondNumber = (Math.random() * 100)

//     if (confirm('n 1 > n 2') && firstNumber > secondNumber) {
//         document.write('Wizard<br>')
//     }
//     else {
//         document.write('Looooooser<br>');
//     }
//     document.write(`First number = ${firstNumber}<br>`);
//     document.write('Second number = ' + secondNumber);
// }

// 3.2.Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби

// let max = 5, min = 1
// let randomNumber = parseInt(Math.random()*((max+1)-min)+min)

// let guess = parseInt(prompt('Вгадайте число від 1 до 5'))

// if (guess === randomNumber)
// document.write('Вгадали')
// else
// document.write(`Не вгадали`)

// 3. З клавіатури вводяться імена двох дітей та кількість шоколадок. Вивести не екран ім’я того
// учня, у якого кількість шоколадок є більшою.

// let name1 = prompt('Як звати першу дитину?', 'Ivan')
// let totalChok1 = parseInt(prompt(`Скільки в ${name1} шоколадок?`, 10))
// let name2 = prompt('Як звати другу дитину?', 'Vasja')
// let totalChok2 = parseInt(prompt(`Скільки в ${name2} шоколадок?`, 2))

// let whoHasMoreChocolates = totalChok1 > totalChok2 ? document.write(`У ${name1} ${totalChok1} шоколадок і це більше чим у ${name2} на ${totalChok1-totalChok2}`) : document.write(`У ${name2} ${totalChok2} шоколадок і це більше чим у ${name1} на ${totalChok2-totalChok1}`)

// 4. З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку,
//     школярем, студентом, працівником, пенсіонером).

// let age = parseInt(prompt('Вкажіть вік людини'))

// if (age >= 1 && age <= 6)
//     document.write('Садочок')
// else if (age >= 7 && age <= 16)
//     document.write('Школа')
// else if (age >= 17 && age <= 23)
//     document.write('Студент')
// else if (age >= 24 && age <= 65)
//     document.write('Працівник')
// else if (age >= 66 && age <= 100)
//     document.write('Пенсіонер')
// else
//     document.write(`Не вірно введено значення`)

// 5. З клавіатури вводиться поточний час (дві змінні цілого типу: кількість годин і кількість
//     хвилин) протягом якогось із перших 3 уроків (початок о 8.30). З’ясувати, який із трьох триває урок.
// початок о 8:30 кінець 10:55
// тривалість урока 0:45
// 1 = 8:30 9:15
// перерва 5 хв до 9:19
// 2 = 9:20 10:05
// перерва 5 хв до 10:10
// 3 = 10:10 10:55
// let hours = prompt('Введіть поточний час (година) протягом якогось із перших 3 уроків (8 - 10)', 8)
// let minutes = prompt('Введіть поточний час (хвилин) протягом якогось із перших 3 уроків', 30)

// let time = parseInt(Number(hours + "." + minutes) * 3600)

// if (time >=29880 && time <=32940)
//     document.write(`Перший урок`)
// else if (time >=32941 && time <= 33119)
//     document.write(`Перерва після першого уроку`)
// else if (time >= 33120 && time <= 36180)
//     document.write(`Другий урок`)
// else if (time >=36179 && time <= 36359)
//     document.write(`Перерва після другого уроку`)
// else if (time >= 36360 && time <= 37980)
//     document.write(`Третій урок`)
// else
//     document.write('Навчання не на часі')

// 6. У двох дітей є цукерки трьох типів «Червоний мак», «Ліщина», «Білочка» (кількість кожного
//     виду цукерок у кожної дитини вводиться з клавіатури). Вивести на екран одне із повідомлень:
//     1)у однієї із дітей кожного типу цукерок більше;
//     2)у однієї із дітей двох типів цукерок більше;
//     3)кількість кожного з видів цукерок однакова.
//     4)інше.
// {
//     let redMak1 = parseInt(prompt('Дитина 1. «Червоний мак», шт?', 10))
//     let lischyna1 = parseInt(prompt('Дитина 1. «Ліщина», шт?', 10))
//     let bilochka1 = parseInt(prompt('Дитина 1. «Білочка», шт?', 12))
//     let redMak2 = parseInt(prompt('Дитина 2. «Червоний мак», шт?', 1))
//     let lischyna2 = parseInt(prompt('Дитина 2. «Ліщина», шт?', 1))
//     let bilochka2 = parseInt(prompt('Дитина 2. «Білочка», шт?', 13))

//     if (redMak1 > redMak2 && lischyna1 > lischyna2 && bilochka1 > bilochka2) {
//         document.write(`У першої дитини цукерок всіх видів більше!`)
//         document.write(`<br>${redMak1}, ${lischyna1}, ${bilochka1}<br>${redMak2}, ${lischyna2}, ${bilochka2}`)
//     }
//     else if (redMak1 < redMak2 && lischyna1 < lischyna2 && bilochka1 < bilochka2) {
//         document.write(`У другої дитини цукерок всіх видів більше!`)
//         document.write(`<br>${redMak1}, ${lischyna1}, ${bilochka1}<br>${redMak2}, ${lischyna2}, ${bilochka2}`)
//     }
//     else if (redMak1 > redMak2 && lischyna1 > lischyna2 || lischyna1 > lischyna2 && bilochka1 > bilochka2 || bilochka1 > bilochka2 && redMak1 > redMak2) {
//         document.write(`У першої дитини цукерок двох видів більше!`)
//         document.write(`<br>${redMak1}, ${lischyna1}, ${bilochka1}<br>${redMak2}, ${lischyna2}, ${bilochka2}`)
//     }
//     else if (redMak1 < redMak2 && lischyna1 < lischyna2 || lischyna1 < lischyna2 && bilochka1 < bilochka2 || bilochka1 < bilochka2 && redMak1 < redMak2) {
//         document.write(`У другої дитини цукерок двох видів більше!`)
//         document.write(`<br>${redMak1}, ${lischyna1}, ${bilochka1}<br>${redMak2}, ${lischyna2}, ${bilochka2}`)
//     }
//     else if (redMak1 === redMak2 && lischyna1 === lischyna2 && bilochka1 === bilochka2) {
//         document.write(`У дітей однакова кількість видів цукерок!`)
//         document.write(`<br>${redMak1}, ${lischyna1}, ${bilochka1}<br>${redMak2}, ${lischyna2}, ${bilochka2}`)
//     }
//     else {
//         document.write(`${redMak1}, ${lischyna1}, ${bilochka1}<br>${redMak2}, ${lischyna2}, ${bilochka2}`)
//         document.write(`<br>Не вірно введено значення`)
//     }
// }

// 7. Родина їде на відпочинок автомобілем. З клавіатури вводиться наявна кількість літрів
// палива, витрати палива на 100 кілометрів та відстань, яку необхідно подолати. Вивести на екран чи
// потрібно, чи не потрібно буде додатково заправляти автомобіль.

{
    // let fuel = parseFloat(prompt('Скільки літрів палива є в автомобілі?', 4))
    // let spendOn100 = parseFloat(prompt('Скільки літрів палива автомобіль витрачає на 100км?', 4.4))
    // let distance = parseInt(prompt('Яку відстань в км потрібно проїхати?', 224))

    // let canPassCar = fuel / spendOn100 * 100

    // if (canPassCar < distance) {
    //     var howManyFuel = (distance - canPassCar) * spendOn100 / 100
    //     document.write(`Треба дозаправити авто не менше чим на - ${(howManyFuel).toFixed(2)}л палива`)
    // }
    // else
    //     document.write('У вас достатньо палива')
}

// 8. Користувач може здійснити покупку у одному із двох відділів («побутова техніка» або
//     «інструменти»). При цьому у кожному із відділів йому будуть пропонувати один із перерахованих
//     товарів:
//     «побутова техніка»:
//     - телевізор;
//     - праска;
//     - планшет;
//     «інструменти»
//     - лопата;
//     - граблі;
//     - мітла;
//     - пила.
//     Вивести на екран назву товару, яку вибрав користувач.
// {
//     let section = confirm('Виберіть відділ натиснувши:\nOK - для «побутова техніка»\nабо\nCANCEL - для «інструменти»', 1)

//     if (section) {
//         let choiceHouseholdAppliances = parseInt(prompt('Виберіть техніку ввівши порядковий номер: \n1) - телевізор;\n2) - праска;\n3) - планшет.'))
//         switch (choiceHouseholdAppliances) {
//             case 1:
//                 document.write(`tv`)
//                 break;
//             case 2:
//                 document.write(`iron`)
//                 break;
//             case 3:
//                 document.write(`ipad`)
//                 break;

//             default:
//                 document.write('Ви ввели не коректне значення!')
//                 break;
//         }
//     }
//     else {
//         let choiceTools = parseInt(prompt('Виберіть інструмент ввівши порядковий номер: \n1) - лопата;\n2) - граблі;\n3) - мітла;\n4) - пила.'))
//         switch (choiceTools) {
//             case 1:
//                 document.write(`лопата`)
//                 break;
//             case 2:
//                 document.write(`граблі`)
//                 break;
//             case 3:
//                 document.write(`мітла`)
//                 break;
//             case 4:
//                 document.write(`пила`)
//                 break;

//             default:
//                 document.write('Ви ввели не коректне значення!')
//                 break;
//         }
//     }
// }

// =============================== ПРИКЛАДИ ОПЕРАТОР ВИБОРУ =============
// З клавіатури вводиться рейтинг користувача. 1-Профі, 2-Досвідчений, 3-Знаючий,
// 4-Початківець.
//Вивести за рейтингом рядкове представлення.
// {
//     let rate = parseInt(prompt('1-Профі, 2-Досвідчений, 3-Знаючий,4-Початківець.'))
//     switch (rate) {
//         case 1:
//             document.write('Профі')
//             break;
//         case 2:
//             document.write('Досвідчений')
//             break;
//         case 3:
//             document.write('Знаючий')
//             break;
//         case 4:
//             document.write('Початківець')
//             break;

//         default:
//             document.write('Ви ввели не коректне значення!')
//             break;
//     }
// }
// ..=========================================================
// Приклад.
// З клавіатури вводиться рейтинг користувача. 1-Профі, 2-Досвідчений, 3-Знаючий,
// 4-Початківець.
//Чи доволено робити коментарі (1, 2 -дозволено, 3,4- не дозволено)
// {
//     let rate = parseInt(prompt('1-Профі, 2-Досвідчений, 3-Знаючий,4-Початківець.'))
//     switch (rate) {
//         case 1:
//         case 2:
//             document.write('Дозволено')
//             break;
//         case 3:
//         case 4:
//             document.write('Не дозволено')
//             break;

//         default:
//             document.write('Ви ввели не коректне значення!')
//             break;
//     }
// }
// ..=========================================================
// Приклад.

// З клавіатури ввоидться номер місяця, вивести на екран пору року
// {
//     let season = parseInt(prompt('1-січень, 2-лютий, 3-березень, 4-квітень, 5-травень, 6-червень, 7-липень, 8-серпень, 9-вересень, 10-жовтень, 11-листопад, 12-грудень'))
//     switch (season) {
//         case 12:
//         case 1:
//         case 2:
//             document.write('Зима')
//             break;
//         case 3:
//         case 4:
//         case 5:
//             document.write('Весна')
//             break;
//         case 6:
//         case 7:
//         case 8:
//             document.write('Літо')
//             break;
//         case 9:
//         case 10:
//         case 11:
//             document.write('Осінь')
//             break;
        
//         default:
//             document.write('Ви ввели не коректне значення!')
//             break;
//     }
// }

// Задача 1. З клавіатури вводиться рівень доступу. Вивести на екран текстове представлення.
// 1.Аднміністратор
// 2.Менеджер
// 3.Редактор
// 4.Користувач
// {
//     let levelAccess = parseInt(prompt('Введіть рівень доступу від 1 до 4'))

//     if (levelAccess === 1)
//         document.write('Аднміністратор')
//     else if (levelAccess === 2)
//         document.write('Менеджер')
//     else if (levelAccess === 3)
//         document.write('Редактор')
//     else if (levelAccess === 4)
//         document.write('Користувач')
//     else document.write('Ви ввели не коректне значення!')
// }

// Задача 1.1. Змінити попереднє завдання вивівши «працівник», якщо це перші 3 пункти.
// {
//     let levelAccess = parseInt(prompt('Введіть рівень доступу від 1 до 4'))

//     if (levelAccess === 1 || levelAccess === 2 || levelAccess === 3)
//         document.write('Працівник')
//     else if (levelAccess === 4)
//         document.write('Користувач')
//     else document.write('Ви ввели не коректне значення!')
// }

// Задача. З використанням операторів вибору реалізувати гру «Камінь ножниці папір»
// (користувач задає свій варіант, комп’ютер генерує випадковим чином),
// {
//     let user = parseInt(prompt('1 - Камінь, 2 - Ножиці, 3 - Папір'))
//     let pc = parseInt(Math.random() * (4 - 1) + 1)

//     if (user === 1 && pc === 1)
//         document.write(`Камінь vs Камінь = нічия`)
//     else if (user === 1 && pc === 2)
//         document.write(`Камінь vs Ножиці = ви виграли`)
//     else if (user === 1 && pc === 3)
//         document.write(`Камінь vs Папір = ви програли`)
//     else if (user === 2 && pc === 1)
//         document.write(`Ножиці vs Камінь = ви програли`)
//     else if (user === 2 && pc === 2)
//         document.write(`Ножиці vs Ножиці = нічия`)
//     else if (user === 2 && pc === 3)
//         document.write(`Ножиці vs Папір = ви виграли`)

//     else if (user === 3 && pc === 1)
//         document.write(`Папір vs Камінь = ви виграли`)
//     else if (user === 3 && pc === 2)
//         document.write(`Папір vs Ножиці = ви програли`)
//     else if (user === 3 && pc === 3)
//         document.write(`Папір vs Папір = нічия`)
//     else
//         document.write('Ви ввели не коректне значення!')
// }

// додаткові задачі

// Задача 0.1. На екран виводиться меню:
// 1. Веселий
// 2. Сумний
// 3. Обурений
// Користувач вводить номер пункту меню і на екрані з’являється відповідне зображення
// смайла.
{
    // let chooseSmale = parseInt(prompt('Виберіть від 1 до 3'))
    // if (chooseSmale === 1)
    //     document.write('<img src="https://img.icons8.com/ios-glyphs/240/000000/lol.png"/>')
    // else if (chooseSmale === 2)
    //     document.write('<img src="https://img.icons8.com/ios-glyphs/240/000000/sad.png"/>')
    // else if (chooseSmale === 3)
    //     document.write('<img src="https://img.icons8.com/ios-glyphs/240/000000/evil.png"/>')
    // else
    //     document.write('<img src="https://img.icons8.com/ios-filled/240/000000/sad-ghost.png"/>')
}
//=========================================================================================
// Задача 1. Комп’ютер загадує число від 1 до 5. Дати можливість користувачу за 2 спроби
// вгадати загадане комп’ютером число.
{
    // let numberRandom = parseInt(Math.random() * (6 - 1) + 1)
    // let whatIsThisNumber = parseInt(prompt('Вгадайте число від 1 до 5', 3))

    // if (whatIsThisNumber === numberRandom)
    //     document.write('Bingo! З першрго разу!')

    // else if (whatIsThisNumber > numberRandom) {
    //     whatIsThisNumber = parseInt(prompt(`Друга спроба. Ви вказали більше число.`))
    //     if (whatIsThisNumber === numberRandom)
    //         document.write('Bingo!')
    //     else
    //         document.write(`Вам не вистачило двух спроб! Загадане число - ${numberRandom}`)
    // }
    // else if (whatIsThisNumber < numberRandom) {
    //     whatIsThisNumber = parseInt(prompt(`Друга спроба. Ви вказали менше число.`))
    //     if (whatIsThisNumber === numberRandom)
    //         document.write('Bingo!')
    //     else
    //         document.write(`Вам не вистачило двух спроб! Загадане число - ${numberRandom}`)
    // }
}
//=========================================================================================
// Задача 1.1. Комп’ютер випадковим чином вибирає початок і кінець проміжку (проміжок
//     повинен знаходитися в межах від 1 до 100). Користувач вводить число і виграє, якщо
//     число знаходиться у цьому проміжку, або розташоване від нього (від лівого або правого
//     краю) не більше ніж на 10.
{
    // let randomStart = parseInt(Math.random() * (91 - 10) + 10)
    // let randomEnd = parseInt(Math.random() * (91 - 10) + 10)
    // let x

    // if (randomStart > randomEnd) (x = randomStart, randomStart = randomEnd - 10, randomEnd = x + 10)
    // else (randomStart = randomStart - 10, randomEnd = randomEnd + 10)

    // let userNumber = parseInt(prompt('Введіть число і вгадайте проміжок в межах від 1 до 100'))
    // if (userNumber >= randomStart && userNumber <= randomEnd)
    //     document.write(`Ви програли. Діапазон був ${randomStart}-${randomEnd}, ваше число - ${userNumber}`)
    // else document.write(`Вітання!!! Діапазон був ${randomStart}-${randomEnd}, ваше число - ${userNumber}`)
}

// ============================ відправлено ==========================================================


//=========================================================================================
// Задача 2. Комп’ютер загадує число від 1 до 10. Двоє користувачів надають свої відповіді.
// Виграє той, у кого число знаходиться ближче до загаданого комп’ютером числа.
/*
let randomNumber = parseInt(Math.random()*(11-1)+1)
// let user1 = parseInt(prompt('Введіть число від 1 до 10'))
let user1 = 1
// let user2 = parseInt(prompt('Введіть число від 1 до 10'))
let user2 = 6

let userChoice1 = user1 - randomNumber
let userChoice2 = user2 - randomNumber
userChoice1 = toString(userChoice1)

console.log(`рандом ${randomNumber}, юзер1 ${user1}, юзер2 ${user2}`);
console.log(`${userChoice1} ${userChoice2}`);

// let winner = (userChoice1 < userChoice2) ? document.write(`Переміг користувач 1 (Загадане число - ${randomNumber})`) : document.write(`Переміг користувач 2 (Загадане число - ${randomNumber})`)
if (userChoice1 < userChoice2)
    document.write(`Переміг користувач 1 (Загадане число - ${randomNumber})`)
else
    document.write(`Переміг користувач 2 (Загадане число - ${randomNumber})`)

*/ // не виконано!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//=========================================================================================
// Задача 3. Морський бій. Ворожий корабель, може знаходитись в одному із квадратів
// (кількість квадратів вводиться з клавіатури), які розташовані лінійно (один за одним) на
// річці.
// Позиція корабля визначається комп’ютером випадковим чином.
// Гра відбувається за правилами:
// 1) якщо користувач стріляє у заданий квадрат (тобто вводиться номер квадрата), то
// корабель потоплено;
// 2) якщо корабель знаходиться у сусідньому по відношенню до квадрата, де знаходиться
// корабель, то корабель пошкоджено (про це повідомляємо користувача).
// За два постріли спробувати потопити корабель.

// let squares = parseInt(prompt('Введіть кількість квадратів', 5))
// let squares = 5
// Позиція корабля визначається комп’ютером випадковим чином.
// let positionBoat = parseInt(Math.random()*(6-1)+1)
// let positionBoat = 3

// let userShot = parseInt(prompt('Зробіть постріл від 1 до 5', 1))

// if (userShot === positionBoat)document.write(`Перемога!`)
// else if (userShot !== positionBoat && userShot >= 1 && userShot <= 5){ // від 1 до 5 але не загадане і промазане
    
//     if (positionBoat !== (userShot + 1) && positionBoat !== (userShot - 1)) { //мімо
//         userShot = parseInt(prompt('Мімо! У вас є другий шанс'))
//         if (userShot === positionBoat){
//             document.write(`Перемога з другої спроби!`)
//         } else if (userShot !== positionBoat && positionBoat === (userShot + 1) || positionBoat === (userShot - 1)) {
//             document.write(`Спроба 2: Ви ранили човен`)
//         } else {document.write(`Спроба 2: мімо`)}
//     }

//     else if (positionBoat === (userShot + 1) || positionBoat === (userShot - 1)) { //ранив
//         userShot = parseInt(prompt('Ранено! У вас є другий шанс'))
//         if (userShot === positionBoat){
//             document.write(`Перемога з другої спроби!`)
//         } else if (userShot !== positionBoat && positionBoat === (userShot + 1) || positionBoat === (userShot - 1)) {
//             document.write(`Спроба 2: Ви ранили човен`)
//         } else {document.write(`Спроба 2: мімо`)}
//     }
// }
// else 
// document.write('Ви ввели не коректне значення!')
// console.log(positionBoat);
//=========================================================================================
// Задача 3.1. Модифікувати попередню задачу з можливістю після пострілу переміщення
// корабля у випадковим чином вибрану сусідню клітинку (якщо звичайно корабель не було
// потоплено за першим разом).
//=========================================================================================
// Задача 3.2. Модифікувати попередню задачу таким чином, що кораблем керує користувач,
// а комп’ютер стріляє.
//=========================================================================================
// Задача 4. Полювання. Заєць знаходиться у верхньому лівому кутку поля. Поле складається
// з двох рядків і двох стовпців.
// За один крок заєць може стрибнути у будь-яку із вільних клітинок. Користувач ставить
// пастку вказуючи номер рядка і стовпця клітинки. Якщо заєць потрапляє у пастку, то
// користувач виграв і отримав 100 балів. Якщо користувач зловить зайця за другою
// спробою, то одержує 50 балів.
//=========================================================================================
// Задача 4.1. Модифікувати попередню задачу вказуючи початкову позицію зайця
// випадковим чином а також можливістю переміщення зайця після пострілу.
//=========================================================================================
// Задача 5. Гра в кості. Правила гри:
// 1) користувач може кинути кості не більше двох разів (користувач сам вирішує чи робити,
// чи не робити другий кидок);
// 2) якщо випадає парне число, то кількість балів збільшується на це число;
// 3) якщо випадає непарне число, то кількість балів зменшується на це число;
// 4) виграє той, у кого кількість балів більша.
//=========================================================================================
