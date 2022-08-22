//Takes a string of parentheses and determine if the order of the parentheses is valid
function validParentheses(parens) {
    let count=0
    for(const element of parens){
      if(element=='('){
        count++
      }else{
        count--
        if(count<0){
        return false
        }
      }
    }
    return count===0;
  }