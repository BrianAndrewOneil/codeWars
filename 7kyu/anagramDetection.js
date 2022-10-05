//Check to see if two words are anagrams, case insensitive
let isAnagram=(test,original)=>test.toLowerCase().split('').sort().join('')==original.toLowerCase().split('').sort().join('')