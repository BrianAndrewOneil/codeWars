//Write a function which calculates the average of the numbers in a given list. Empty arrays should return 0.

let find_average=array=>array.reduce((acc,c)=>c+acc,0)/array.length

console.log(find_average([1,2,3,4,5]))