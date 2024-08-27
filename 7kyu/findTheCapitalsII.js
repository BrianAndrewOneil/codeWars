// Write a function that takes a single string (word) as argument. 
//The function must return an ordered list containing the indexes of all capital letters in the string.

function capitals(word) {
  let ans=[]
  let index=0
  for (letter of word) {
    if (letter===letter.toUpperCase()) {
      ans.push(index)
    }
    index++
  }
  return ans
}


console.log(capitals('heLLowoRld'))
