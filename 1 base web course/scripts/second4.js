// let a = [12, 1, 56, 2, 78, 5]
// document.write(`${a}<br>`)
// function add15 (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 10) {
//             arr[i]+=15
//         }
//     }
// }
// add15(a)
// document.write(a)

// для кожного елемента якщо менше за 0 то * 2
// let a = [-2, 1, 56, 2, 78, 5]
// document.write(`${a}<br>`)
// function add15 (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i]*=2
//         }
//     }
// }
// add15(a)
// document.write(a)

// function inputArr(length) {
//     let arr = []
//     for (let i = 0; i < length; i++) {
//         let el = parseFloat(prompt('Ціна товару ${i}'))
//         arr.push(el)
//     }
//     return arr
// }

// let pricesCount = parseInt(prompt('Кількість товарів'))
// let prices = inputArr(pricesCount)
// новий масив

// const newPrice = prices.map(el => el > 100 ? el * 1.2 : el)

// document.write(`${newPrice}`)

// змінити існуючий масив

// prices.forEach((el, index, arr) => {
    // if (el > 100) arr[index]*=1.2
// })
// document.write(`${prices}`)

// створити від до

// const newPrices = prices.filter((el, index, arr) => el >= 120 && el <= 300)
// document.write(newPrices)

// > 150

// const sum150 = prices.reduce((prevSum, el) =>{
//     if (el >= 150) return prevSum+el
//     else return prevSum
// }, 0)

// document.write(sum150)

