// Завдання для циклів ХОРОШІ.doc
// =============================01
// ======================COMPLETED
// 0. Вивести на екран
// A B C D E
// B C D E F
// C D E F G
// D E F G H
// E F G H I
// for (let i = 0; i < 5; i++) {
//     document.write(`${String.fromCharCode(i+65)} `)
//     for (let j = 0; j < 1; j++) {
//         document.write(`${String.fromCharCode(i+66)} `)
//         for (let j = 0; j < 1; j++) {
//             document.write(`${String.fromCharCode(i+67)} `)
//             for (let j = 0; j < 1; j++) {
//                 document.write(`${String.fromCharCode(i+68)} `)
//                 for (let j = 0; j < 1; j++) {
//                     document.write(`${String.fromCharCode(i+69)} `)
//                 }
//             }
//         }
//     }
//     document.write('<br>')
// }
// =============================02
// ======================COMPLETED
// 1. З клавіатури вводяться числа до тих пір, поки послідовність є зростаючою або спадною.
// let a = parseInt(prompt('Введіть ціле число'))
// let b = parseInt(prompt('Введіть більше або менше ціле число'))
// if (a < b) {
//     while (a < b) {
//         a = b
//         b = parseInt(prompt(`Введіть більше ціле число за ${a}`))
//     }
//     document.write('Треба вводити більше значення за попереднє')
// } else if (a > b) {
//     while (a > b) {
//         a = b
//         b = parseInt(prompt(`Введіть менше ціле число за ${a}`))
//     }
//     document.write('Треба вводити менше значення за попереднє')
// } else {
//     document.write('Ви ввели однакові числа')
// }
// =============================03
// 2. Знайти суму цифр числа, що знаходяться між першою цифрою 7 і останньою цифрою 7.
// (у числі є всього дві цифри 7)
// =============================04
// 3. Задано единственное целое число N. Необходимо вывести  все точные квадраты
// натуральных чисел, не превосходящие данного числа N.
// =============================05
// ======================COMPLETED
// 4. Необходимо суммировать все  нечётные целые числа в диапазоне, который введёт
// пользователь с клавиатуры.
// let startNumb = parseInt(prompt('Введіть число', 10))
// let finishNumb = parseInt(prompt('Введіть число', 30))
// let sum = 0
// for (startNumb; startNumb <= finishNumb; startNumb++) {
//     if ((startNumb%2) === 1) {
//         sum+=startNumb
//     }
// }
// document.write(sum)
// =============================06
// ======================COMPLETED
// 5. Задача посложней. Нарисовать равнобедренный треугольник из символов ^.
// Высоту выбирает пользователь. Например: высота = 5, на экране
// let heightTriangle = parseInt(prompt('Введіть кількість рядків', 5))
// let o = 1
// let n = heightTriangle
// let v = heightTriangle
// for (let i = 0; i < heightTriangle; i++) {
//     for (let j = 0; j < (n-1); j++) {
//         document.write('&ensp;')
//     }
//     n--
//     for (let k = 0; k < o; k++) {
//         document.write('^')
//     }
//     o+=2
//     for (let j = 0; j < (v-1); j++) {
//         document.write('&ensp;')
//     }
//     v--
//     document.write('<br>')
// }
// =============================07
// 6. На складе имеется определённое количество ящиков с яблоками (в нашем примере
// 15). Когда подъезжает машина для погрузки, попросить пользователя ввести, сколько
// ящиков загрузить в первую машину,  во вторую и так далее, пока не закончатся
// ящики с яблоками. Предусмотреть тот случай, когда пользователь введёт
// количество ящиков больше, чем есть на складе.
// =============================08
// 7. Написать программу, которая будет показывать на экран квадрат числа,
//  введенного пользователем. Пользователь должен сам решать –  выйти из программы
// или продолжить ввод. (Подсказка – необходимо запустить бесконечный цикл, в
// котором предусмотреть его прерывание, при наступлении определённого условия).
// =============================09
// 8. В спортзал ежедневно приходит какое-то количество посетителей. Необходимо
// предложить пользователю ввести такие данные: сколько человек посетило спортзал
// за день, ввести возраст каждого посетителя и в итоге показать возраст самого
// старшего и самого молодого из них, а так же посчитать средний возраст
// посетителей.
// =============================10
// 9. Коммерсант, имея стартовый капитал n рублей, занялся
// торговлей, которая увеличивает капитал на р% ежемесячно.
// Через сколько лет он накопит сумму s, достаточную для покупки
// собственного магазина?
// =============================11
// 10. Для заданного натурального числа n найти такое наименьшее
// число k, что к!&gt;=n.
// =============================12
// ======================COMPLETED
// 11. Написать программу, которая выводит на экран таблицу
// умножения на k (k вводится с клавиатуры).
// number = parseInt(prompt('Введіть число від 1 до 10'))
// for (let i = 0; i < 10; i++) {
//     document.write(`${i + 1} * ${number} = ${(i + 1) * number}<br>`)
// }
// 12. Найти наибольший общий делитель n натуральных чисел.
// =============================13
// 13. В учебном заведении задается начало учебного дня,
// продолжительность урока, количество уроков. Получить
// расписание звонков на весь учебный день.
// =============================14
// 14. Определить, является ли натуральное
// число Nстепенью числа 3 или нет.
// =============================15
// 15. Получить все способы расстановки пяти книг разных
// авторов.
// =============================16
// 16. Сколькими различными способами можно раскрасить
// грани куба  в четыре цвета. Напечатать возможные
// варианты.
// =============================17
// 17. Можно ли данное натуральное число представить в
// виде  суммы двух квадратов чисел.
// =============================18
// 18. Имеется n бактерий красного цвета. Через 1 такт
// времени  красная бактерия меняется на зелёную, затем
// через 1 такт  времени делится на красную и зелёную.
// Сколько будет всех  бактерий через k тактов времени?
// =============================19
// 19. Натуральное число из n цифр является ся числом
// Армстронга, т.е. сумма его цифр возведенная в
//   степень n , равна самому числу
// (153=1*1*1+5*5*5+3*3*3).Получить все числа 
// Армстронга для n=4 и n=3
// =============================20
// 20. С клавиатуры вводятся n чисел. Составьте программу, которая определяет кол-во
// отрицательных, кол-во положительных и кол-во нулей среди введеных чисел.Значение n
// вводится с клавиатуры.
// =============================21
// 21. Составьте программы перевода старинных русских мер длины, торгового и
// аптекарского веса(счетчик цикла от 1 до 10)
// * саженей в метры(1 сажень равна 2,1366 м)
// * из дюймов в сантиметры(1 дюйм равен 2,5 см)
// * футов в метры(1 фут равен 0,3048 м)
// * драхм в граммы(1 драхма равна 3,7325 г)
// * унций в граммы(1 унция равна 29,86 г)
// * фунтов в килограммы(1 фунт равен 0,40951 кг)
// * аршинов в метры(1 аршин равен 0,7112 м)
// * золотников в граммы(1 золотник равен 4,2657 г)
// * дюймов в миллиметры(1 дюйм равен 25,3995 мм)
// =============================22
// 22. Ввести с клавиатуры 10 пар чисел. сравнить числа в каждой паре и напечатать
// большие из них.
// =============================23
// 23. Даны натуральные числа от 20 до 50.Напечатать те из них, которые делятся на 3, но не
// делятся на 5.
// =============================24
// 24. даны натуральные числа от 35 до 87. Найти и напечатать те из них, которые при
// делении на 7 дают остаток 1, 2 или 5.
// =============================25
// 10. Даны натуральные числа от 1 до 50. Найти сумму тех из них, которые делятся на 5 или
// на 7.
// =============================26
// 11. Напечатать те из двузначных чисел которые делятся на 4, но не делятся на 6.
// =============================27
// 12. Найти произведение двузначных нечетных чисел кратных 13.
// =============================28
// ======================COMPLETED
// 13. Найти сумму чисел от 100 до 200 кратных 17.
// let sum = 0
// for (let i = 100; i < 200; i = i + 17) {
//     if (i > 100 && i <= 200) {
//         sum+=i
//     }
// }
// document.write(sum)
// =============================29
// 16. В бригаде, работающей на уборке сена, имеется N сенокосилок.Первая сенокосилка
// работала m часов, а каждая следующая на 10 минут больше, чем предыдущая.Сколько
// часов проработала вся бригада?
// =============================30
// 17. В ЭВМ вводятся по очереди данные о росте N учащихся класса. Определить средний
// рост учащихся класса.
// =============================31
// 18. Задано натуральное число N. Найти количество натуральных чисел, не превосходящих
// N и не делящихся ни на одно из чисел 2,3,5.
// =============================32
// 19. Два двузначных числа, записанных одно за другим , образуют четырёхзначное число,
// которое делится на их произведение. Найти эти числа.
// =============================33
// 20. даны два двузначных числа А и В. Из этих чисел составили 2 четырехзначных числа:
// первое число получили путем написания сначала числа А, затем В. Для получения второго
// числа сначала записали число В, затем А. Найти числа А и В если известно , что первое
// четырехзначное число нацело делится на 99, а второе на 49.
// =============================34
// 27. У первокласника пети m рублей.Мороженое стоит k рублей. Петя решил наесться
// досыта мороженого, для этого он покупал по одному мороженому и съедал его до тех пор,
// пока ему хватало денег. Как пете узнать, сколько денег останется у него в конце концов?
// учтите, что петя делить еще не умеет, а умеет только вычитать и складывать. сколько
// мороженых он может съесть?.
// =============================35
// 31. Имеется кусок ткани длинной M метров. От него последовательно отрезаются куски
// разной длины. Все данные по использованию ткани заносятся в компьютер. Компьютер
// должен выдать сообщение о том, что материала не хватает, если будет затребован кусок
// ткани больше длины, чем имеется.
// =============================36
// ======================COMPLETED
// 13. Начав тренировки, спортсмен в первый день пробежал 10 км. Каждый день он
// увеличивал дневную норму на 10% нормы предыдущего дня.
// • Какой суммарный путь пробежит спортсмен за 7 дней?
// • В какой день впервые спортсмен пробежит более 20 км?
// • В какой день впервые суммарный путь превысит 60 км?
// let distance = 10
// let percent = 10
// let total = 0
// for (let i = 0; i < 10; i++) {
//     total += distance
//     distance += distance * 10 / 100

