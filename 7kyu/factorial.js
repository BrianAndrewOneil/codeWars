//Return the factorial (n!) of a given int between 0 and 12, else throw a RangeError.
function factorial(n) {
    if (!(n >= 0 && n <= 12)) throw new RangeError(" ")
    else if (n === 0) return 1
    else return (n * factorial(n - 1))
  }