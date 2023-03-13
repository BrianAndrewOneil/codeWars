//Find the length of the longest substring in the given string s that is the same in reverse. 
//https://www.codewars.com/kata/54bb6f887e5a80180900046b/train/javascript
longestPalindrome=function(s){
    function isPal(word){
        for(i=0;i<word.length/2;i++){
          if(word[i]!==word[word.length-i-1]) return false
          }
          return true
    }
    
    let ans=0
    for (let i=0;i<s.length;i++){
        if(s.slice(i).length<ans)break
        for(let h=s.length;h>i;h--){
            let word=s.slice(i,h)
            //console.log(word, word.length, ans)
            if(word.length<=ans) break
            if(isPal(word)){
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