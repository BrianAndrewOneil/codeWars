//given a vector of strings, sort it alphabetically (case-sensitive, and based on the ASCII values of the chars)
//and then return the first value. The returned value must be a string, and have "***" between each of its letters.

let twoSort = s => s.sort().shift().split('').join('***')