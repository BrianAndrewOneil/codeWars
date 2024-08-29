// return the two oldest/oldest ages within the array of ages passed in.

const twoOldestAges = ages => ages.sort( (a,b)=>a-b ).slice(-2)

console.log(twoOldestAges([1,34,34,56,43,23,45,67,89,23,43]), [67,89])