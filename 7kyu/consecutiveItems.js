//Determine whether or not a and b appear consecutively in arr, and return a boolean value 
//(True if a and b are consecutive, False otherwise). 

const consecutive = (arr, a, b) => Math.abs(arr.indexOf(a)-arr.indexOf(b))==1

console.log(consecutive([1, 3, 5, 7], 3, 7), false);
console.log(consecutive([1, 3, 5, 7], 3, 1), true);
console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4), true);
