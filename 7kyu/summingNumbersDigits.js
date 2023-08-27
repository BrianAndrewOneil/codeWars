//takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. 

const sumDigits = n => Math.abs(n).toString().split('').reduce( (acc,c)=>acc+(+c),0 )

console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);