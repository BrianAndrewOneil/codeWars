//An array is called zero-plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long.
//Return the number of zero sequences if the given array is zero-plentiful, otherwise 0.
function zeroPlentiful(arr){
    let flag = false
    let ans = 0
    let count = 0
    for (var i of arr){
      if (i==0){
        count+=1
        if(count==4){
          ans+=1
          flag=true
        }
      }else if(count>0) {
        if (flag==false) {
          return 0
          }
          else{
          count=0
          flag=false
          }
        }
        else {
          count=0
          flag=false
          }
    }if (count>0&&flag==false) return 0
    return ans
  }