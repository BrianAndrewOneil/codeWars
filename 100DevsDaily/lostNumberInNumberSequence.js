//An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, 
//then the remaining numbers were mixed. Find the number that was deleted.
function findDeletedNumber(arr, mixArr) {
    let ans=0
    arr.forEach(e=>mixArr.includes(e)?e:ans=e)
    return ans
  }


  console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
  console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
  console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')