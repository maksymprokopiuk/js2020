//=========================COMPLETED
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

//=========================COMPLETED
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

//==================================3
// 2. Знайти суму цифр числа, що знаходяться між першою цифрою 7 і останньою цифрою 7.
// (у числі є всього дві цифри 7)
//==================================4
// 3. Задано единственное целое число N. Необходимо вывести  все точные квадраты
// натуральных чисел, не превосходящие данного числа N.
//==========================COMPLETED
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
//=========================COMPLETED
// 5. Задача посложней. Нарисовать равнобедренный треугольник из символов ^.
// Высоту выбирает пользователь. Например: высота = 5, на экране
//         /\
//       /\/\/\
//     /\/\/\/\/\
//   /\/\/\/\/\/\/\
// /\/\/\/\/\/\/\/\/\

let heightTriangle = parseInt(prompt('Введіть кількість рядків', 5))
let o = 1
let n = heightTriangle
let v = heightTriangle
for (let i = 0; i < heightTriangle; i++) {
    for (let j = 0; j < (n-1); j++) {
        document.write('&ensp;')
    }
    n--
    for (let k = 0; k < o; k++) {
        document.write('^')
    }
    o+=2
    for (let j = 0; j < (v-1); j++) {
        document.write('&ensp;')
    }
    v--
    document.write('<br>')
}
//================????????==================7
// 6. На складе имеется определённое количество ящиков с яблоками (в нашем примере
//     15). Когда подъезжает машина для погрузки, попросить пользователя ввести, сколько
//     ящиков загрузить в первую машину,  во вторую и так далее, пока не закончатся
//     ящики с яблоками. Предусмотреть тот случай, когда пользователь введёт
//     количество ящиков больше, чем есть на складе.

// let boxes = 15
// let countTruck = 0

// do {
//     let truck = parseInt(prompt(`В наявності ${boxes} ящиків.\nСкільки ящиків загрузити\nв truck ${countTruck + 1}?`))
//     if ()
//     boxes -= truck
// } while (boxes > 0);

// document.write(`Залишилося - ${boxes} ящиків <br>`)
// document.write(`Truck 1 загружено - ${truck} ящиків`)

