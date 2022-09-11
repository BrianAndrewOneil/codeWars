//Passed a string, return that string in an array where an uppercase letter is a person standing up, like a wave at a sporting event.
function wave(str){
    ans=[]
    for(let i=0;i<str.length;i++){
      let newWord = str.split('').map((l,index)=>i==index?l=l.toUpperCase():l=l).join('')
      if (newWord!=newWord.toLowerCase() ) ans.push(newWord)
    }
    return ans  
  }
