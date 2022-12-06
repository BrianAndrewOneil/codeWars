//You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let jewelCount=0
    for (var i of stones){
        if (jewels.includes(i)) jewelCount++
    }
    return jewelCount
};


console.log(numJewelsInStones("aA", "aAAbbbb"), 3)
console.log(numJewelsInStones("z", "ZZ"), 0)