//==================================8
// 7. Написать программу, которая будет показывать на экран квадрат числа,
//  введенного пользователем. Пользователь должен сам решать –  выйти из программы
// или продолжить ввод. (Подсказка – необходимо запустить бесконечный цикл, в
// котором предусмотреть его прерывание, при наступлении определённого условия).
//==================================9
// 8. В спортзал ежедневно приходит какое-то количество посетителей. Необходимо
// предложить пользователю ввести такие данные: сколько человек посетило спортзал
// за день, ввести возраст каждого посетителя и в итоге показать возраст самого
// старшего и самого молодого из них, а так же посчитать средний возраст
// посетителей.
//==================================10
// 9. Коммерсант, имея стартовый капитал n рублей, занялся
// торговлей, которая увеличивает капитал на р% ежемесячно.
// Через сколько лет он накопит сумму s, достаточную для покупки
// собственного магазина?
//==================================11
// 10. Для заданного натурального числа n найти такое наименьшее
// число k, что к!>=n.
//==COMPLETED=======================
// 11. Написать программу, которая выводит на экран таблицу
// умножения на k (k вводится с клавиатуры).
// number = parseInt(prompt('Введіть число від 1 до 10'))
// for (let i = 0; i < 10; i++) {
//     document.write(`${i + 1} * ${number} = ${(i + 1) * number}<br>`)
// }
//==================================13
// 12. Найти наибольший общий делитель n натуральных чисел.
//==================================14
// 13. В учебном заведении задается начало учебного дня,
// продолжительность урока, количество уроков. Получить
// расписание звонков на весь учебный день.
//==================================15
// 14. Определить, является ли натуральное
// число Nстепенью числа 3 или нет.
//==================================16
// 15. Получить все способы расстановки пяти книг разных
// авторов.
//==================================17
// 16. Сколькими различными способами можно раскрасить
// грани куба  в четыре цвета. Напечатать возможные
// варианты.
//==================================18
// 17. Можно ли данное натуральное число представить в
// виде  суммы двух квадратов чисел.
//==================================19
// 18. Имеется n бактерий красного цвета. Через 1 такт
// времени  красная бактерия меняется на зелёную, затем
// через 1 такт  времени делится на красную и зелёную.
// Сколько будет всех  бактерий через k тактов времени?
//==================================20
// 19. Натуральное число из n цифр является ся числом
// Армстронга, т.е. сумма его цифр возведенная в
//   степень n , равна самому числу
// (153=1*1*1+5*5*5+3*3*3).Получить все числа 
// Армстронга для n=4 и n=3
//==================================21
// 20. С клавиатуры вводятся n чисел. Составьте программу, которая определяет кол-во
// отрицательных, кол-во положительных и кол-во нулей среди введеных чисел.Значение n
// вводится с клавиатуры.
//==================================22
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
//==================================23
// 22. Ввести с клавиатуры 10 пар чисел. сравнить числа в каждой паре и напечатать
// большие из них.
//==================================24
// 23. Даны натуральные числа от 20 до 50.Напечатать те из них, которые делятся на 3, но не
// делятся на 5.
//==================================25
// 24. даны натуральные числа от 35 до 87. Найти и напечатать те из них, которые при
// делении на 7 дают остаток 1, 2 или 5.
//==================================26
// 10. Даны натуральные числа от 1 до 50. Найти сумму тех из них, которые делятся на 5 или
// на 7.
//==================================27
// 11. Напечатать те из двузначных чисел которые делятся на 4, но не делятся на 6.
//==================================28
// 12. Найти произведение двузначных нечетных чисел кратных 13.
//==COMPLETED=======================
// 13. Найти сумму чисел от 100 до 200 кратных 17.
// let sum = 0
// for (let i = 100; i < 200; i = i + 17) {
//     if (i > 100 && i <= 200) {
//         sum+=i
//     }
// }
// document.write(sum)
//==================================29
// 16. В бригаде, работающей на уборке сена, имеется N сенокосилок.Первая сенокосилка
// работала m часов, а каждая следующая на 10 минут больше, чем предыдущая.Сколько
// часов проработала вся бригада?
//==================================30
// 17. В ЭВМ вводятся по очереди данные о росте N учащихся класса. Определить средний
// рост учащихся класса.
//==================================31
// 18. Задано натуральное число N. Найти количество натуральных чисел, не превосходящих
// N и не делящихся ни на одно из чисел 2,3,5.
//==================================32
// 19. Два двузначных числа, записанных одно за другим , образуют четырёхзначное число,
// которое делится на их произведение. Найти эти числа.
//==================================33
// 20. даны два двузначных числа А и В. Из этих чисел составили 2 четырехзначных числа:
// первое число получили путем написания сначала числа А, затем В. Для получения второго
// числа сначала записали число В, затем А. Найти числа А и В если известно , что первое
// четырехзначное число нацело делится на 99, а второе на 49.
//==================================34
// 27. У первокласника пети m рублей.Мороженое стоит k рублей. Петя решил наесться
// досыта мороженого, для этого он покупал по одному мороженому и съедал его до тех пор,
// пока ему хватало денег. Как пете узнать, сколько денег останется у него в конце концов?
// учтите, что петя делить еще не умеет, а умеет только вычитать и складывать. сколько
// мороженых он может съесть?.
//==================================35
// 31. Имеется кусок ткани длинной M метров. От него последовательно отрезаются куски
// разной длины. Все данные по использованию ткани заносятся в компьютер. Компьютер
// должен выдать сообщение о том, что материала не хватает, если будет затребован кусок
// ткани больше длины, чем имеется.
//==COMPLETED=======================
// 13. Начав тренировки, спортсмен в первый день пробежал 10 км. Каждый день он
// увеличивал дневную норму на 10% нормы предыдущего дня.
// • Какой суммарный путь пробежит спортсмен за 7 дней?
// • В какой день впервые спортсмен пробежит более 20 км?
// • В какой день впервые суммарный путь превысит 60 км?

// let distance = 10
// let percent = 10
// let total = 0
// for (let i = 0; i < 10; i++) {
//     // document.write(`${i+1} day ${distance.toFixed(2)}<br>`)
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

//==================================37
// 14. Составить программу, определяющую, является ли данное число N простым
//==================================38
// 15. Дано целое число N (> 1). Найти наименьшее целое число K, при котором выполняется
// неравенство 3K > N.
//==================================39
// 16. С клавиатуры вводятся числа и последовательно суммируются. Найти количество
// введенных чисел, когда их сумма превысила 100.
//==================================40
// 17. Дано целое число N (> 0). Используя операции деления нацело и взятия остатка от
// деления, найти количество и сумму его цифр.
//==================================41
// 18. Дано целое число N (> 0). С помощью операций деления нацело и взятия остатка от
// деления определить, имеется ли в записи числа N цифра «2». Если имеется, то вывести
// True, если нет — вывести False.
//==================================42
// 19. Дано целое число N (> 0). С помощью операций деления нацело и взятия остатка от
// деления определить, имеются ли в записи числа N нечетные цифры. Если имеются, то
// вывести True, если нет — вывести False.
//==================================43
// 20. Спортсмен-лыжник начал тренировки, пробежав в первый день 10 км. Каждый
// следующий день он увеличивал длину пробега на P процентов от пробега предыдущего
// дня (P — вещественное, 0 < P < 50). По данному P определить, после какого дня
// суммарный пробег лыжника за все дни превысит 200 км, и вывести найденное количество
// дней K (целое) и суммарный пробег S (вещественное число).
//==================================