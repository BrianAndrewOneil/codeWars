//You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

let numJewelsInStones=(j,s)=>s.split('').filter(i=>j.includes(i)).length


console.log(numJewelsInStones("aA", "aAAbbbb"), 3)
console.log(numJewelsInStones("z", "ZZ"), 0)