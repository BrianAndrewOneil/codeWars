//Given an array, determine whether the numbers are in ascending order. An array is said to be in ascending order 
//if there are no two adjacent integers where the left integer exceeds the right integer in value.

const inAscOrder = arr => arr.every( (c,i,a) =>  i==0 || c>a[i-1] ) 
// const inAscOrder = arr => arr.filter( (c,i,a) => i==0 || c>a[i-1] )


console.log(inAscOrder([1, 2, 4, 7, 19]), true, 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');
console.log(inAscOrder([1, 2, 3, 4, 5]), true, 'The list of numbers "1, 2, 3, 4, 5" is in ascending order');
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]), false, 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order');
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), false, 'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order');