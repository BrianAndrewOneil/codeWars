//Given an input of an array of digits, return the array with each digit incremented by its position in the array: 
//the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).
//Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

//standard function
function incrementer1(nums) { 
    let ans = nums.map((c,i,a) => {
        c=c+i+1
        c>9 ? c=(c+i+1)%10 : c
        return c
    })
    return ans
}

//as one-liner arrow function
const incrementer = nums => nums.map( (c,i,a) => c+i+1>9 ? (c+i+1)%10 : c+i+1 )

console.log(incrementer([]), [])
console.log(incrementer([1, 2, 3]), [2, 4, 6])
console.log(incrementer([4, 6, 7, 1, 3]), [5, 8, 0, 5, 8])
console.log(incrementer([3, 6, 9, 8, 9]), [4, 8, 2, 2, 4])
console.log(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]), [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2])
//console.log(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]), [])

