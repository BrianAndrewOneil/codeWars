//You get an array of numbers, return the sum of all of the positives ones.

let positiveSum=arr=>arr.filter(e=>e>0).reduce((acc,c)=>acc+c,0)

console.log(positiveSum([1,-4,7,12]), 20)
console.log(positiveSum([]), 0)