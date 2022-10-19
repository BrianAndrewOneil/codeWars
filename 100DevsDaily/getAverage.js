//Given an array of scores--integers only and the array is never empty--return the average as an integer rounded down.

let getAverage=scores=>Math.floor(scores.reduce((acc,c)=>acc+c,0)/scores.length)

console.log(getAverage([1,1,1,1,1,1,1,2]))