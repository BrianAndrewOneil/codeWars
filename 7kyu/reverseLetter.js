//Given a string, return the reverse of the string and omit all non-letter characters.

const reverseLetter = str => str.split('').reverse().filter(d=>d!==d.toUpperCase()).join('')

console.log(reverseLetter("krishan"),"nahsirk")
console.log(reverseLetter("ultr53o?n"),"nortlu")
console.log(reverseLetter("ab23c"),"cba")
console.log(reverseLetter("krish21an"),"nahsirk")