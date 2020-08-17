// let arr = [11,5,6,10]
// arr.forEach((el, i) => {
// if(el>=4 && el<=6) document.write(`${}`)
// })

// let arr = ['afafaa', 'jfhfhf', 'jfhfhf', 'hfffffh', 'fssddewdf', 'khfrhge']

// let count = arr.reduce((prevC,word)=>{
//      if (word[0] === word[word.length-1])
//      return prevC+1
//      else
//      return prevC
// }, 0)

// document.write(count)

// 3
// let arr = new Array(10)
// arr.fill(1)
// let b = arr.map((el,i,a)=>a[i]=Math.floor(Math.random()*100))
// document.write(b+'<br>')

// let res= b.filter((el,i,a) => el > a[0]);

// document.write(res)

// 4
// let arr = [23,5,67,34,5,67,87,78,54,4,65]
// let index78 = arr.indexOf(78)
// if (index78===-1)
// document.write('No')
// else {
//      let resArr = arr.slice(index78+1)
//      const s = resArr.reduce((prevS,el)=>prevS + el)
//      document.write(s)
// }

// let a = [1,33,12,65,87,54,32,21,6,3,2,9]
// бульбашковий
// let zamina
// do {
//      zamina = false
//      for (let i = 1; i < a.length; i++) {
//           if (a[i-1]>a[i]) {
//                let t = a[i-1]
//                a[i-1] = a[i]
//                a[i] = t
//                zamina = true
//           }
//      }
// } while (zamina);
// document.write(a)

//   let arr = [11, 5, 8, 10, 4, 7, 12];
      //   arr.forEach((el, i) => {
      //     if (el >= 4 && el <= 6) document.write(`${i} <br>`);
      //   });
      //   let arr = ["asdsdb", "aassaf", "rdfdfr", "aasdfa", "wsdsdpf"];
      //   let count = arr.reduce((prevC, word) => {
      //     if (word[0] === word[word.length - 1]) return prevC + 1;
      //     else return prevC;
      //   }, 0);
      //   document.write(count);
      // Задача 3. Дано послідовність чисел, які згенеровано випадковим чином.
      // Сформувати новий масив, у якому елементи є більшими за перший елемент.
      //   let arr = new Array(10); //[,,,,,,,,,,]
      //   arr.fill(1); //[1,1,1,1,1,1,1,1,1,1,1]
      //   let b = arr.map((el, i, a) => (a[i] = Math.floor(Math.random() * 100)));
      //   document.write("b: ");
      //   document.write(b);
      //   let res = b.filter((el, i, a) => el > a[0]);
      //   document.write("<br>res: ");
      //   document.write(res);
    //   let arr = [23, 3, 56, 8, 6, 78, 34, 78, 67];
    //   let index78 = arr.indexOf(78);
    //   if (index78 === -1) document.write("No element 78 in the array");
    //   else {
    //     let resArr = arr.slice(index78 + 1);
    //     const s = resArr.reduce((prevS, el) => prevS + el);
    //     document.write(`sum=${s}`);
    //   }


    //   let a = [3, 23, 4, 6, 45, 67, 1];
      //Бульбашковий
      //   let zamina;
      //   do {
      //     zamina = false;
      //     for (let i = 1; i < a.length; i++) {
      //       if (a[i - 1] > a[i]) {
      //         let t = a[i - 1];
      //         a[i - 1] = a[i];
      //         a[i] = t;
      //         zamina = true;
      //       }
      //     }
      //   } while (zamina);
      //   document.write(a);
      //Шейкер сортування
      //   let zamina;
      //   do {
      //     //Прямий хід (зліва-направо)
      //     zamina = false;
      //     for (let i = 1; i < a.length; i++) {
      //       if (a[i - 1] > a[i]) {
      //         let t = a[i - 1];
      //         a[i - 1] = a[i];
      //         a[i] = t;
      //         zamina = true;
      //       }
      //     }
      //     if (!zamina) break;
      //     //Зворотній хід (зправа - наліво)
      //     zamina = false;
      //     for (let i = a.length - 1; i >= 1; i--) {
      //       if (a[i - 1] > a[i]) {
      //         let t = a[i - 1];
      //         a[i - 1] = a[i];
      //         a[i] = t;
      //         zamina = true;
      //       }
      //     }
      //   } while (zamina);
      //   document.write(a);
      //Вибіркою
      //   for (let i = 0; i < a.length - 1; i++) {
      //     //Знайти номер мінімального починаючи з і-го елемента
      //     let minIndex = i;
      //     for (let j = i + 1; j < a.length; j++) {
      //       if (a[j] < a[minIndex]) minIndex = j;
      //     }
      //     if (minIndex !== i) {
      //       let t = a[minIndex];
      //       a[minIndex] = a[i];
      //       a[i] = t;
      //     }
      //   }
      //Вставок
    //   for (let i = 1; i < a.length; i++) {
    //     let t = a[i];
    //     let j = i - 1;
    //     while (j >= 0 && a[j] > t) {
    //       a[j + 1] = a[j];
    //       j--;
    //     }
    //     a[j + 1] = t;
    //   }
    //   document.write(a);
      //Бінарний пошук
    //   let el=32
    //   let elIndex=-1
    //   let startIndex=0, endIndex=a.length-1
    //     while(startIndex<=endIndex){
    //         let averageIndex=Math.floor((startIndex+endIndex)/2)
    //         if(el===a[averageIndex])
    //          {
    //             elIndex=averageIndex
    //             break
    //          }
    //          if(el>a[averageIndex])
    //             startIndex=averageIndex+1
    //         else
    //             endIndex=averageIndex-1
    //     }      
    //     if(elIndex!==-1)
    //      document.write(`index= ${elIndex}`)
    //     else
    //       document.write('No el in array')