function fakeBin(x){
    let answer = ''
    for (let i=0; i<x.length; i++){
      if (x.charAt(i)<5){
        answer+=0
      }else{
        answer+=1
      }
    }
    return answer
  }