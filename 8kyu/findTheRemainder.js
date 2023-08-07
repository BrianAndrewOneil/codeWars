//Accepts two integers and returns the remainder of dividing the larger value by the smaller value.
//Division by zero should return NaN.

const remainder = (n, m) => n>m ? n%m : m%n

console.log(remainder(17,5), 2)
console.log(remainder(13,72), 7)
console.log(remainder(0,1), 'NaN')