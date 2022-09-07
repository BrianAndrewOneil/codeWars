//Given an array of integers, find the one that appears an odd number of times.
function findOdd(A) {
    let count=1
    for (var num of A){
      for(let i=0;i<A.length;i++){
        if(A[i]==num){
          count++
          }
        }
        if(count%2==0){
          return num
        }else{
          count=1
        }
     }
  }
