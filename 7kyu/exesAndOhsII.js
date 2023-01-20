//Check to see if a string has the same amount of 'x's and 'o's
//The method must return a boolean and be case insensitive.
// input to lowecase
// count char x
// count char o
// return xcount === ocount
let XO = str => str.toLowerCase().split('').filter(e=>e==='x').length===str.toLowerCase().split('').filter(e=>e==='o').length

console.log(XO("ooxx"), true)
console.log(XO("xooxx"), false)
console.log(XO("ooxXm"), true)
console.log(XO("zpzpzpp"), true) // when no 'x' and 'o' is present should return true
console.log(XO("zzoo") , false)