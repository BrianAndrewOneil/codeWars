//Find the length of the longest substring in the given string s that is the same in reverse. 
longestPalindrome=function(s){
    let ans=0
    for (let i=0;i<s.length;i++){
        for(let h=i;h<=s.length;h++){
            let word=s.slice(i,h)
            if (word===word.split('').reverse().join('')){
                word.length>ans ? ans=word.length : ans=ans
            }
        }
    }
    return ans
  }




console.log(longestPalindrome("a"), 1)
console.log(longestPalindrome("aa"), 2)
console.log(longestPalindrome("baa"), 2)
console.log(longestPalindrome("aab"), 2)
console.log(longestPalindrome("zyabyz"), 6, "Are you sure that is a palindrome?")
console.log(longestPalindrome("baabcd"), 4)
console.log(longestPalindrome("baablkj12345432133d"), 9)