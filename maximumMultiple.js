function maxMultiple(divisor, bound){
    //return largest integer divisible by divisor and less than or equal to bound
    let answer=0
    for(let i=1; i<=bound; i++){
      if (i%divisor==0){
        answer=i
      }
    }
    return answer
  }