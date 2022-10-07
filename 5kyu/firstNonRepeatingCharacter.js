//Given a string input, return the first character that is not repeated in the string.
function firstNonRepeatingLetter(s) {
  s=s.split('')
  s2=[]
  while(s.length>0){
    var letter=s.shift()
    if (s.includes(letter.toLowerCase())||s.includes(letter.toUpperCase())
      ||s2.includes(letter.toLowerCase())||s2.includes(letter.toUpperCase())){
      }
      else return(letter)
      s2.push(letter) 
  }
  return s.join('')
}