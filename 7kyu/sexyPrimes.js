//Two numbers are "sexy primes" if they are both prime and 6 apart.
function sexy_prime(x, y){
    let pair = [x,y].sort((a,b)=>a-b)
    if (pair[0]<=1) return false
    for (let n=2; n<pair[0]; n++){
        if (pair[0]%n===0) return false
    }
    for (let n=2; n<pair[1]; n++){
        if (pair[1]%n===0) return false
    }
    return pair[1]-pair[0]===6
}

console.log(sexy_prime(5, 11),true)
console.log(sexy_prime(13, 19),true)
console.log(sexy_prime(83, 89),true)
console.log(sexy_prime(1, 11),false)