//     if (i === 6) {
//         document.write(`Total 7 days - ${total.toFixed(2)}<br>`)
//     }
//     if (distance > 20 && distance < 22) {
//         document.write(`Дистанція більше 20 км в - ${i + 2} день<br>`)
//     }
//     if (total >= 60 && total < 62) {
//         document.write(`Дистанцію перевищено в 60 км на ${i + 2} день<br>`)
//     }
// }
// =============================37
// 14. Составить программу, определяющую, является ли данное число N простым
// =============================38
// 15. Дано целое число N (&gt; 1). Найти наименьшее целое число K, при котором выполняется
// неравенство 3K &gt; N.
// =============================39
// 16. С клавиатуры вводятся числа и последовательно суммируются. Найти количество
// введенных чисел, когда их сумма превысила 100.
// =============================40
// 17. Дано целое число N (&gt; 0). Используя операции деления нацело и взятия остатка от
// деления, найти количество и сумму его цифр.
// =============================41
// 18. Дано целое число N (&gt; 0). С помощью операций деления нацело и взятия остатка от
// деления определить, имеется ли в записи числа N цифра «2». Если имеется, то вывести
// True, если нет — вывести False.
// =============================42
// 19. Дано целое число N (&gt; 0). С помощью операций деления нацело и взятия остатка от
// деления определить, имеются ли в записи числа N нечетные цифры. Если имеются, то
// вывести True, если нет — вывести False.
// =============================43
// 20. Спортсмен-лыжник начал тренировки, пробежав в первый день 10 км. Каждый
// следующий день он увеличивал длину пробега на P процентов от пробега предыдущего

