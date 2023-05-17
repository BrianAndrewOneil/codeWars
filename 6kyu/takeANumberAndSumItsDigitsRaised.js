//From the title, this sum gives the same number: 89 = 8^1 + 9^2
//Given a range of numbers, return all nums within the range that have this property.

function sumDigPow(a, b) {
    let ans = []
    for (let num=a; num<=b; num++){
        let n = num.toString().split('')
        let sum = n.map( (c,i,a)=> Math.pow(c,(i+1)) ).reduce((acc,c)=>acc+c,0)
        if (sum===num) ans.push(num)
    }
    return ans
}


console.log(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
console.log(sumDigPow(10, 100),  [89])
console.log(sumDigPow(90, 100), [])
console.log(sumDigPow(90, 150), [135])
console.log(sumDigPow(50, 150), [89, 135])
console.log(sumDigPow(10, 150), [89, 135])