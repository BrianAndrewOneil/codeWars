//Take a list of ages when each of your great-grandparent died.
//Multiply each number by itself. Add them all together. Take the square root of the result and divide by two.

let predictAge=(a1,a2,a3,a4,a5,a6,a7,a8)=>Math.floor(Math.sqrt([a1,a2,a3,a4,a5,a6,a7,a8].reduce((acc,c)=>acc+(c*c),0))/2)
