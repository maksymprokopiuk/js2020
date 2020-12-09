{
    // Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати
    // метод test та регулярні вирази).
    // const task1 = [
    //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit.0',
    //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    //     '1Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    //     'Lorem, ipsum dolor sit amet con3sectetur adipisicing elit.',
    //     'Lorem, ipsum dolor sit amet 1consectetur adipisicing elit.',
    // ]

    // for (let i = 0; i < task1.length; i++) {
    //     const regTask1 = /\d/
    //     let regExp = regTask1.test(task1[i])
    //     if (regExp) {
    //         console.log(task1[i]);
    //     }
    // }
}
{
    // Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
    // const task2 = [
    //     'ALorem, ipsum dolor sit amet consectetur adipisicing elit.',
    //     'BLorem, ipsum dolor sit amet consectetur adipisicing elit.0',
    //     'CLorem, ipsum dolor sit amet consectetur adipisicing elit.',
    //     'DLorem, ipsum dolor sit amet consectetur adipisicing elit.',
    //     'E1Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    //     'FLorem, ipsum dolor sit amet con3sectetur adipisicing elit.',
    //     'GLorem, ipsum dolor sit amet 1consectetur adipisicing elit.',
    // ]
    // for (let i = 0; i < task2.length; i++) {
    //     const regTask2 = /\d/
    //     let regExp = regTask2.test(task2[i])
    //     if (!regExp) {
    //         console.log(task2[i]);
    //     }
    // }
}
{
    // Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
    // const task3 = [
    //     '1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    //     '2 Lrm, psm dlr st mt cnscttr dpscng lt.'
    // ]
    // const reg = /[aeiouy]+/i
    // for (let i = 0; i < task3.length; i++) {
    //     if (reg.test(task3[i])) {
    //         console.log(task3[i]);
    //     }
    // }
}
{
    // Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
    // const task3 = [
    //     '1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    //     '2 Lrm, psm dlr st mt cnscttr dpscng lt.'
    // ]
    // const reg = /[aeiouy]+/i
    // for (let i = 0; i < task3.length; i++) {
    //     if (!reg.test(task3[i])) {
    //         console.log(task3[i]);
    //     }
    // }
}
{
    // Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
    // const task5 = [
    //     'Lorem, 1ipsum dolor sit amet consectetur adipisicing elit.',
    //     'Lorem, 2ipsum dolor sit amet consectetur adipisicing elit.',
    //     'Lorem, 3ipsum dolor sit amet consectetur adipisicing elit.',
    //     'Lorem, 4ipsum dolor sit amet consectetur adipisicing elit.',
    //     'Lorem, 5ipsum dolor sit amet consectetur adipisicing elit.',
    //     'Lorem, 6ipsum dolor sit amet consectetur adipisicing elit.',
    //     'Lorem, 7ipsum dolor sit amet consectetur adipisicing elit.',
    // ]
    // const reg = /[13]+/i
    // for (let i = 0; i < task5.length; i++) {
    //     if (reg.test(task5[i])) {
    //         console.log(task5[i]);
    //     }
    // }
}
{
    // Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
    // const text = '0Lorem, 9ipsum do8lor s5it am2et co31nsectetur adipisicing elit.4'
    
    // for (let i = 0; i < text.length; i++) {
    //     let reg = /[0-9]/g
    //     if (reg.test(text[i])) {
    //         console.log(text[i]);
    //     }
    // }
}
{
    // Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
    // const text = 'Пунктуація апостроф	(\' , ’) дужки	([ ], ( ), { }, ⟨ ⟩ двокрапка	(:) кома	(,) тире	(‒, –, —, ―) три крапки	(…, …) знак оклику	(!) крапка	(.) дефіс	(-, ‐) знак питання	(?) лапки	(‘ ’,  », « », « ») крапка з комою	(;) Скісна риска	(/) Розділювачі пробіл	( ) ( ) ( ) (␠) (␢) (␣) інтерпункт	(·) Основні друкарські знаки амперсанд	(&) равлик	(@) зірочка	(*) обернена скісна риска	(\) маркер списку	(•) циркумфлекс	(^) макрон	(¯) хрестик	(†, ‡) символ градуса	(°) перевернутий знак оклику	(¡) перевернутий знапитання	(¿) октоторп	(#) символ номера	(№) порядковий індикатор	(º, ª) відсоток	(%) проміле	(‰) базисний пункт	(‱) символ абзацу	(¶) штрих	(′, ″, ‴) символ параграфа	(§) тильда	(~) підкреслення	(_) вертикальна риска	(|, ¦) Інтелектуальна власність знак охорони авторського права	(©) символ правової охорони товарного знаку	(®) символ знаку обслуговування	(℠) знак охорони суміжних прав для фонограми	(℗) символ товарного знаку	(™) Символи валют символ валюти	(¤) символи валют ₳ ฿ ฿ ₵ ¢ ₡ ₢ R$ ₠ $ ₫ Indian Rupee symbol.svg ৳ ₯ € £ ƒ ₣ ₲ ₴ ₭ ℳ ₥ ₦ ₧ ₱ ₰ £ ₨ ₪ Kazakhstani tenge symbol.svg ₮ ₩ ¥ ៛ …'

    // let symbols = ''
    // for (let i = 0; i < text.length; i++) {
    //     const reg = /[^a-zA-Z0-9\sа-яА-ЯіІїЇ]/gmi // 1 варіант всі символи
    //     // const reg = /[.,;:…()"!?‒–—―]/gmi // 2 варіант конккретні символи
    //     if (reg.test(text[i])) {
    //         symbols = symbols + ' ' + (text[i])
    //     }
    // }
    // console.log(symbols);
}
{
    // Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
    // const text = 'Lorem - ipsum dolor sit amet consectetur adipisicing elit. Odit excepturi sunt aperiam voluptatum, libero nisi consequatur, reprehenderit quibusdam veniam mollitia sequi asperiores temporibus quae esse dolor perspiciatis alias soluta autem distinctio. Doloribus ullam, odit velit saepe quam sequi dolorum ipsam harum dolor molestiae itaque, magni laborum laboriosam provident voluptatum. Minima vero cum cupiditate ad aliquam iusto sequi, consequatur accusantium reprehenderit, consequuntur amet quas veritatis maxime id similique delectus nesciunt ipsa velit expedita accusamus aut quaerat voluptatem dicta perspiciatis. Sit temporibus quaerat libero, ratione esse possimus repudiandae mollitia! Esse ab sint tenetur! Sed, eveniet? Dolorum magnam cum dignissimos, harum nemo obcaecati.'
    
    // const reg = /.{1,}?[-.,?!]/gm
    // let result = text.match(reg)
    
    // for (const text of result) {
    //     console.log(text.trim());
    // }
}
{
    // Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mmмісяць, yyyy- рік).
    // const text = [
    //     'Lorem, 01/01/1940 ipsum dolor amet consectetur adipisicing elit.',
    //     'Lorem, 08.12.2020 ipsum dolor amet consectetur adipisicing elit.',
    //     'Lorem, ipsum dolor amet consectetur adipisicing elit.',
    //     'Lorem, ipsum dolor amet 45.32.5220 consectetur adipisicing elit.',
    // ]
    // for (let i = 0; i < text.length; i++) {
    //     const reg = /[0-3]{1}[0-9]{1}[.]{1}[0-1]{1}[0-9]{1}[.]{1}[1-2]{1}[09]{1}[0-9]{2}/gm
    //     if (reg.test(text[i])) {
    //         console.log(text[i]);
    //     }
    // }
}
{
    // Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
    // const numbers = '456 25 478 7 65 65544 45 4 11253 58 8 77 415 55 862 5 77'
    // const reg = /\b[0-9]{2}\b/gm
    // let result = numbers.match(reg)
    // console.log(`${result.length} - двоцифрових чисел у рядку`);    
}
// const reg = /\b[0-9]{2}\b/gm
// const reg2 = new RegExp('\\b[0-9]{2}\\b', 'gm')
// const reg3 = new RegExp(String.raw`\b[0-9]{2}\b`, 'gm')
// console.log(reg);
// console.log(reg2);
// console.log(reg3);


