//An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, 
//then the remaining numbers were mixed. Find the number that was deleted.
function findDeletedNumber(arr, mixArr) {
    let ans=0
    arr.forEach(e=>mixArr.includes(e)?e:ans=e)
    return ans
  }

  //The above solution is quadratic. A more efficient solution is:
  function findDeletedNumber2(arr, mixArr) {
    if(arr.length===mixArr.length) return 0
    let sum1=arr.reduce((acc,c)=>acc+c,0)
    let sum2=mixArr.reduce((acc,c)=>acc+c,0)
    return sum1-sum2
  }

  console.log(findDeletedNumber2([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
  console.log(findDeletedNumber2([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
  console.log(findDeletedNumber2([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')