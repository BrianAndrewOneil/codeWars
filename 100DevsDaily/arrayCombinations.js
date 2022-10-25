//given an array of arrays, return the number of unique arrays that can be formed by picking exactly one element from each subarray.
function solve(arr) {
    let ans = arr.map((array)=>array.filter((num,index)=>array.indexOf(num)===index))
    return ans.reduce((acc,c)=>c.length*acc,1)
  }