// Напишите регулярное выражение, которое ищет многоточие (3 и более точек подряд).
// let regexp = /\.{3,}/g;
// console.log( "Привет!... Как дела?.....".match(regexp) ); // ..., .....

// Напишите регулярное выражение, которое ищет HTML-цвета в формате #ABCDEF: 
// первым идёт символ #, и потом – 6 шестнадцатеричных символов.

// let regexp = /#\w{6}\b/g

// let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
// console.log(str.match(regexp))  // #121212,#AA00ef

// class CoffeeMachine {
//     // ...
//     constructor(power) {
//      this._power = power;
//     }
//     get power() {
//      return this._power;
//     }
// }
   
//    // создаём кофеварку
//    let coffeeMachine = new CoffeeMachine(100);
   
//    console.log(`Мощность: ${coffeeMachine.power}W`);
   
//    coffeeMachine.power = 25; // Error 

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRndInteger(1, 100));

// let str = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
// let regexp = /<a href=".*?" class="doc">/g;

// // Упс! Две ссылки в одном совпадении!
// console.log( str.match(regexp) );

// let str = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
// let regexp = /<a href=".*?" class="doc">/g;

// // Неправильное совпадение!
// console.log( str.match(regexp) );

// let str1 = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
// let str2 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
// let regexp = /<a href="[^"]*" class="doc">/g;

