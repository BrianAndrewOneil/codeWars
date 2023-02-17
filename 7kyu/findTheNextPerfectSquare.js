// Return the next square if sq is a perfect square, -1 otherwise

findNextSquare=n=>Number.isInteger(Math.sqrt(n))?(Math.sqrt(n)+1)*(Math.sqrt(n)+1):-1

console.log(findNextSquare(121), 144)
console.log(findNextSquare(625), 676)
console.log(findNextSquare(15241383936), 15241630849)
console.log(findNextSquare(123), -1)
