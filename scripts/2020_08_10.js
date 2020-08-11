// arrays

// 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії
// він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і
// відмінно), трійочник(є хоча би одна трійка)).

const numberOfEstimates = parseInt(prompt('Ввести кількість оцінок'))
// random min - max
function getRandomMinMax(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random()*(max - min +1)) + min
}
// створюємо масив
const points = []
function createArrRandom() {
    for (let i = 0; i < numberOfEstimates; i++) {
        points.push(getRandomMinMax(4, 5))
    }
}
createArrRandom()
document.write(`Список оцінок - ${points}`)
document.write('<br>')

// знайти середній бал
function suma(result, x) {
    result += x;
    return result;
}

let q = points.reduce(suma)
document.write(`Середнє значення - ${q/numberOfEstimates}<br>`)

// знайти категорію

if (points.some(mark=>mark===1) || points.some(mark=>mark===2))document.write ('двійочник')
else if (points.some(mark=>mark===3))document.write ('трійочник')
else if (points.some(mark=>mark===4))document.write ('хорошист')
else document.write('відмінник')

