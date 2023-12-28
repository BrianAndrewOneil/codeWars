//Given a fraction in the form of an array, return the fraction reduced to its simpliest form.

function reduce (fraction){
    var n
    fraction[0]>=fraction[1] ? n = fraction[1] : n = fraction[0]
    while (n>=1) {
        if (fraction[0]%n===0 && fraction[1]%n===0) {
            return [fraction[0]/n,fraction[1]/n]
        }
        n--
    }
}

console.log(reduce([60, 20]), [3, 1])
console.log(reduce([80, 120]), [2, 3])
console.log(reduce([4, 2]), [2, 1])
console.log(reduce([45, 120]), [3, 8])
console.log(reduce([1000, 1]), [1000, 1])
console.log(reduce([1, 1]), [1, 1])