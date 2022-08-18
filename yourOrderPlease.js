//Sort a given string. Each word in the string will contain a single number. 
//This number is the position the word should have in the result.
function order(words){
    words=words.split(' ')
    let newOrder=[]
    let i=1
    while(i<=words.length){
      newOrder.push(words.filter(w=>w.includes(i)))
      i++
    }
    return newOrder.join(' ')
  }