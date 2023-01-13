//Check to see if two words are anagrams, case insensitive
let isAnagram = (test, original) => test.toLowerCase().split('').sort===original.toLowerCase().split('').sort

console.log(isAnagram("foefet", "toffee"), true)
console.log(isAnagram("Buckethead", "DeathCubeK"), true)
console.log(isAnagram("Twoo", "WooT"), true)