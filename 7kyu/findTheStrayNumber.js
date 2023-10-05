//You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//Complete the method which accepts such an array, and returns that single different number.

function stray(numbers) {
    const map = {}
    for (const num of numbers){
        map[num]=map[num]+1 || 1
    }
    return +Object.keys(map).find(key => map[key] === 1)
}

console.log(stray([1, 1, 2]), 2);
console.log(stray([1, 2, 1]), 2);
console.log(stray([2, 1, 1]), 2);