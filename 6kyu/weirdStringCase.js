//Given a string, return the same string with all even indexed characters in each word upper cased, 
//and all odd indexed characters in each word lower cased.
const toWeirdCase = string => string.split(' ').map(word=>word.toLowerCase().split('').map((c,i)=>i%2===0?c.toUpperCase():c).join('')).join(' ')

console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt')
console.log(toWeirdCase('hello'), 'HeLlO')