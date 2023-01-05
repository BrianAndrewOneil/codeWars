//Given n, return that value of the fib series. Use memoization this time.
const memo = {}
function fibonacci(n){
    if(n<=1){
        return n
    }else if(memo[n]){
        return memo[n]
    }else{
        let result = fibonacci(n-1)+fibonacci(n-2)
        memo[n]=result
        return result
    }
}

console.log(fibonacci(1), 1)
console.log(fibonacci(4), 3)
console.log(fibonacci(8), 21)


//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144