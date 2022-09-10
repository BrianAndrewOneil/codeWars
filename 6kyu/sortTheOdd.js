//Given an array of numbers, sort the odd numbers in ascending order while
//leaving the even numbers at their original positions.
function sortArray(array) {
    let odds=array.filter(e=>e%2!=0).sort((a,b)=>a-b)
    let ans=array.map(e=>e%2==0?e:odds.shift() )
    return ans
  }