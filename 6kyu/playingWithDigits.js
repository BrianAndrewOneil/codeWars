//Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

function digPow(n, p){
    let num=[...n.toString()], sum=0
    for(var i of num){
        sum+=Math.pow(+i,p)
        p++
    }
    //return sum
    return (sum%n===0 ? sum/n : -1)
}

console.log(digPow(89, 1), 1)
console.log(digPow(92, 1), -1)
console.log(digPow(695, 2), 2)
console.log(digPow(46288, 3), 51)