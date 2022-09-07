//Convert a string to a new string where each character in the new string is "(" 
//if that character appears only once in the original string, or ")" if that 
//character appears more than once in the original string.
function duplicateEncode(word){
    word=word.split('')
    let ans=[]
    for(let i=0;i<word.length;i++){
      let char=word[i].toLowerCase()
      word[i]='1'
      word.includes(char)?ans.push(')'):ans.push('(')
      word[i]=char   
    }
    return ans.join('')
}