// дня (P — вещественное, 0 &lt; P &lt; 50). По данному P определить, после какого дня
// суммарный пробег лыжника за все дни превысит 200 км, и вывести найденное количество
// дней K (целое) и суммарный пробег S (вещественное число).
// ============================END

// =========завдання для циклів хороші.doc=========END

// ЦИКЛИ 2
// цикли while do while.doc

// 1. З клавіатури вводитяться числа поки не буде введено 0. Знайти суму чисел.
// 2.З клавіатури вводитяться числа поки не буде введено 0. Знайти добуток чисел.
// 2.1. З клавіатури поступово вводяться символи поки не буде введено символ «а». Вивести рядок
// символів у зворотному порядку.
// 3. З клавіатури вводиться початкове знчення суми. Поки сума є меншою за 100 додавати до неї
// числа, які вводяться з клавіатури.
// 4. З клавіатури поступово вводяться числа. Знайти суму перших N парних чисел.

// 4.1. З клавіатури вводяться два числа N i M (N&lt;M). Вивести а екран числа
// N---M
// N+1 --- M-1
// N+2 --- M-2
// N+3 --- M-3
// . . . . . .
// Виведення завершити коли число справа стане меншим за число зліва.
// 5. На екрані виводиться меню:
// 1. Сказати «Привіт».
// 2. Сказати «Зачекай».
// 3. Сказати «До побачення».
// 4. Вихід.
// Шляхом вибору пунктів меню виводити відповідні повідомлення, поки не буде вибрано пункт
// номер 4.

