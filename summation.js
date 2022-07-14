//Find the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
var summation = function (num) {
    let ans=0
    while(num>0){
      ans+=num
      num-=1
    }
    return ans
  }