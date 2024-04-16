//Give 4 digits, return the latest time of day that can be built with those digits.
// https://www.codewars.com/kata/58925dcb71f43f30cd00005f/train/javascript

function latestClock(a, b, c, d) {
    let nums = new Array(a,b,c,d)
    let ans = []

    const largest = (n) => {
        let x
        while (n>=0) {
            if (nums.includes(n)){
                x = nums.indexOf(n)
                n = -1
            }
            n--
        }
        ans.push(nums[x])
        nums[x]=-1
    }

    largest(2)
    
    return ans
}

console.log(latestClock(1, 9, 8, 3), "19:38")
console.log(latestClock(9, 1, 2, 5), "21:59")
console.log(latestClock(1, 2, 8, 9), "19:28")
console.log(latestClock(0, 0, 0, 0), "00:00")
console.log(latestClock(2, 4, 0, 0), "20:40")