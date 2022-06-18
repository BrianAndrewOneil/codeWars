//Square every digit of a number and concatenate them.
let squareDigits = num => parseInt(num.toString().split('').reduce((acc,c)=>acc+(c*c).toString(),0 ))