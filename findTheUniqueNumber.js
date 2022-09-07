//Given an array with numbers, return the one that is not equal to the others. The array may be very long.
function findUniq(arr) {
    if(arr[0]!==arr[1]&&arr[0]!==arr[2]) return arr[0]
    let ans=0
    while(ans<arr.length){
      if((arr[ans])!=(arr[ans+1])) return arr[ans+1]
      ans++
    }
    return ans
  }
