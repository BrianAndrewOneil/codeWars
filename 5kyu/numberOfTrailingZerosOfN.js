//calculate the number of trailing zeros in a factorial of a given number.
function zeros (n) {
    let zerocount = 0;
    for (i = 5; n/i > 0; i *= 5) {
        zerocount += Math.floor(n/i)
    }
    return zerocount
}

console.log(zeros(0), 0, "Testing with n = 0")
console.log(zeros(5), 1, "Testing with n = 5")
console.log(zeros(6), 1, "Testing with n = 6")
console.log(zeros(30), 7, "Testing with n = 30")