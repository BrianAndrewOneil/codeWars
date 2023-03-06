//Calculate the minimal number of moves to win the game "Towers of Hanoi", with given number of disks.

var hanoi = n => Math.pow(2,n)-1

console.log(hanoi(1), 1)
console.log(hanoi(2), 3)
console.log(hanoi(3), 7)
console.log(hanoi(5), 31)
console.log(hanoi(10), 1023)
console.log(hanoi(20), 1048575)