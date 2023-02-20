//Returns the first non-repeated character in the given string.
//If all the characters are unique, return the first character of the string.
//If there is no unique character, return null

let firstNonRepeated = s => s.split('').filter(e=>s.indexOf(e)===s.lastIndexOf(e))[0] || null

console.log(firstNonRepeated("test"), 'e')
console.log(firstNonRepeated("teeter"), 'r')
console.log(firstNonRepeated("1122321235121222"), '5')
console.log(firstNonRepeated("rend"), 'r')
console.log(firstNonRepeated("aabbcc"), null)
