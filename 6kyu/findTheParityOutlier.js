//Return the one outlier value, defined as being either the only odd or only even integer
function findOutlier(integers){
    if (integers.filter(i=>i%2==0).length==1){
      return(integers.filter(i=>i%2==0).pop())
    }else{
      return(integers.filter(i=>i%2!=0).pop())
    }
  }
