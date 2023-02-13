//A function that accepts an integer n and a string s as parameters, 
//and returns a string of s repeated exactly n times.
let repeatStr=(n, s)=>s.repeat(n)

console.log(repeatStr(2, 'hello'), 'hellohello')
console.log(repeatStr(0, 'hello'), '')