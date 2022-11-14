//Given an array of numbers, sort the odd numbers in ascending order while leaving the even numbers at their original positions.
function sortArray(arr){
    let odds=arr.filter(e=>e%2!=0).sort((a,b)=>a-b)
    return arr.map(e=>e%2==0?e:odds.shift())
}
//To make more efficient: first, sort with (b-a) to descending order, then use pop() instead of shift(), now it's linear time

console.log(sortArray([7, 1]), [1, 7])
console.log(sortArray([5, 8, 6, 3, 4]), [3, 8, 6, 5, 4])
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), [1, 8, 3, 6, 5, 4, 7, 2, 9, 0])
