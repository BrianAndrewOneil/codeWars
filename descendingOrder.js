//Take any non-negative integer as an argument and return it with its digits in descending order
let descendingOrder = n => +n.toString().split('').sort((a,b)=>b-a).join('')