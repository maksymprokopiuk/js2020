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

// Приклад роботи з масивами.

// var a = [1, 2, 1, 5];  //Спочатку масив порожній
// //-------- Генерування елементів масиву ----
// for (var i = 0; i < a.length; i++) {
//     a[i] = 0.5 - Math.random();
// }
// //--------- Знайти суму усіх ------------
// var s = 0;
// for (var i = 0; i < a.length; i++) {
//     s += a[i];
// }
// document.write("sum=" + s);
// //----------        
// var s = 0;
// for (var i = a.length / 2; i < a.length; i++) // Як змінюється номер елемента
// {                  //Що робити з кожним елеменом з таким номером
//     s += a[i];
// }
// document.write("<br>sum=" + s);
// //----------- СУМА ДО ПЕРШОГО ДОДАТНЬОГО -----------
// //------  Перший спосіб ----
// var s = 0;
// var i = 0;
// while (i < a.length && a[i] <= 0) {
//     s += a[i];
//     i++;
// }
// //------ Другий спосіб -----
// var s = 0;
// for (var i = 0; i < a.length; i++) {
//     if (a[i] > 0)
//         break;
//     s += a[i];
// }
// //------- Третій спосіб -----
// var s = 0;
// for (var i = 0; i < a.length && a[i] <= 0; i++) {
//     s += a[i];
// }

// Приклад. 
// Задача 1. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).

// var paymants = [100, 210, 300, 23, 45, 233, 100, 210, 300, 23, 45, 233];
//         //1 за весь рік (суму усіх елементів)
//         var sumYear = 0;
//         for (var i = 0; i < paymants.length; i++) {
//             sumYear += paymants[i];
//         }
//         document.write("Summ per year =" + sumYear);
//         //2 у першій половині року;
//         var sumFirstYearHalf = 0;
//         var t = paymants.length / 2;
//         for (var i = 0; i < t; i++) {
//             sumFirstYearHalf += paymants[i];
//         }
//         document.write("<br>Summ per first half of year =" + sumFirstYearHalf);
//         //3 у другій половині року;
//         var sumSecondHalfOfYear = 0
//         t = paymants.length / 2;
//         for (var i = t; i < paymants.length; i++) {
//             sumSecondHalfOfYear += paymants[i];
//         }
//         document.write("<br>Summ per second half of year =" + sumSecondHalfOfYear);
//         //4)	за літо;
//         var sumSummer = 0;
//         for (var i = 5; i <= 7; i++) {
//             sumSummer += paymants[i];
//         }
//         document.write("<br>Summ per summer =" + sumSummer);
//         //5)	за ІІ квартал.
//         var sumKv2 = 0;
//         for (var i = 3; i <= 5; i++) {
//             sumKv2 += paymants[i];
//         }
//         document.write("<br>Summ per Kv2 =" + sumKv2);
//         //6)    за парні місяці (оскільки нумерація починається від 0, то нам треба розглядати непарні місяці)
//         var sumP = 0;
//         for (var i = 1; i <paymants.length; i+=2) {
//             sumP += paymants[i];            
//         }
//         document.write("<br>SummP =" + sumP);
//         //7)    за місяці, які є початковими у сезоні (весна, літо, осінь, зима)
//         var sumPS = 0;
//         for (var i = 2; i < paymants.length; i += 3) {
//             sumPS += paymants[i];
//         }
//         document.write("<br>SummPS =" + sumPS);

//Задача 2. Дано послідовність оцінок учня. Підрахувати кількість:
//1)	двійок
//2)	кількість хороших оцінок (добре, відмінно);
//3)	кількість оцінок, які нижче середнього.
// //Спитаємо скільки оцінок
// var scoresCount = parseInt(prompt("Scores count =", "5"));

// //Створимо масив для оцінок
// var scores = new Array(scoresCount);

// //Введемо оцінки учня
// for (var i = 0; i < scores.length; i++) {
//     scores[i] = parseInt(prompt("Scores №" + (i + 1), "0"));
// }

