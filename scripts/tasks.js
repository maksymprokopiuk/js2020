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
// 7. Используя метод sort перепишите предсталенный ниже код, 
// который с помощью цикла for случайно изменяет порядок расстановки элементов массива.

// function shuffle(arr) {
//      for (var i = arr.length - 1; i > 0; i--) {
//          var j = Math.floor(Math.random() * (i + 1));
//          var temp = arr[i];
//          arr[i] = arr[j];
//          arr[j] = temp;
//      }
//      return arr;
//  }
 
//  var array = [0,1,2,3,4,5,6,7,8,9];
//  document.writeln(shuffle(array));
 

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

// 10. Сумма элементов двух массивов
// Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов 
// заданных массивов.

// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [4, 5, 6];
// let arr3 = []
// count = (arr1.length > arr2.length) ? arr1.length : arr2.length
// for (let i = 0; i < count; i++) {
//     if (arr1[i] && arr2[i]) arr3.push(arr1[i]+arr2[i])
//     else if (arr1[i] && !arr2[i]) arr3.push(arr1[i])
//     else arr3.push(arr2[i])
// }
// document.writeln(arr3); // [5,7,9,4,5] 

// *****************************************************************************
// 11. Количество повторяющихся элементов в массиве
// Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве.

// function countIdentic(arr) {
    
// }

// countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]) // 4
// countIdentic([15,14,13,19,13,14,14,14,7,9,9]) // 3


// 12. Разворачивание массива массивов
// Напишите функцию expand(arr), которая разворачивает вложенный массив любой глубины.

// var arr1 = [1, [2,[3,[4]]]];
// var arr2 = [1, [2], [3, [[4]]],[5,6]];
// function expand(arr) {
//     let temp = arr.join()
//     let newArr = temp.split()
//     return newArr
// }

// document.writeln(expand(arr1)); // 1,2,3,4
// document.write('<br>')
// document.writeln(expand(arr2)); // 1,2,3,4,5,6

// *****************************************************************************
// 13. Объединить два массива без дублирования элементов
// Напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из 
// каждого массива.

// var array1 = [5, 2, 1, -10, 8];
// var array2 = [5, 2, 1, -9, 3, 7]; 

// var union = function(array1, array2) {
    
// }
// document.writeln(union(array1, array2)); // [-10,8,5,2,1,-9,3,7] 

// 14. Разница между двумя массивами
// Напишите функцию union, которая возвращает массив, содержащий все элементы arr1, 
// которые не находятся в arr2 и наоборот.

// var arr1 = [1, 2, 'a'];
// var arr2 = [1, 2, 3, 4, 'b'];  
// function arrayDiff(arr1, arr2) {
//      let temp = []
//      let length = (arr1.length > arr2.length) ? arr1.length : arr2.length
//      for (let i = 0; i < length; i++) {
//           // document.write(`${arr1[i]} ${arr2[i]}<br>`)
//           if (arr1[i] != arr2[i]) {
//                if (arr1[i] != undefined) temp.push(arr1[i])
//                if (arr2[i] != undefined) temp.push(arr2[i])
//           }
//      }
//      return temp
// }
// document.writeln(arrayDiff(arr1, arr2)); // [a,3,4,b]

// 15. Сортировка массива по убыванию
// Напишите функцию compareNumbers(arr), которая возвращает массив, элементы которого отсортированы 
// по убыванию их значений.

// var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];  
// function compareNumbers(arr){
//     return arr.sort((a,b)=>a-b)
// }
// document.write(compareNumbers(numbers)) // -4,1,2,3,3,5,6,7,8

// *****************************************************************************
// 16. Наиболее часто используемый элемент массива
// Напишите код, который находит наиболее часто используемый элемент массива.

// var arr1=[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];  

     //  ваш код

// document.writeln(output); // z повторяется 5 раз

// 17. Сумма квадратов значений массива
// Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива.

// function sumOfSquares(arr) { 
//     let newArr = 0
//     for (let i = 0; i < arr.length; i++) {
//         newArr+= arr[i] * arr[i]
//     }
//     return newArr
// }
// document.writeln(sumOfSquares([1, 2, 3, 4, 5])); // 55

