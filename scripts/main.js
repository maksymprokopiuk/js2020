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

/*
1. Дано ширину екрана та кількість елементів, які повинні бути відображені у рядку. 
Визначити ширину елементів, які повинні бути відображені у цьому рядку.
*/

{
    let widthScreen = parseInt(prompt('Яка ширина екрана?', 1024))
    let numberOfElements = parseInt(prompt('Яка кількість елементів?', 12))
    let widthElement = widthScreen / numberOfElements

    document.write(`Ширина одного елемента - ${widthElement.toFixed(2)}`)
}

/*
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

/*
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

/*
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