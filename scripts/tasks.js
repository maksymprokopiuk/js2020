// http://old.code.mu/tasks/javascript/base/rabota-s-funkciyami-dlya-massivov-v-javascript.html
// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// let firstArr = ['a', 'b', 'c']
// let secondArr = [[1, 2, 3]]
// let thirdArd = firstArr.concat(secondArr)
// console.log(thirdArd)

// Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// let arr = ['a', 'b', 'c']
// arr.push(1, 2, 3)
// console.log(arr)

// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

// let arr = [1, 2, 3]
// arr.reverse()
// console.log(arr);

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let firstArr = [1, 2, 3]
// let secondArr = [1, 2, 3]

// firstArr.push(4, 5, 6)
// secondArr.unshift(4, 5, 6)

// console.log(firstArr)
// console.log(secondArr)

// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// const arr = ['js', 'css', 'jq']

// console.log(arr[0])
// console.log(arr[arr.length-1])

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// const arr = [1, 2, 3, 4, 5]

// let firstArr = arr.slice(0, 3)
// let secondArr = arr.slice(3)

// console.log(firstArr)
// console.log(secondArr)

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 2)
// console.log(arr)

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.splice(1, 3)
// console.log(newArr)

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5]
// arr.splice(3, 0, 'a', 'b', 'c')
// console.log(arr);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 0, 'a', 'b')
// arr.splice(6, 0, 'c')
// arr.splice(8, 0, 'e')
// console.log(arr);

// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

// let arr = [3, 4, 1, 2, 7]
// arr.sort()
// console.log(arr);

// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

// let obj = {
//     js: 'test',
//     jq: 'hello',
//     css: 'world'
// }
// let arr = Object.keys(obj)

// console.log(arr);

// http://wm-school.ru/js/array_exercises_1.php

// 1. Клонирование массива Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.

// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка']
// function arrayClone(arr) {
//     let newArr = arr.slice()
//     return newArr
// }
// let arr1 = arrayClone(vegetables)
// document.write(arr1)

// 2. Преобразование массива в строку
// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. 
// Элементы массива будут разделены запятой. Получите результат двумя разными методами.

// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка']

// let str1 = vegetables.join()
// let str2 = vegetables.toString()

// document.writeln(str1) // "Капуста, Репа, Редиска, Морковка"
// document.writeln(str2) // "Капуста, Репа, Редиска, Морковка"

// 4. Замена регистра символов
// Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает 
// строку в качестве аргумента и заменяет регистр каждого символа на противоположный. 
// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк].

// const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');
// function changeRegister(str) {
//     let newStr = ''
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toUpperCase()) {
//             newStr += str[i].toLowerCase()
//         } else {
//             newStr += str[i].toUpperCase()
//         }
//     }
//     return newStr
// }
// document.writeln(changeRegister(str)); // [кАжДыЙ оХоТнИк] 

// 5. Удалить повторяющиеся элементы массива
// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся 
// элементы из массива arr (игнорируйте чувствительность к регистру).

// var arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
// function removeDuplicates(arr) {
//     let newArr = []
//     newArr.push(arr[0])
//     for (let i = 1; i < arr.length; i++) {
//         if (newArr.indexOf(arr[i]) === -1) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// let result = removeDuplicates(arr)
// document.write(result)  // [php,css,script,html,java] 

// 6. Найдите високосные годы
// Високосным годом является каждый четвертый год и века начинаются только на высокостные года, 
// отличие високосного года от обычного заключается в появлении 366-го дня. 
// Напишите функцию chooseYears(start, end), которая принимает в качестве аргументов диапозон лет и 
// возвращает массив високосных лет в заданном диапазоне.

// function chooseYears(start, end) {
//     let years = []
//     for (let i = start; i <= end; i++) {
//         if (i%4 === 0) {
//             years.push(i)
//         }
//     }
//     return years
// }
// document.writeln(chooseYears(2000,2020)); // [2000,2004,2008,2012,2016]
// *****************************************************************************
// 7. Отобразить элементы в случайном порядоке
// Используя метод sort перепишите предсталенный ниже код, который с помощью цикла for случайно 
// изменяет порядок расстановки элементов массива.

// function shuffle(arr) {
//     for (var i = arr.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     return arr;
// }
// *****************************************************************************
// 8. Получить первые элементы массива
// Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, 
// содержащий первые 'n' элементов массива.

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function getFirst(arr, n) {
//     let temp = []

//     if (n === undefined) {
//         temp = arr.slice(0, 1)
//     } else temp = arr.slice(0, n)
//     return temp
// };
// document.writeln(getFirst(array));    // 1
// document.write('<br>')
// document.writeln(getFirst(array, 4)); // 1,2,3,4
// document.write('<br>')
// document.writeln(getFirst(array,-3)); // 1,2,3,4,5,6 

// 9. Получить последние элементы массива
// Напишите функцию getLast(array, n), которая возвращает фрагмент массива, 
// содержащий последние 'n' элементов массива.

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function getLast(arr, n) {
//     let temp = []
//     if (n === undefined) {
//         temp = arr.slice(arr.length-1)
//     } else if (n <= arr.length){
//         temp = arr.slice(arr.length-n)
//     }
//     else {temp = arr.slice()}
//     return temp
// };
// document.writeln(getLast(array)+'<br>');     // 9
// document.writeln(getLast(array, 4)+'<br>');  // 6,7,8,9
// document.writeln(getLast(array, 12)); // 1,2,3,4,5,6,7,8,9 
