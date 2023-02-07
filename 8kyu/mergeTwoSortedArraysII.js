//merge two arrays of Ints into a single one, sorted in asc order. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

let mergeArrays=(arr1, arr2)=>arr1.concat(arr2).sort((a,b)=>a-b).filter((e,i,a)=>e!=a[i+1])

console.log( mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log( mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log( mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]), [1, 2, 3, 4, 5, 7, 9, 10, 11, 12])