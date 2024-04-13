//Give 4 digits, return the latest time of day that can be built with those digits.
// https://www.codewars.com/kata/58925dcb71f43f30cd00005f/train/javascript

function latestClock(a, b, c, d) {
    let nums = new Array(a,b,c,d).sort((a,b)=>b-a)
    let ans

    const returnLargest = (n) => {
        let x = 
    }

    if (nums.includes(2)) {
        ans = '2'
        nums[nums.indexOf(2)]=-1
    }
    if (nums.includes(1)) {
        ans = '1'
        nums[nums.indexOf(2)]=-1
    }
    else {
        ans = '0'
    }
    //return nums.indexOf(2)
}

console.log(latestClock(1, 9, 8, 3), "19:38")
console.log(latestClock(9, 1, 2, 5), "21:59")
console.log(latestClock(1, 2, 8, 9), "19:28")
console.log(latestClock(0, 0, 0, 0), "00:00")
console.log(latestClock(2, 4, 0, 0), "20:40")