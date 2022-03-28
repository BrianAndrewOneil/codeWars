var countSheep = function (num){
    let answer = ''
    for (let i=0; i<num; i++){
      answer+=(`${i+1} sheep...`)
    }
    return answer
  }