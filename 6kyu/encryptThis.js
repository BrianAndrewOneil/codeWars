//Input is a string containing space separated words. Encrypt each word in the message using the following rules:
//The first letter must be converted to its ASCII code.
//The second letter must be switched with the last letter.
var encryptThis = function(text) {
    let ans=[]
    text=text.split(' ')
    for(var word of text){
      if(word.length>2){
        let second=word[1]
        let last=word[word.length-1]
        word=word.split('')
        word[1]=last
        word[word.length-1]=second
        word=word.join('')
      }
      word=word.charCodeAt(0)+(word.slice(1,(word.length)))
      ans.push(word)
    } 
    return ans.join(' ')
  }