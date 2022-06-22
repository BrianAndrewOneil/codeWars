//Write a function that takes in a string of one or more words, and returns the 
//same string but with all five or more letter words reversed.
let spinWords = string => string.split(' ').map(w=>(w.length<5?w:w.split('').reverse().join(''))).join(' ')