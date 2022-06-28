//Check to see if a string has the same amount of 'x's and 'o's
//The method must return a boolean and be case insensitive.
let XO = str => ((str.toLowerCase().match(/o/g) || []).length)==((str.toLowerCase().match(/x/g) || []).length)