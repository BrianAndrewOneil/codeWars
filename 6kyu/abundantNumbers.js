//https://www.codewars.com/kata/57f3996fa05a235d49000574/train/javascript
//Given n, return the highest available odd or even "abundant" number in that range and it's abundance.
//Abundant number: The sum of its proper divisors > the number itself
//Abundance: The difference beween the sum of proper divisors and the number
function sumDivisors(n){
    let divisors = []
    for (let i=1;i<n;i++){
        if (n%i===0) divisors.push(i)
    }
    return divisors.reduce((acc,c)=>acc+c,0)
}

function abundant(h){
    let searching = true, ans=[]
    //while loop here, start from h and work down, test to find highest Abundant #
    while (searching&&h>=1) {
        if (sumDivisors(h)>h) {
            ans[0]=[h]
            ans[1]=[sumDivisors(h)-h]
            searching=false
        }
        h--
    }
    return ans
}

console.log(abundant(15), [[12],[4]]);
console.log(abundant(19), [[18],[3]]);
console.log(abundant(100), [[100],[17]]);
console.log(abundant(999), [[996],[360]]);