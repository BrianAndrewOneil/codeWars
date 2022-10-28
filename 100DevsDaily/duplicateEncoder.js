//Convert a string to a new string where each character in the new string is "(" 
//if that character appears only once in the original string, or ")" if that 
//character appears more than once in the original string.
function duplicateEncode(word){
    word=word.toLowerCase().split('')
    return word.map((l,i,a)=>a.indexOf(l)===a.lastIndexOf(l)?'(':')').join('')
}

console.log(duplicateEncode('din'))