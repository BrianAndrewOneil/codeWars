//Given a two-dimensional array of integers, return the flattened version 
//of the array with all the integers in the sorted (ascending) order.
function flattenAndSort(array) {
  let ans=[]
  array.map(a=>a.map(n=>ans.push(n)))
  return ans.sort((a,b)=>a-b)
}
