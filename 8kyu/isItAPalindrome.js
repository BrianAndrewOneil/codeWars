//Write a function that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x) {
    const ans=x.toLowerCase().split('').reverse().join('')
    return (x.toLowerCase()===ans)
}


console.log(isPalindrome("a"), true)
console.log(isPalindrome("aba"), true)
console.log(isPalindrome("Abba"), true)
console.log(isPalindrome("hello"), false)
console.log(isPalindrome("Bob"), true)
console.log(isPalindrome("Madam"), true)
console.log(isPalindrome("AbBa"), true)
console.log(isPalindrome(""), true)