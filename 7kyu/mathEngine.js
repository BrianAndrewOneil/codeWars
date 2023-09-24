//Given an array of numbers, return a number that is the sum of:
//1. The product of all the non-negative numbers
//2. The sum of all the negative numbers

const mathEngine = arr => arr==null ? 0 : (arr.filter(n=>n>0).reduce((acc,c)=>acc*c,1)+arr.filter(n=>n<0).reduce((acc,c)=>acc+c,0))

console.log(mathEngine([1, 2, 3, -4, -5]), -3)
console.log(mathEngine(null), 0)