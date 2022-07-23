//Return the sum of all the multiples of 3 or 5 below the number passed in. Return 0 if num is negative.
function solution(number){
    let ans=0
    if(number<0){
      return ans
    }
    for (let i=0;i<number;i++){
      if(i%3==0||i%5==0){
        ans+=i
      }else if(i%3==0&i%5==0){
        ans+=i
      }
    }
    return ans
  }