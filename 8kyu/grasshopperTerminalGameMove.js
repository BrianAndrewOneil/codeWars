//The player rolls the dice and moves the number of spaces indicated by the dice two times.
//Take the current position of the hero and the roll (1-6) and return the new position.

const move = (position,roll) => roll*2 + position

console.log(move(0, 4), 8);
console.log(move(3, 6), 15);
console.log(move(2, 5), 12);