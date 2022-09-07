//Return the count of distinct case-insensitive alphabetic characters and
//numeric digits that occur more than once in the input string. 
function duplicateCount(text){
  answer=[]
  text=text.toLowerCase().split('')
  while(text.length>0){
    let element=text.pop()
    if (text.includes(element)){
      if(!answer.includes(element)){
        answer.push(element)
      }
    }
  }
  return answer.length
}