// //Рахуємо кількість двійок
// var count2 = 0;
// for (var i = 0; i < scores.length; i++) { //Як змінюються номери елементів "і"
//     if (scores[i] == 2)                //Що треба зробити з кожним елементом з номером "і",тобто  "scores[i]" 
//         count2++;
// }
// document.write("Count 2 =" + count2);
// //2)	кількість хороших оцінок (добре, відмінно);
// var countGood = 0;
// for (var i = 0; i < scores.length; i++) { //Як змінюються номери елементів "і"
//     if (scores[i] >= 4)                //Що треба зробити з кожним елементом з номером "і",тобто  "scores[i]" 
//         countGood++;
// }
// document.write("<br>Count good =" + countGood);
// //3)	кількість оцінок, які нижче середнього.
// //---------- Знаходимо суму ----
// var sum = 0;
// for (var i = 0; i < scores.length; i++) {
//     sum += scores[i];
// }
// var average = sum / scores.length;
// //---------- Рахуємо кількість тих, які більші за середнє
// var countLessThanAversge = 0;
// for (var i = 0; i < scores.length; i++) {
//     if (scores[i] < average) {
//         countLessThanAversge++;
//     }
// }
// document.write("<br>Count less than aversge =" + countLessThanAversge);


// var a=[1,2,3],b=[];
// for (var i=0;i<a.length;i++){b[i]=a[i]};
// b[1]='Ой!';
// alert(a[1]); //2 як і має бути

// Приклад 1 Створити скрипт, який серед введених прізвищ знаходить однофамільців.
// let a = []
// var n=+prompt('n=','');
// for (var i=0;i<n;i++){
// 	a[i]=prompt('Введіть прізвище:','');
// };
// var o=[];
// next:for (i=0;i<n;i++){
// 	for (var j=i+1;j<n;j++){
// 		if (a[i]==a[j] ) {      //знайшли однофамільця
// 			for (var l=0;l<o.length;l++){
// 				if(a[i]==o[l]) continue next;  //він вже є в списку однофамільців
// 			}; //l
// 			o[o.length]=a[i];  //додаємо до списку однофамільців
// 			continue next;
// 		}; //if
// 	};  // j
// }; // i
// if(o.length){alert(o)} else {alert('однофамільців нема')};

// Приклад 2  Знайти всі прості числа до 1000 та їх суму за допомогою решета Ерастрофена.
// var c=[];
// const n=1000;
// for(var i=1;i<n;i++){c[i]=true}; 	//вважаємо всі числа простими
// var p=2;
// while (p<=Math.sqrt(n)){         
// 	for (i=2*p;i<n;i=i+p){          	//всі числа кратні р вважаємо не простими
// 		c[i]=false;
// 	};
// 	i=p+1;					//шукаємо наступне просте число
// 	while (!c[i]){
// 		i++;
// 	};
// 	p=i;
// };
// var s=0;					//шукаємо суму
// for (i=1;i<n;i++){
// 	if (c[i]){
// 		document.writeln(i);
// 		s=s+i;
// 	};
// };
// alert('Сума рівна'+s);

// Приклад 3  Заповнити матрицю послідовністю натуральних чисел по спіралі(починаючи з верхнього лівого 
// кута,  за годинниковою стрілкою). Вивести результат у вигляді таблиці.

// var n=+prompt('Розмірність',''),i,j,l,e=1;
// var m=[];       //ініція матриці
// for(i=0;i<n;i++){
// 	m[i]=[];
// };
// for ( l=0;l<=(n-1)/2;l++){ 				
// 	for (j=l;j<n-l;j++){m[l][j]=(e++)};			//перший рядок
// 	for (i=l+1;i<n-l;i++){m[i][n-l-1]=(e++)};		//останній стовпець
// 	for (j=n-l-2;j>=l;j--){m[n-l-1][j]=(e++)};	//останній рядок
// 	for (i=n-l-2;i>l;i--){m[i][l]=(e++)};		//перший стовпець
// };
// //вивід таблиці за допомогою тегів
// document.writeln('<table border="2" cellspacing="0">');          
// for (i=0;i<n;i++){
// 	document.write('<tr>');
// 	for (j=0;j<n;j++){
// 		document.write('<td>'+m[i][j]+'</td>');
// 	};
// 	document.writeln('</tr>');
// }; document.writeln('</table>');

