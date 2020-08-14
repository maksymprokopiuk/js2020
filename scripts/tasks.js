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