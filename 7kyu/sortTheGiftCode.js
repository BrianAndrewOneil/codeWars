//Accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
let sortGiftCode=code=>code.split('').sort((a,b)=>(a === b? 0 : a < b ? -1 : 1)).join('')
