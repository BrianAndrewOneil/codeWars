//Takes 2 integers in form of a string as an input, and outputs the sum (also as a string)

const sumStr = (a,b) => ((+a + +b).toString())

console.log(sumStr("4","5"), "9");
console.log(sumStr("34","5"), "39");
console.log(sumStr("2",""), "2");