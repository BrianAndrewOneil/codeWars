//Given a 2D array of integers, return the sum of the lowest value in each row.
const sumOfMinimums = (arr) => {
    let ans = arr
        .map(ar1=>ar1.sort((a,b)=>a-b))
        .reduce((acc,c)=>c[0]+acc,0)
    return ans
}

  console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76)