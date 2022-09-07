//Write a function that will accept a jumble of letters as well as a dictionary, 
//and output a list of words that the pirate might have meant.
function grabscrab(anagram, dictionary){
    anagram=anagram.split('').sort().join('')
    d=dictionary.map(w=>w.split('').sort().join(''))
    answer=[]
    d.forEach((w,i) => {
      if(w===anagram){
        answer.push(dictionary[i])
      }
    })
    return answer
  }
