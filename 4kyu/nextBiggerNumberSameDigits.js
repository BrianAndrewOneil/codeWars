//Take a positive integer and return the next bigger number that can be formed by rearranging its digits. 
//https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

//NOT SOLVED YET--this solution is too inefficient to pass

const nextBigger = (n) => {
    if(n<10) return -1
    let result = [];
    let arrN=n.toString().split('')
  
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
       }
     }
   }
  
   permute(arrN)
  
   result = result.map(e=>+e.join('')).sort((a,b)=>a-b)
   return result.filter(e=>e>n)[0] || -1
  }

console.log(nextBigger(12),21)
console.log(nextBigger(513),531)
console.log(nextBigger(2017),2071)
console.log(nextBigger(414),441)
console.log(nextBigger(144),414)
console.log(nextBigger(11),-1)