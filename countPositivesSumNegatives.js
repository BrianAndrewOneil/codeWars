function countPositivesSumNegatives(input) {
    if(input==null || input.length==0){return([])}
    let answer = []
    let count = 0
    let sum = 0
    for (let i=0; i<input.length; i++){
      if (input[i]>0){
        count+=1
      }else if (input[i]<0){
        sum+=input[i]
      }
    }
  answer.push(count, sum)
  return answer
}