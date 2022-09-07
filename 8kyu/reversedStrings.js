function solution(str){
    let answer = ''
    for (i=0;i<str.length;i++){
      answer+=str[str.length-i-1]
    }
    return answer
  }
