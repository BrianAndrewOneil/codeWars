//given an array of arrays, return the number of unique arrays that can be formed by picking exactly one element from each subarray.
function solve(arr) {
    let ans = arr.map((array)=>array.filter((num,index)=>array.indexOf(num)===index))
    return ans.reduce((acc,c)=>c.length*acc,1)
  }

 //Leon#1: return arr.map(sA=>new Set(sA.size).reduce((a,c)=>a*c,1)

 //Leon#2: const solve=arr=>arr.reduce((a,c)=>a*new Set(c).size,1)