//Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the given array.
function averageLength(input) { 
    let avg=Math.round((input.reduce((acc,c)=>acc+c.length,0))/input.length)
    return input.map(word=>{
        let newWord=''
        for (let i=0;i<avg;i++) newWord+=word[0]
        return newWord
    })
  }

  console.log(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc'])