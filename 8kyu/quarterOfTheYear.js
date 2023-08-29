//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = m => m<4 ? 1 : m<7 ? 2 : m<10 ? 3 : 4

console.log(quarterOf(3), 1)
console.log(quarterOf(8), 3)
console.log(quarterOf(11), 4)