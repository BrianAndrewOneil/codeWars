//Given a 2D array of integers, return the sum of the lowest value in each row.
function sumOfMinimums(arr) {
    return arr
        .map(array=>array.sort((a,b)=>a-b))
        .reduce((acc,c)=>c[0]+acc,0)
  }

  console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]))