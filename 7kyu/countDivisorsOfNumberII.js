//Given an integer, return the number of divisors
function getDivisorsCnt(n){
    let ans = 0
    for(let i=1;i<=n;i++){
        if (n%i===0) ans++
    }
    return ans
}

console.log(getDivisorsCnt(4), 3)
console.log(getDivisorsCnt(5), 2)
console.log(getDivisorsCnt(12), 6)
console.log(getDivisorsCnt(30), 8)