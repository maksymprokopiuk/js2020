// Function declaration
// function name(params1, params2) {
//     // body of function
//     return // result
// }
// let x = sum(23, 8)
// function sum(a, b) {
//     return a + b
// }

// Function expression (вираз)
// let sum = function (a, b) {
//     return a + b
// }
// let x = sum(23, 7)

// Лямбда вирази
// var f = x => x * x;
// alert(f(5)); //25

// var sum = (a, b) => a + b;
// alert(sum(3,5));   //8    

// var sum = (a, b)=> {
//     return a + b;
// }

// var area = (a, b, c) => {
//     var p = (a + b + c) / 2;
//     return Math.sqrt(p * (p - a) * (p - b) * (p - c));
// }
// alert(area(3,5,4));

// function func(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == 0) return; //Якщо 0 то припинити обробку
//         arr[i] *= 2;
//     }
// }

// var a = 7;
// function func(c) {  // для с створено нову пам’ять 
//     c++;
//     alert("c="+c);  // c=8
// }
// func(a);   //значення а скопіюється у с
// alert("a="+a); // a=7 (значення не змінилося)

// function func() {
//     let a = 9;
// }
// alert(a);   //a is not defined

// var a = 7;
// function func() {
//     a = 9;  //зверання до зовнішньої змінної
//     console.log(a);
// }
// func();

// function func(a=10, b=7) {
//     return a + b;
//  }
//  console.log(func());
 

// showMessage(..)     // показывает сообщение
// getAge(..)          // возвращает возраст (в каком либо значении)
// calcSum(..)         // вычисляет сумму и возвращает результат
// createForm(..)      // создаёт форму (и обычно возвращает её)
// checkPermission(..) // проверяет доступ, возвращая true/false