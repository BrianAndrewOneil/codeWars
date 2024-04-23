// Given an array of arrays, return the sum of a specific set of numbers, starting with elements whose position is 
// equal to the main array length and going down by one at each step.

function elementsSum(arr,d){
    let n = arr.length, ans = []
    d==undefined ? d=0 : d
    for (subarr of arr) {
        subarr[n-1] == undefined ? ans.push(d) : ans.push(subarr[n-1])
        n--
    }
    return ans.reduce((acc,c)=>acc+c,0)
}

console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]]), 16);
console.log(elementsSum([[3], [4, 6, 5, 3, 2], [9, 8, 7, 4]]), 15);
console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []]), 7);
console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []], 5), 12);
console.log(elementsSum([[3, 2], [4], []]), 0);