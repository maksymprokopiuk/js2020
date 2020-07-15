// 1. Обчислити площу та периметр прямокутника, довжини сторін якого задаються.
{
    let a = parseInt(prompt('Введіть значення для сторони A', 22))
    let b = parseInt(prompt('Введіть значення для сторони B', 25))

    let square = a * b
    let perimeter = a * 2 + b * 2

    document.write(`Площа - ${square}, периметр - ${perimeter}`)
}
// 2. Дано (вводиться з клавіатури) кількість кілограмів помідорів та вартість одиниці.
{
    let numberOfTomatoes = parseInt(prompt('Скільки кг помідорів?', 10))
    let priceOfTomatoes = parseFloat(prompt('Яка вартість, грн за кг?', 30))

    document.write(`Загальна вартість - ${numberOfTomatoes*priceOfTomatoes} грн`)
}
// 3. З клавіатури вводиться рік народження учня. Визначити вік учня.
{
    let studBirthday = parseInt(prompt('Введіть рік народження учня', 2000))
    let yearsOfStudent = new Date().getFullYear() - studBirthday
    document.write(`Вік учня - ${yearsOfStudent} років`)
}
// 4. З клавіатури вводиться арендна плата за квартиру (за 1 місяць). Визначити скільки треба
// заплатити за 1 рік, за 2 роки та 10 років.
{
    let priceForMonth = parseFloat(prompt('Введіть вартість оренди за 1 місяць', 6000))

    document.write(`За 1 рік - ${priceForMonth*12}грн,<br>За 2 роки - ${priceForMonth*24}грн,<br>та за 10 років - ${priceForMonth*120}грн`)
}
// 5. З клавіатури вводиться арендна плата за місяць. Визначити на скільки повних місяців
// вистачить вказаної суми грошей, а також кількість повних років.
{
    let priceForMonth = parseFloat(prompt('Введіть вартість оренди за 1 місяць', 1000))
    let howMuchMoney = parseFloat(prompt('Ввести скільки всього є грошей', 12000))

    let fullMonths = howMuchMoney / priceForMonth
    let fullYears = howMuchMoney / priceForMonth / 12

    document.write(`Вистачить на - ${parseInt(fullMonths)} місяців і ${parseInt(fullYears)} років`)
}
// 6. Цвях довжиною L см забивають в дошку. За один удар цвях заглиблюється в
// дерево на К мм. За скільки ударів цвях заб'ють в дошку?
{
    let nail = parseFloat(prompt('Яка довжина цвяха? см', 12))
    let deep = parseFloat(prompt('Глубина заглиблення за 1 удар? см', 2))

    let nailInBoard = nail / deep

    document.write(`Цвях заб'ється в дошку за - ${Math.ceil(nailInBoard)} ударів`)
}
// 7. Одна сторінка книжки прочитується за Н хв, в книжці S сторінок. За скільки годин
// книжка буде прочитана?
{
    let pageForTime = parseInt(prompt('За скільки хв прочитується 1 сторінка?', 5))
    let howManyPagesInTheBook = parseInt(prompt('Скільки сторінок в книжці?', 100))

    let hours = pageForTime * howManyPagesInTheBook / 60
    let minutes = pageForTime * howManyPagesInTheBook % 60

    document.write(`hours ${parseInt(hours)}, minutes ${minutes}`)
}
// 8. Вудкою зловили R риб по G г кожна. Обчисліть загальну вагу спійманої риби в кг.
{
    let numberOfFish = parseInt(prompt('Скільки риб зловили шт?', 10))
    let numberOfWeight = parseFloat(prompt('Яка вага риби в г?', 1100))
    let weightAllFish = numberOfFish * numberOfWeight
    document.write(`Загальна вага спійманої риби - ${weightAllFish/100}кг`)
}
// 9. W кг цукерок ділять порівну на М дітей. По скільки г цукерок дістанеться кожній
// дитині?
{
    let howManyCandies = parseInt(prompt('Скільки цукерок?', 33))
    let howManyChildren = parseInt(prompt('Скільки дітей?', 8))
    let candiesVsChildren = howManyCandies / howManyChildren
    document.write(`Кожній дитині по ${parseInt(candiesVsChildren)} цукерки`)
}
// 10. Одна серія фільму по телевізору триває F хв. Скільки часу в годинах необхідно,
// щоб переглянути N серій?
{
    let durationOfseries = parseInt(prompt('Скільки хв триває 1 серія?', 70))
    let series = parseInt(prompt('Скільки серій треба переглянути?', 2))
    let hours = durationOfseries * series / 60
    let minutes = durationOfseries * series % 60
    document.write(`Потрібно - ${parseInt(hours)} год і ${minutes} хв`)
}
// 11. Порося щодня набирає вагу Р г. За скільки днів порося виросте в свиню вагою S
// кг?
{
    let piggyWeight = parseInt(prompt('Яка вага порося в г?', 2000))
    let piggyGrow = parseInt(prompt('Скільки г щодня набирає порося?', 900))
    let pig = parseInt(prompt('Яка вага потрібна? кг', 50))
    let days = (pig * 1000 - piggyWeight) / piggyGrow
    document.write(`Виросте через ${days.toFixed()} днів`)
}
// 12. Скільки лампочок потрібно, щоб освітити вулицю довжиною D км, як що стовпи з
// ліхтарями стоять на відстані V м?
{
    let lengthStreet = parseInt(prompt('Яка довжина вулиці, км?', 2))
    let lengthBetweenLights = parseInt(prompt('Яка відстань між ліхтарями, м?', 10))
    let bulbs = lengthStreet * 1000 / lengthBetweenLights

    document.write(`Потрібно ${bulbs} лампочок`)
}
// 13. Марічка любить пригощати подруг тістечками в 'Солодкій мрії'. Зазвичай,
// Марічка з'їдає X тістечок, її подруга Даринка вдвічі більше, а подруга
// Катруся на одне тістечко менше, ніж Даринка. Скільки тістечок має
// замовити Марічка?
{
    let howManyPiecesOfCakeForMarichka = parseInt(prompt('Скільки тістечок планує з\'їсти Марічка?',10))
    let darinka = howManyPiecesOfCakeForMarichka * 2
    let katrusja = howManyPiecesOfCakeForMarichka - 1
    let howManyPiecesToOrder = howManyPiecesOfCakeForMarichka + darinka + katrusja
    document.write(`Треба замовити - ${howManyPiecesToOrder} тістечок`)
}
// 15. Користувач хоче клеїти шпалери на стіну. Дано розміри стіни (довжина і висота) та розмір
// двох вікон. Визначити, скільки м 2 шпалер потрібно купити користувачу.
{
    let widthWall = parseFloat(prompt('Вкажіть ширину стіни в см', 550))
    let heightWall = parseFloat(prompt('Вкажіть висоту стіни в см', 220))
    let wallArea = widthWall * heightWall
    let widthWindow = parseFloat(prompt('Вкажіть ширину вікна в см', 120))
    let heightWindow = parseFloat(prompt('Вкажіть висоту вікна в см', 160))
    let windowAreaBoth = widthWindow * heightWindow * 2
    let howManyWallpaper = wallArea - windowAreaBoth
    document.write(`Потрібно ${howManyWallpaper} см шпалер`)
}
// 16. Турист їхав Х годин зі швидкістю 40км/год та Y годин зі швидкістю 25км/год. Знайти
// загальний пройдений шлях.
{
    // 1 год 40км/год
    // 2 год 25км/год
    // Знайти загальний пройдений шлях

    let firstHours = parseFloat(prompt('Скільки годин турист їхав зі швидкістю 40км/год?', 1))
    let secondHours = parseFloat(prompt('Скільки годин турист їхав зі швидкістю 25км/год?', 2))
    let way = firstHours * 40 + secondHours * 25
    document.write(`Загальний пройдений шлях - ${way}км`)
}
// 17. Визначити загальну вартість покупки, якщо задано вартості та кількості штук двох товарів.
{
    let firstPrice = parseFloat(prompt('Вартість першого товару', 5))
    let firstNumber = parseFloat(prompt('Кількість першого товару', 100))
    let secondPrice = parseFloat(prompt('Вартість другого товару', 6))
    let secondNumber = parseFloat(prompt('Кількість другого товару', 100))
    let totalPrice = firstPrice*firstNumber + secondPrice*firstNumber
    document.write(`
    <table border="2px">
        <tr>
            <td>Назва</td>
            <td>Ціна</td>
            <td>Кількість</td>
            <td>Вартість</td>
        </tr>
        <tr>
            <td>Товар 1</td>
            <td>${firstPrice}грн</td>
            <td>${firstNumber}шт</td>
            <td>${firstPrice*firstNumber}грн</td>
        </tr>
        <tr>
            <td>Товар 2</td>
            <td>${secondPrice*secondNumber}грн</td>
            <td>${secondNumber}шт</td>
            <td>${secondPrice*firstNumber}грн</td>
        </tr>
        <tr>
            <td colspan="4">Загальна вартість: ${totalPrice} грн</td>
        </tr>
    </table>
    `)
}
// 18. Студент ідучи на заняття може використати або трамвай з 2 пересадками, або використати
// потяг і маршрутне таксі, або автобус з 1 пересадкою. Визначити можливі витрати студента,
// якщо вартість квитка не залежить від відстані.
{
    let ticketTram = parseFloat(prompt('Яка вартість квитка у трамвая, грн?', 1))
    let ticketTrain = parseFloat(prompt('Яка вартість квитка у потяга, грн?', 2))
    let ticketTaxi = parseFloat(prompt('Яка вартість квитка у маршрутного таксі, грн?', 5))
    let ticketBus = parseFloat(prompt('Яка вартість квитка у автобуса, грн?', 4))

    let firstWay = ticketTram * 3
    let secondWay = ticketTrain + ticketTaxi
    let thirdWay = ticketBus * 2

    document.write(`Трамвай з двома пересадками - ${firstWay} грн`)
    document.write('<br>')
    document.write(`Потяг і маршрутне таксі - ${secondWay} грн`)
    document.write('<br>')
    document.write(`Автобус з одною пересадкою - ${thirdWay} грн`)
}
// 19. Уряд планує підвищити тарифи на газ на 23% і 15% на електроенергію. На скільки гривень
// зросте абонентна плата при вказаних об’ємах споживання (Х кубів газу, Y кіловат
// електроенергії)?
{
    let howMuchGasIsConsumed = parseFloat(prompt('Скільки куб газу спожито?', 100))
    let howMuchelectricityIsConsumed = parseFloat(prompt('Скільки кВт газу спожито?', 100))
    let gasPrice = 2.78
    let electricityPrice = 1.68
    let gas = howMuchGasIsConsumed * gasPrice
    let electricity = howMuchelectricityIsConsumed * electricityPrice
    let gas23 = gas * 23 / 100
    let electricity15 = electricity * 15 /100
    document.write(`За спожиті ${howMuchGasIsConsumed} куб зараз - ${gas}грн, потім +23% - ${gas23+gas}грн`)
    document.write('<br>')
    document.write(`За спожиті ${howMuchelectricityIsConsumed} кВт зараз - ${electricity}грн, потім +15% - ${electricity15+electricity}грн`)
}
// 20. Заняття на гуртку триває протягом М місяців, з Н годинами на тиждень. Визначити
// загальну кількість годин.
{
    let duringMonths = parseInt(prompt('Вкажіть скільки місяців тривають заняття?', 10))
    let duringHoursOfWeek = parseInt(prompt('Вкажіть тривалість годин на тиждень?', 4))
    let allHours = duringMonths * 4 * duringHoursOfWeek
    document.write(`Загаьна кількість годин складає - ${allHours} годин`)
}