// *****************************************************************************
// 18. Сумма и произведение значений массива
// Напишите код, который определяет сумму и произведение значений массива.

// var arr = [ 1, 2 , 3 , 4 , 5 , 6 , 7, 8 ,9];
// // ваш код
// document.writeln(" Сумма : "+sum + "Произведение : " + product); /* Сумма : 45
// Произведение : 362880 */

// 19. Удаление ложных значений из массива
// Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) 
// значений: false, null, undefined, 0, –0, NaN и "" (пустя строка).

// array = [NaN, 0, 77, false, -17, '',undefined, 99, null];
// function filterFalse(arr) {
//      let newArr = []
//      for (let i = 0; i < arr.length; i++) {
//           if (arr[i]%arr[i] === 0 && arr[i]) {
//                newArr.push(arr[i])
//           }
//      }
//      return newArr
// }
// document.writeln(filterFalse(array)); // [ 77, -17, 99 ]

// #2
// let array = [NaN, 0, 77, false, -17, '',undefined, 99, null];
// const arrFunc = arr => arr.filter(Boolean);
// document.write(arrFunc(array))

// *****************************************************************************
// 20. Сортировка массива объектов
// Напишите код, который отсортирует массив объектов litmir по значению свойства title.

// var litmir = [ 
//    { author: 'Хэленка', title: 'Улетела сказка'},
//    { author: 'Коул Кресли', title: 'Восстание Аркан'},
//    { author: 'Райчел Мид', title: 'Золотая лилия'}
//    ];

     // ...ваш код...

// Восстание Аркан Золотая лилия Улетела сказка

// *****************************************************************************
// 21. Найти пары чисел, сумма которых равна заданному значению
// Напишите функцию findCouple(array, number), которая ищет в массиве все пары целых чисел, 
// сумма которых равна заданному значению.

// var num = 5;
// var arr = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];

// function findCouple(array, number) { 

//      // ...ваш код...

// }

// document.writeln(findCouple(arr, num));
// // Ваша пара чисел: 1 + 4,Ваша пара чисел: 2 + 3

// *****************************************************************************
// 22. Найти все значения данного свойства в массиве объектов
// Напишите функцию propertyValue(array, key), которая принимает в качестве аргументов массив объектов 
// и имя свойства, а затем возвращает все значения данного свойства из массива объектов.

// var litmir = [ 
//    { author: 'Хэленка', title: 'Улетела сказка'},
//    { author: 'Коул Кресли', title: 'Восстание Аркан'},
//    { author: 'Райчел Мид', title: 'Золотая лилия'}
//    ];

// function propertyValue(array, key) {

//      // ...ваш код...

// }

// propertyValue(litmir, 'title');  // Улетела сказка,Восстание Аркан,Золотая лилия
// propertyValue(litmir, 'author'); // Хэленка,Коул Кресли,Райчел Мид 

// *****************************************************************************
// 23. Общая стартовая подстрока в массиве строк
// Напишите функцию startingSubstring(arr), которая возвращает общую начальную подстроку в массиве строк.

// var arr1 = ['Капуста', 'Капитал'];
// var arr2 = ['Репа', 'Редиска'];
// function startingSubstring(arr) {

// // Ваш код

// }

// var res1 = startingSubstring(arr1);
// var res2 = startingSubstring(arr2);

// document.writeln(res1); // Кап
// document.writeln(res2); // Ре

// *****************************************************************************
// 24. Удалить определенный элемент из массива
// Напишите функцию removeItem(arr, num), которая удаляет определенный элемент из массива.

// function removeItem(arr, num) {

// // Ваш код

// }

// document.writeln(removeItem([3, 5, 7, 8, 5], 5)); // [3,7,8] 

// *****************************************************************************
// 25. Вернуть случайный элемент из массива
// Напишите функцию randomElement(arr), которая возвращает случайный элемент из массива.

// function randomElement(arr) {

// // Ваш код

// }

