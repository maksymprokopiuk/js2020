
// •  Табельний номер;
// •  Прізвище робітника;
// •  Найменування цеху;
// •  Розмір заробітної плати на місяць.
let workers = [
    {
        num: 1,
        name: "Ivanov1",
        cex: 4,
        salary: 12000,
    },
    {
        num: 2,
        name: "Cvanov2",
        salary: 7000,
    },
    {
        num: 3,
        name: "IvaNov3",
        cex: 0,
        salary: 12000,
    },
    {
        num: 4,
          name: "Avanov4",
        cex: "",
        salary: 92000,
    },
];
//Sort num (number) - змінює сам масив
//--- За зростанням 
//   let res = workers.sort((worker1, worker2) => worker1.num - worker2.num);
//   console.log(res);
//--- За спаданням
//   let res = workers.sort((worker1, worker2) => worker2.num - worker1.num);
//   console.log(res);
//Sort name (string)
//--- За зростанням
//   let res = workers.sort((worker1, worker2) => {
//     if (worker1.name > worker2.name) return 1;
//     if (worker1.name < worker2.name) return -1;
//     return 0;
//   });
//   console.log(res);
//--- За спаданням
//   let res = workers.sort((worker1, worker2) => {
//     if (worker1.name > worker2.name) return -1;
//     if (worker1.name < worker2.name) return 1;
//     return 0;
//   });
//   console.log(res);
//======================== Фільтрація ====================
//Filter num (number)
//Відобразити усіх зі вказаним значенням 2
//   let res = workers.filter((worker) => worker.num === 2);
//   console.log(res);
//Відобразити усіх зі  значенням >2
//   let res = workers.filter((worker) => worker.num > 2);
//   console.log(res);
//Вивести ті об"єкти, у яких є поле є "cex"
//   let res = workers.filter((worker) => worker.cex !== undefined);
//   console.log(res);
// console.log(workers);
//   let res = workers.filter((worker) => "cex" in worker);
//   console.log(res);
//Фільтрація за прізвищем (string)
//Відобразити тих, у яких друга буква є буквою 'v'
//   let res = workers.filter(
//     (worker) => worker.name &&worker.name.length>1  && worker.name[1] === "v"
//   );
//   console.log(res);
//Відобразити усіх, у яких є фрагмент (наприклад - 'nov') (з врахуванням регістру)
//   let res = workers.filter(
//     (worker) => worker.name && worker.name.includes("nov")
//   );
//   console.log(res);
//Відобразити усіх, у яких є фрагмент (без врахування регістру)
//   let searchFragment = "nOv";
//   const searchText = searchFragment.toLowerCase();
//   let res = workers.filter(
//     (worker) =>
//       worker.name && worker.name.toLowerCase().includes(searchText)
//   );
//   console.log(res);
//Відобразити усіх, які починаються з заданого фрагмента
//   let searchFragment = "iva";
//   const searchText = searchFragment.toLowerCase();
//   let res = workers.filter(
//     (worker) =>
//       worker.name && worker.name.toLowerCase().startsWith(searchText)
//   );
//   console.log(res);
//Відобразити усіх, які закінчуються заданим фрагмента
//   let searchFragment = "ov2";
//   const searchText = searchFragment.toLowerCase();
//   let res = workers.filter(
//     (worker) =>
//       worker.name && worker.name.toLowerCase().endsWith(searchText)
//   );
//   console.log(res);
//  Обчислення агрегованих значень
// Знайти загальну суму усіх заробітних плат
// let res= workers.reduce((prevSum,worker)=>prevSum+worker.salary||0 ,0)
// console.log(res);
// Знайти максимальну заробітну плату
// let res= workers.reduce((prevMax,worker)=>worker.salary&&worker.salary>prevMax?worker.salary:prevMax,0)
// console.log(res);
// Знайти мінімальну заробітну плату
// let res= workers.reduce((prevMin,worker)=>worker.salary&&worker.salary<prevMin?worker.salary:prevMin,Number.MAX_VALUE)
// console.log(res);
// Чи у всіх працівників заробітна плата більша за 5000
// let res=workers.every(worker=>worker.salary>5000)
// console.log(res);
// Чи є такий, у якого заробітна плата більша за 5000
// let res=workers.some(worker=>worker.salary>5000)
// console.log(res);
//Усім дати надбавку 20%
// workers.forEach((worker) => (worker.salary *= 1.2));
// console.log(workers);
//Зробити новий масив, у якому від заробітних плат забрано податок 20%
// let res = workers.map((worker) => worker.salary * 0.8);
// console.log(res);
// let res = workers.map((worker) => {
//     let copy = { ...worker };
//     // let copy = JSON.parse(JSON.stringify(worker));
//     let copy2 = {
//         ...worker,
//         ...JSON.parse(JSON.stringify(worker))
//     };
//     copy.salary *= 0.8;
//     return copy;
// });
// console.log(res);
// let arrP = ["name", "salary"];
// let source = {
//     num: 3,
//     name: "IvaNov3",
//     cex: 0,
//     salary: 12000,
// };

// let ob = {};
// arrP.forEach((prop) => (ob[prop] = source[prop]));
// console.log(ob);
// console.log(res);
// console.log(workers);
// let ob = {
//     a: 12,
//     b: 34
// }
// let ob2 = {
//     b: 34,
//     a: 90
// }

// Знайти кількість додатних
// function kilk(result, x, i, arr) {
//     if (x > 0) { result++ };
//     return result;
// }
// var a = [1, 2, -3, 4, -5];
// alert(a.reduce(kilk, 0)); //спочатку
//     result = 0
//-------------------------------

// // Знайти суму елементів масиву
// let a = [1, 2, 3, 4, 5];
// // console.log(a);
// function suma(result, x, i, arr) {
//     result += x;
//     // console.log(result);
//     return result;
// }
// console.log(a.reduce(suma)); //спочатку result = a[0]



function outer() {
    // область видимости функции outer()
    let v = 'Я из области видимости функции outer()!'

    function inner() {
        // область видимости функции inner()
        console.log(v) // 'Я из области видимости функции outer()!'
    }

    return inner
}

const f = outer()
f()

// пример использования лексической области видимости для callback функций
// function outer(param) {
//     function inner() {
//       console.log('delayed output: ', param);
//     }
//     return inner;
//   }
//   setTimeout(outer('something to print'), 1000)