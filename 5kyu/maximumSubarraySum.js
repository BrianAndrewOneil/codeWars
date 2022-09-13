//Find the maximum sum of a contiguous subsequence in an array or list of integers
function maxSequence(arr){
  let best = 0
  let localHigh=0
  arr.forEach( (n,i)=>{
    for (i; i<(arr.length);i++) {
      localHigh+=arr[i]
      if (localHigh>best) best=localHigh
      }
    localHigh=0
  })
  return best
}
