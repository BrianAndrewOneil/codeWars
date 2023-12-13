//Given a 32-bit integer n. Swap each pair of adjacent bits in its binary representation and return the result as a decimal number.

function swapAdjacentBits(n) {
    n=n.toString(2).split('')
    if (n.length%2!=0) n.unshift('0')
    return parseInt(n.map((n,i,a) => i%2!=0 ? a[i-1] : a[i+1]).join(''),2)
}

console.log(swapAdjacentBits(13) , 14)
console.log(swapAdjacentBits(74) , 133)
console.log(swapAdjacentBits(1073741823) , 1073741823)
console.log(swapAdjacentBits(0) , 0)
console.log(swapAdjacentBits(1) , 2)
console.log(swapAdjacentBits(83748) , 166680)
