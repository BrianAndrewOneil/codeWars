//Write a function that can return the smallest value of an array or the index of that value. 
//The function's 2nd parameter will tell whether it should return the value or the index.
//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

const min = (arr, toReturn) => toReturn==='value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr))

console.log(min([1,2,3,4,5,0,-3], 'value'), 1)
console.log(min([1,2,3,4,5,0], 'index'), 0)
console.log(min([ 500, 250, 750, 5000, 1000, 230 ], 'index'), 5)