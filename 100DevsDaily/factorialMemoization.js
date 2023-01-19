//Return the product of all positive integers less than or equal to a supplied integer. Use recursion & memoization.
const memo={}
const factorial = n => {
    if (n<2) return 1
    else if (memo[n]) return memo[n]
    else{
        let result= n*factorial(n-1)
        memo[n]=result
        return result
    }
};

console.log(factorial(5), 120)