// 6. На екрані виводиться меню:
// 1.Ініціалізація (сума=0)
// 2.Додати 2
// 3.Додати 3
// 4.Відняти 2
// 5.Відняти 3.
// 6.Вивести суму
// 7.Вихід.
// Шляхом поступового вибору відповідних пунктів спробувати отримати число N, яке вводиться з
// клавіатури.
// 7. Користувач загадує натуральне число від 1 до N. Шляхом задавання мінімальної кількості
// запитань знайти вказане число (застосувати бінарний пошук, на кожному кроці якого інтервал
// пошуку зменшується на 2 шляхом порівняння з елементом, який знаходиться у центрі поточного
// інтервалу).
// 8. З клавіатури вводиться число. Знаходити суму цифр до тих пір. Поки сума не стане більшую за
// 20.
// 9.З клавіатури вводиться пароль (правильний пароль- 78). Поки пароль не вірний дати можливість
// користувачу повторно ввести його.
// 10.З клавіатури вводиться вартість одиниці товару. Поки користувач не введе суму грошей, яка
// достатня для купівлі товару або не відмовиться від купівлі давати можливість вводити суму
// грошей.
// 11. Комп’ютер загадує випадкове число від 1 до 10. Вгадати число шляхом введеня можливих
// варіантів. В кінці вивести кількість спроб користувача.
// 11.1. Комп’ютер загадує два випадкових числа від 1 до 10. Вгадати обидва числа шляхом введеня
// можливих варіантів. В кінці вивести кількість спроб користувача.
// 12. З клавіатури вводяться поступово числа. Знайти два найбільші числа. Ввід здійснюється до тих
// пір, поки різниця між такими числами є більшою за 5.
// 13. З клавіатури вводяться поступово числа. Знайти два найменші числа. Ввід здійснюється до тих
// пір, поки різниця між такими числами є більшою за 5.
// 14. Виводити на екран біжучий рядок поки не буде натиснуто на деяку клавішу.
// 15. Морський бій. Комп’ютер випадковим чином розміщує одиночний корамель на полі 5*5. З
// клавіатури поступово вводяться координати пострілу поки корабель не буде потоплено.
// Спробуйте відоразити гру графічно.
// 16. Тир. На полі з 10 клітинок розміщують зайця. За один крок заєць може стрибати на відстань від
// 0 до 3 позицій у будь-якому напрямку. З клавіатури вводиться позиція пострілу. Гра продовжується
// поки у користувача не закінчаться патрони (кількість вводиться з клавіатури) або не буде
// влучання. Спробуйте відоразити гру графічно.
// 17. Танчики. На полі з 10 клітинок розміщують танк. За один крок танк може переміщуватися на
// відстань від 0 до 1 у будь-якому напрямку (в межах поля). При влучанні броня танка
// пошкоджується на 30 балів (всього 100). Гра продовжується поки або не закінчаться снаряди
// (кількість вводиться з клавіатури) або не буде влучання. Спробуйте відоразити гру графічно.
// 17.1.Спробуйте модифікувати попередню гру для випадку, коли танк також може стріляти по
// вашій гарматі (ваша гармата також знаходиться на цьому ж полі).

// цикли while do while.doc====END



// цикли ДЗ while.doc
// цикли ДЗ while.doc====END

