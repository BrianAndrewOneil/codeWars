//Return the middle character of the word. If the word's length is odd, return the middle character
//If the word's length is even, return the middle 2 characters.
let getMiddle = s => s.length%2===0? s[s.length/2-1]+s[(s.length/2)] : s[Math.floor(s.length/2)]

console.log(getMiddle('abc'), 'b')
console.log(getMiddle('abcd'), 'bc')