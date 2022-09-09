//Given an array of integers, find an index N where the sum of the integers to the left of N is equal to
//the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
function findEvenIndex(arr)
{
  let ans=-1
  arr.forEach((e,i)=>{  
    if( (arr.slice(0,i).reduce((acc,c)=>acc+c,0))==arr.slice(-(arr.length-i-1)).reduce((acc,c)=>acc+c,0)) ans=i
  })
  if(arr.reduce((acc,c)=>acc+c)-arr[arr.length-1]==0) return (arr.length-1)
  else if (arr.length==2&&arr[1]==0) return 0
  else return ans
}
