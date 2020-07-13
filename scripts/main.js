// exemples

// Задача. Користувач вводить ім’я. Вивести привітання.
{
    let userName = prompt('Як тебе звати', 'Іван')
    let userSecondName = prompt('Прізвище', 'Білий')
    document.write('Привіт ' + userName + ' ' + userSecondName)
}
// Задача. Користувач вводить два числа. Знайти суму, різницю, добуток, частку.
{
    let number1 = parseInt(prompt('Введіть перше число'))
    let number2 = parseInt(prompt('Введіть друге число'))
    // -------- sum
    let sum = number1 + number2;
    document.write('Sum = ' + sum);
    //-------- difference
    let diff = number1 - number2;
    document.write('Різниця = ' + diff)
    //------- Добуток
    let product = number1 * number2
    document.write('Добуток = ' + product)
    //------- Частка
    let divv = number1 / number2
    document.write('Ділення = ' + divv)
}

/* checked 12.07.2020
1. Дано ширину екрана та кількість елементів, які повинні бути відображені у рядку. 
Визначити ширину елементів, які повинні бути відображені у цьому рядку.
*/

{
    let widthScreen = parseInt(prompt('Яка ширина екрана?', 1024))
    let numberOfElements = parseInt(prompt('Яка кількість елементів?', 12))
    let widthElement = widthScreen / numberOfElements

    document.write(`Ширина одного елемента - ${widthElement.toFixed(2)}`)
}

/* checked 12.07.2020
2. З клавіатури вводиться розмір заробітної плати та розмір прожиткового
мінімуму. Визначити розмір соціальної допомоги (ввжаємо, що заробітна
плата є меншою).
*/

{
    let whatSalary = parseFloat(prompt('Вкажіть який розмір заробітної плати', 673.53))
    let costOfLiving = parseFloat(prompt('Який прожитковий мінімум', 750))
    let differenceOfSalary = costOfLiving - whatSalary

    if (differenceOfSalary > 0) {
        document.write(`Ваша соціальна допомога становить - ${differenceOfSalary.toFixed(2)}грн`)
    } else {
        document.write('Вам соціальна допомога не потрібна')
    }
}

/* checked 12.07.2020
3. З клавіатури вводяться вартість одиниці та кількість одиниць двох товарів.
Вивести на екран вартість кожного з видів товарів окремо і загальну
вартість.
*/

{
    let priceOfGoods1 = parseInt(prompt('Яка вартість ТОВАР_1?', 23.50))
    let numberOfGoods1 = parseInt(prompt('Яка кількість ТОВАР_1?', 121))
    let priceOfGoods2 = parseInt(prompt('Яка вартість ТОВАР_2?', 43.12))
    let numberOfGoods2 = parseInt(prompt('Яка кількість ТОВАР_2?', 67))
    let totalPriceOfGoods1 = priceOfGoods1 * numberOfGoods1
    let totalPriceOfGoods2 = priceOfGoods2 * numberOfGoods2
    let totalPriceBothGoods = totalPriceOfGoods1 + totalPriceOfGoods2

    alert(`Загальна вартість ТОВАР_1 - ${totalPriceOfGoods1}грн, \nЗагальна вартість ТОВАР_2 - ${totalPriceOfGoods2}грн, \nЗагальна вартість обох - ${totalPriceBothGoods}грн`)
}

/* checked 12.07.2020
4. З клавіатури вводиться вік дитини. Вивести на екран через скільки років
вона буде відвідувати садочок, піде у школу, закінчить школу, вступить і
закінчить університет
*/

{
    let yearsOfChild = parseInt(prompt('Скільки років дитині?', 0))
    let startKinderGarden = 3
    let startSchool = 7
    let startHighSchool = 17
    let finishSchool = 16
    let finishHighSchool = 23

    document.write(`В садочок через ${startKinderGarden - yearsOfChild} р`)
    document.write('<br>')
    document.write(`В школу через ${startSchool - yearsOfChild} р, закінчить через ${finishSchool - yearsOfChild} р`)
    document.write('<br>')
    document.write(`В ВНЗ через ${startHighSchool - yearsOfChild} р, закінчить через ${finishHighSchool - yearsOfChild} р`)
}

/*
5. Визначити, яку платню одержить на фірмі сумісник за виконану роботу,
якщо йому нараховано S грн., а податок становить 20%.
*/

