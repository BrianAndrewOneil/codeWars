//Given number d, how many proper fractions can be built using d as a denominator?
function properFractions(d) {
    if(d===1) return 0
    let result = d;
    for (let i = 2; i * i <= d; i++) {
        if (d % i == 0) {
            while (d % i == 0)
                d /= i;
            result -= result / i;
        }
    }
    if (d > 1)
        result -= result / d;
    return result;
}

//brute force solution using greatest common multiple
// function properFractions(n){
//     function gcd(a,b){
//         if (b == 0) return a
//         return gcd(b, a % b)
//     }
//     let ans=0
//     for(let i=1;i<n;i++){
//         if (gcd(i,n)===1) ans++
//     }
//     return ans
// }


console.log(properFractions(25), 20)
console.log(properFractions(2000), 800)
console.log(properFractions(100), 40)
