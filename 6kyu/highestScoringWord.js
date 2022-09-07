//Find the highest scoring word given a string of words. 
//Each letter of a word scores points according to its position in the alphabet
function high(x){
    x=x.split(' ')
    let winner=''
    let winnerValue=0
    for(var word of x){
      let value=word.split('').map(e=>e.charCodeAt(0)-96).reduce((acc,c)=>acc+c)
      if(value>winnerValue){
        winner=word
        winnerValue=value
      }
    }
    return winner
}
