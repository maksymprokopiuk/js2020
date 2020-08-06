// Масиви

// Приклад. Упорядквати за спаданням
// function f(a, b) {
//     if (a > b) {
//         return -1;
//     }
//     if (a < b) {
//         return 1;
//     }
//     return 0;
// }
// var a = ["Ivan", "Petro", "Anton", "Sudor"];
// document.write(`${a}<br>`);
// a.sort(f);
// document.write(a);

// Приклад. Упорядкувати за зростанням за другою буквою
// function f(a, b) {
//     if (a[1] > b[1]) {
//         return 1;
//     }
//     if (a[1] < b[1]) {
//         return -1;
//     }
//     return 0;
// }
// var a = ["Ivan", "Petro", "Anton", "Sudor"];
// document.write(`${a}<br>`);
// a.sort(f);
// document.write(a);

//Задача.Кожне парне число збільшити на 5.
// function f(x, i, arr) {
//     if (arr[i] % 2 == 0) {
//         arr[i] += 5;
//     }
// }
// //-------------------
// var a = [2, 11, 3, 4, 24, 3];
// document.write(`${a}<br>`);
// a.forEach(f);
// document.write(a);

//Задача. Дано масив років народження працівників. 
//Вивести тих, які народилися між 1980 і 2003 роках.
// function f(x, i, arr) {
//     if (x >= 1980 && x <= 2003) {
//         document.write(x + ", ");
//     }
// }
// //-------------------
// var a = [1990, 2001, 1950, 1967, 2000];
// a.forEach(f);
// // ------------------
//     //Ця ж задача за допомогою filter
//     function f(x, i, arr) {
//         return (x >= 1980 && x < 2003);
//     }
// //-------------------
// var a = [1990, 2001, 1950, 1967, 2000];
// var b = a.filter(f);
// document.write(b);

//Задача.Дано масив імен працівників.
//Сформувати новий масив, який складається з 
//перших літер імен.
// function f(x, i, arr) {
//     return x[0];
// }
// //-------------------
// var a = ["Ivan", "Petro", "Olja"];
// var b = a.map(f);
// document.write(b);

// Задача. Дано масив показників термометра протягом місяця. З’ясувати, чи є серед них дні, коли 
// температура була меншою за 5 градусів.
// function f(x, i, arr) {
//     return x < 5;
// }
// //-------------------
// var a = [10, 15, 1, 4, 32];
// if (a.some(f)) {
//     document.write("We have day with < 5");
// }
// else {
//     document.write("All days >= 5 ");
// }

// Задача. Дано масив показників термометра протягом місяця. З’ясувати, чи усі показники є більшими за 
// 10 градусів.
// function f(x, i, arr) {
//     return x > 10;
// }
// //-------------------
// var a = [10, 15, 1, 4, 32];
// if (a.every(f)) {
//     document.write("All days >10");
// }
// else {
//     document.write("There is day <=10 ");
// }

// Задача. Знайти добуток від’ємних елементів масиву.????????????????????
// function f(result, x, i, arr) {
//     if (x < 0) {
//         result *= x;
//     }
//     return result;
// }
// //---------------------
// var a = [17, 2, -3, 4, -5];
// var c = a.reduce(f, 1);
// document.write(c);

// Задача. Знайти суму парних елементів
// function f(result, x, i, arr) {
//     if (x % 2 == 0) {
//         result += x;
//     }
//     return result;
// }
// //---------------------
// var a = [17, 2, 3, 4, 5];
// var c = a.reduce(f, 0);
// document.write(c);

