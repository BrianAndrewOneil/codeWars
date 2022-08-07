//Given two integers a and b, which can be positive or negative, 
//find the sum of all the integers between and including them and return it. 
//If the two numbers are equal return a or b.
function getSum(a,b){
    let start=a
    let end=b
    if(a>b){
      end=a
      start=b
     }
     let sum=start
     while(start<end){ 
      start+=1
      sum+=start
     }
     return sum
  }