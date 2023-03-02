//square all of the numerals in the number n, then count the times the digit d appears in the squared numbers

function nbDig(n, d) {
    let squaredSet=[]
    for(let i=0;i<=n;i++){
        squaredSet.push(i*i)
    }
    return [...squaredSet].toString().split('').filter(e=>+e===d).length
}

console.log(nbDig( 10, 1),  4);
console.log(nbDig( 5750, 0), 4700);
console.log(nbDig(11011, 2), 9481);
console.log(nbDig(12224, 8), 7733);
console.log(nbDig(11549, 1), 11905);