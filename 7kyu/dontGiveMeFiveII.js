//Given the start number and the end number of a region, return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive
function dontGiveMeFive(start, end){
    let ans=0
    while(start<=end){
        if(!start.toString().includes('5')) ans++
        start++
    }
    return ans
}

console.log(dontGiveMeFive(1,9), 8)
console.log(dontGiveMeFive(4,17), 12)
console.log(dontGiveMeFive(150,159), 0)