// // Работает!
// console.log( str1.match(regexp) ); // совпадений нет, всё правильно
// console.log( str2.match(regexp) ); // <a href="link1" class="doc">, <a href="link2" class="doc">

// Найти все HTML-комментарии в тексте:

// let regexp = /<!--.*?-->/gms;

// let str = `... <!-- My -- comment
//  test --> ..  <!----> ..
// `;

// console.log( str.match(regexp) ); // '<!-- My -- comment \n test -->', '<!---->'

// Создайте регулярное выражение, чтобы найти все (открывающие и закрывающие) HTML-теги с их атрибутами.
// let regexp = /<[^<>]+>/g;

// let str = '<> <a href="/"> <input type="radio" checked> <b>';

// console.log( str.match(regexp) ); // '<a href="/">', '<input type="radio" checked>', '<b>'

// let str = '<h1>Hello, world!</h1>';

// let tag = str.match(/<(.*?)>/);

// console.log( tag[0] ); // <h1>
// console.log( tag[1] ); // h1
// console.log( tag );

// let str = '<span class="my">';

// let regexp = /<(([a-z]+)\s*([^>]*))>/;

// let result = str.match(regexp);
// console.log(result[0]); // <span class="my">
// console.log(result[1]); // span class="my"
// console.log(result[2]); // span
// console.log(result[3]); // class="my"
// console.log(result);

// let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

// // results - не массив, а перебираемый объект
// console.log(results); // [object RegExp String Iterator]

// for(let result of results) {
//     console.log(result);
//     // первый вывод: <h1>,h1
//     // второй: <h2>,h2
//   }

// console.log(results[0]); // undefined (*)

// results = Array.from(results); // превращаем в массив

// console.log(results[0]); // <h1>,h1 (первый тег)
// console.log(results[1]); // <h2>,h2 (второй тег)


// let str = "John Bull";
// let regexp = /(\w+) (\w+)/;

// console.log( str.replace(regexp, '$2, $1') ); // Bull, John


let regexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;

let str = "2019-10-30, 2020-01-01";

console.log( str.replace(regexp, '$<day>.$<month>.$<year>') );
// 30.10.2019, 01.01.2020