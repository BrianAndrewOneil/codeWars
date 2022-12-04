//Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
function findMissingLetter(array)
{
  for(let i=1;i<array.length;i++){
    if(array[i].charCodeAt(0)!=array[i-1].charCodeAt(0)+1){
      return (String.fromCharCode(array[i-1].charCodeAt(0)+1))
    }
  }
}


//https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
console.log(findMissingLetter(['a','b','c','d','f']), 'e')
console.log(findMissingLetter(['O','Q','R','S']), 'P')