//Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    if (input.length==0 || input==null) return []
    let count=0, sum=0
    for (const n of input){
        if (n>0) count++
        else sum+=n
    }
    return [count,sum]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), [10,-65])
console.log(countPositivesSumNegatives([]), [])