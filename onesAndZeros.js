//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
const binaryArrayToNumber = arr => arr.reverse().reduce((acc,c,i)=> acc+(c*Math.pow(2,i)))