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
