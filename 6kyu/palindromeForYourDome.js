//Check to see if the string is a palendrome without using the reverse() method.
//Disregard non-alphanumeric characters.
function palindrome(string) {
    string=string.toLowerCase().replace(/[^0-9a-z]/gi, '').split('')
    while(string.length>1){
      let a=string.shift()
      let b=string.pop()
      if (a!=b) return false
    }
    return true
  }
