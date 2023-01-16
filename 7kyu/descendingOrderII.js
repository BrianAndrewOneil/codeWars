//Take any non-negative integer as an argument and return it with its digits in descending order
let descendingOrder = n => +n.toString().split('').sort((a,b)=>b-a).join('')

console.log(descendingOrder(564723))
console.log(descendingOrder(8973453187534))