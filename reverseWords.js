//Accept a string parameter, and reverse each word in the string. All spaces in the string should be retained.
let reverseWords=str=>str.split(' ').map(w=>w.split('').reverse().join('')).join(' ')