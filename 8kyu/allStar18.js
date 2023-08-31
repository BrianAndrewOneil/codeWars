//Accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

const strCount = (str,letter) => str.split('').filter(l=>l===letter).length

console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('',      'z'), 0);