{
    let sallaryBrutto = prompt('ЗП', 1000)
    let sallaryNetto = sallaryBrutto - (sallaryBrutto / 100 * 20)
    document.write(`Буде нараховано - ${sallaryNetto}`)
}

/*
6. Дано три дійсні змінні a, b і c. Скласти алгоритм, який міняє місцями
значення цих змінних наступним чином: змінна a набуває значення
змінної b, змінна b набуває значення змінної c, а змінна c – попереднє
значення змінної a.
*/

{
    let a = parseFloat(prompt('Введіть знічення А', 1))
    let b = parseFloat(prompt('Введіть знічення B', 2))
    let c = parseFloat(prompt('Введіть знічення C', 3))

    let aB = b
    let bC = c
    let cA = a

    document.write(`A = ${aB}`)
    document.write('<br>')
    document.write(`B = ${bC}`)
    document.write('<br>')
    document.write(`C = ${cA}`)
    document.write('<br>')
    
}

/*
7
*/

/*
8. Розробити програму, яка за номером року Y визначає номер століття C
(врахувати, що початком XX століття був 1901, а не 1900 рік).
*/

{
    let year = parseFloat(prompt('Вкажіть рік', 1850))

    year = year - 1
    let century = year / 100

    document.write(`Століття - ${parseInt(century) + 1}`)
}

/*
9. Скласти програму для розв’язування задачі: йде N-а секунда суток,
визначити скільки повних годин і повних хвилин пройшло до цього
моменту.
*/

{
    let secondsOfDay = parseInt(prompt('Вкажіть кількість секунд', 18000))

    let minutesOfDay = secondsOfDay / 60
    let hoursOfDay = minutesOfDay / 60

    document.write(`${secondsOfDay} секунд складається з ${Math.floor(minutesOfDay)} хвилин або ${Math.floor(hoursOfDay)} годин`)
}

/*
10. З клавіатури вводиться кількість монет номіналом 1 копійка. Визначити
скільки гривень і копійок є у даній сумі . Наприклад, дано 245 копійок, а
вивести 2 грн 45 копійок.
*/

{
    let sumOfCoins = parseInt(prompt('Введіть монети', 245))

    let hrn = sumOfCoins / 100
    let hrnWithoutCoins = parseInt(hrn)
    let kop = hrn - hrnWithoutCoins
    let kopWithoutCoins = kop.toFixed(2) * 100

    document.write(`${hrnWithoutCoins}грн ${kopWithoutCoins}копійок`)
}

/*
11. З клавіатури вводиться кількість монет номіналом 2 копійки (5коп, 25коп,
50 коп). Визначити скільки гривень і копійок є у даній сумі.
*/

{
    let coin2 = 2
    let coin5 = 5
    let coin25 = 25
    let coin50 = 50
    
    let coins = parseInt(prompt(`Введіть кількість монет номіналом ${coin2} копійки`, 100))

    document.write(`${(coins * coin2) / 100}грн`)
}

/*
12. Визначити скільки повних тижнів є у вказаній кількості днів.
*/

{
    let days = parseInt(prompt('Вкажіть кількість днів', 365))

    let weeks = days / 7
    weeks = parseInt(weeks)

    document.write(weeks)

}

/*
14. З клавіатури вводиться кількість місяців, які пройшли від деякого
моменту часу. Вивести повну кількість років і місяців. Наприклад, дано 28
місяців, а вивести 2 роки і 4 місяці.
*/

{
    let months = parseInt(prompt('Вкажіть кількість місяців', 28))

    let yearsPassed = months / 12 
    yearsPassed = parseInt(yearsPassed)
    let monthsPassed = yearsPassed
    monthsPassed = months - monthsPassed.toFixed() * 12

    document.write(`${yearsPassed}роки і ${monthsPassed}місяці`)
}

// 15. З клавіатури вводиться номер місяця. Визначити, який буде місяць через
// вказану кількість N місяців.
{
    let numberOfMonth = parseInt((prompt('Введіть номер місяця від 1 до 12', 10))) //10
    let countOfMonth = parseInt((prompt('Введіть кількість місяців', 4))) //4

    let allMonths = (numberOfMonth + countOfMonth)

    let years = parseInt(allMonths / 12)

    let thisMonth = allMonths - (years*12)

    document.write(`Місяць буде - ${thisMonth}`)

}