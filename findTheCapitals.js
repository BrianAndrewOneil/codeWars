var capitals = function (word) {
    // Write a function that takes a single string (word) as argument. 
    //The function must return an ordered list containing the indexes of all capital letters in the string.
    let answer = []
    word.split('').forEach( (e,i)=>
    {if (e === e.toUpperCase())
      {answer.push(i)
      } 
    })
    return answer
  };