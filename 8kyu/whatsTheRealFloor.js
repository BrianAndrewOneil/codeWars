//Write a function that given a floor in the american system returns the floor in the european system.
//With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. 
//In case of above 13, they move down by two because there are two omitted numbers below them.
//Basements (negatives) stay the same as the universal level.

const getRealFloor = n => n<=0 ? n : n < 13 ? n-1 : n-2

console.log(getRealFloor( 1),  0);
console.log(getRealFloor( 5),  4);
console.log(getRealFloor(15), 13);
console.log(getRealFloor(-2), -2);
console.log(getRealFloor(0), 0);