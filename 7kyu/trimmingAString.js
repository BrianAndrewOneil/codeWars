//Trim a string if it is longer than the requested maximum string length. The result should also end with "..."
//https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript

const trim = (str, size) => str.length<=size ? str : size<=3 ? `${str.slice(0,size)}...` : `${str.slice(0,size-3)}...`

console.log(trim("Creating kata is fun", 14),"Creating ka...");
console.log(trim("He", 1),"H...");
console.log(trim("Code Wars is pretty rad", 50), "Code Wars is pretty rad");
console.log(trim("SWu zE whhA nlg", 2),"SW...");
