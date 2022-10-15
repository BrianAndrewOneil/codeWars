//Given a string, return a string that has broken up any camel casing, putting a space between words
let solution=string=>string.split('').map(l=>l===l.toUpperCase()?" "+l:l).join('')