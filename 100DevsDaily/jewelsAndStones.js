//You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

let numJewelsInStones=(j,s)=>s.split('').filter(i=>j.includes(i)).length

//or, create object, will be more efficient for high-N
function numJewelsInStones2(jewels,stones){
    const map = {}
    let count=0
    for(const jewel of jewels){
        map[jewel]=true
    }
    for(const stone of stones){
        if(map[stone]){
            count++
        }
    }return count
}


console.log(numJewelsInStones2("aA", "aAAbbbb"), 3)
console.log(numJewelsInStones2("z", "ZZ"), 0)