//Бульбашковий
// {
//     document.write('<h1>Бульбашковий</h1>')
//     let a = [3, 23, 4, 6, 45, 67, 1]
//     let zamina
//     do {
//         zamina = false
//         for (let i = 1; i < a.length; i++) {
//             if (a[i - 1] > a[i]) {
//                 let t = a[i - 1]
//                 a[i - 1] = a[i]
//                 a[i] = t
//                 zamina = true
//             }
//         }
//     } while (zamina)
//     document.write(a)
//     document.write('<br><img src="../js2020/img/220px-Bubble-sort-example-300px.gif">')
// }

//   Шейкер сортування
// {
//     document.write('<h1>Шейкер сортування</h1>')
//     let a = [3, 23, 4, 6, 45, 67, 1]
//     let zamina;
//     do {
//         //Прямий хід (зліва-направо)
//         zamina = false;
//         for (let i = 1; i < a.length; i++) {
//             if (a[i - 1] > a[i]) {
//                 let t = a[i - 1];
//                 a[i - 1] = a[i];
//                 a[i] = t;
//                 zamina = true;
//             }
//         }
//         if (!zamina) break;
//         //Зворотній хід (зправа - наліво)
//         zamina = false;
//         for (let i = a.length - 1; i >= 1; i--) {
//             if (a[i - 1] > a[i]) {
//                 let t = a[i - 1];
//                 a[i - 1] = a[i];
//                 a[i] = t;
//                 zamina = true;
//             }
//         }
//     } while (zamina);
//     document.write(a);
//     document.write('<br><img src="../js2020/img/Sorting_shaker_sort_anim.gif">')
// }
//Вибіркою
// {
//     document.write('<h1>Вибіркою</h1>')
//     let a = [3, 23, 4, 6, 45, 67, 1]
//     for (let i = 0; i < a.length - 1; i++) {
//         //Знайти номер мінімального починаючи з і-го елемента
//         let minIndex = i;
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[j] < a[minIndex]) minIndex = j;
//         }
//         if (minIndex !== i) {
//             let t = a[minIndex];
//             a[minIndex] = a[i];
//             a[i] = t;
//         }
//     }
//     document.write(a);
//     document.write('<br><img src="../js2020/img/Selection-Sort-Animation.gif">')
// }
//Вставок
// {
//     document.write('<h1>Вставок</h1>')
//     let a = [3, 23, 4, 6, 45, 67, 1]
//     for (let i = 1; i < a.length; i++) {
//         let t = a[i];
//         let j = i - 1;
//         while (j >= 0 && a[j] > t) {
//             a[j + 1] = a[j];
//             j--;
//         }
//         a[j + 1] = t;
//     }
//     document.write(a);
//     document.write('<br><img src="../js2020/img/274px-Insertion-sort-example-300px.gif">')
// }
//Бінарний пошук
// {
//     document.write('<h1>Бінарний пошук</h1>')
//     let a = [1, 3, 4, 6, 23, 32, 45, 67]
//     document.write(`${a}<br>`)
//     let el = 32
//     let elIndex = -1
//     let startIndex = 0, endIndex = a.length - 1
//     while (startIndex <= endIndex) {
//         let averageIndex = Math.floor((startIndex + endIndex) / 2)
//         if (el === a[averageIndex]) {
//             elIndex = averageIndex
//             break
//         }
//         if (el > a[averageIndex])
//             startIndex = averageIndex + 1
//         else
//             endIndex = averageIndex - 1
//     }
//     if (elIndex !== -1)
//         document.write(`index= ${elIndex}`)
//     else
//         document.write('No el in array')
// }