// var arr = [24, 45, 22, 35, 43];
// document.writeln(randomElement(arr)); // 22

// *****************************************************************************
// 26. Массив с заданным количеством элементов
// Напишите функцию arrayFilled(len, value), которая возвращает массив с заданным количеством len 
// элементов value.

// function arrayFilled(len, value) {

// // Ваш код

// }

// document.writeln(arrayFilled(5, 1));   // [1,1,1,1,1]
// document.writeln(arrayFilled(4, 12));  // [12,12,12,12] 

// *****************************************************************************
// 27. Переместить элемент массива из одной позиции в другую
// Напишите функцию moveElement(arr,from,to), которая позволяет переместить элемент массива из 
// позиции from в позицию to.

// function moveElement(arr,from,to) {

// // Ваш код

// }

// var arr = [ 'a', 'b', 'c', 'd', 'e'];
// document.writeln(moveElement(arr,3,1)); // ["a", "d", "b", "c", "e"]

// *****************************************************************************
// 28. Массив указанной длины
// Напишите функцию generateNumbers(start, len), которая генерирует массив заданной длины len, 
// заполненный целыми числами, где каждое число больше предыдущего на единицу.

// function generateNumbers(start, len) {

// // Ваш код

// }

// document.writeln(generateNumbers(0, 5));  // 0,1,2,3,4
// document.writeln(generateNumbers(-5, 4)); // -5,-4,-3,-2 

// 29. Массив, содержащий все целые числа между start и end
// Напишите функцию generateRange(start, end), которая генерирует массив заданной длины len, 
// заполненный целыми числами. Каждое последующее число в массиве должно быть больше предыдущего на единицу.

// function generateRange(start, end) {
//      let arr = []
//      for (let i = 0; i < end; i++) {
//           arr.push(start - i)
//           start+= 2
//      }
//      return arr
// }
// document.write(`${generateRange(0, 5)}<br>`)
// document.write(`${generateRange(-5, 4)}`)

// *****************************************************************************
// 30. Массив длин строковых элементов
// Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// // Ваш код

// alert( vegetableLength ); // 7,4,7,8

// *****************************************************************************
// 31. Массив сумм чисел
// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. 
// Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из 
// такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers 
// до этой позиции включительно.

// для numbers = [2, 3, 5, 7, 11, 13, 17]

// // ваш код

// currentSums(numbers); // [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]

// *****************************************************************************
// 32. Равные в сумме пары чисел
// Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, 
// которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// var arr = [0, 1, 2, 3, 4, 5, 6, 7];
// function sumSeven(numbers) {

//  // ваш код

// }

// document.writeln(sumSeven(numbers)); // [0:7, 1:6, 2:5, 3:4]

// *****************************************************************************
// 33. Массив из первых букв
// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из 
// первых букв слов строки str. При написании данного кода, позаимствуйте у объека Array метод filter.

// var str = "Каждый охотник желает знать, где сидит фазан."; 

// // Ваш код 

// document.write(array);  // [К,о,ж,з,г,с,ф]

// *****************************************************************************
// 34. Массив строк по три символа
// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, 
// состоящих из предыдущего, текущего и следующего символа строки str. При написании данного кода, 
// позаимствуйте у объека Array метод map.

// var str = "JavaScript"; 

// // Ваш код 

// document.writeln(arr); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt] 

// *****************************************************************************
// 35. Получить массив цифр по убыванию
// Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр 
// расположенных по убыванию их значений.

// var numerics = [5, 7, 2, 9, 3, 1, 8];

// // Ваш код 

// document.writeln(numerics); // [9,8,7,5,3,2,1] 

// *****************************************************************************
// 36. Слияние массивов
// Напишите код, объединяющий три массива цифр, и располагающий, с помощью метода pop(), 
// цифры в полученном массиве в порядке убывания их значений через пробел.

// var a = [1,2,3];
// var b = [4,5,6];
// c = [7,8,9];
// function getArr(a, b, c) {

// // Ваш код 

// }

// getArr(a, b, c); // [9 8 7 6 5 4 3 2 1] 